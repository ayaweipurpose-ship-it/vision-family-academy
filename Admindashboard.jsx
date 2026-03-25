import React, { useState, useEffect, useCallback } from "react";
import "./AdminDashboard.css";

// Updated URL for your specific XAMPP path
const API_URL = "http://localhost/vision%20family/VFC/api.php";

export default function AdminDashboard({ admin, onLogout }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    level: "",
    parentPhone: "",
    studentPhone: "",
    status: "Pending",
  });

  // Fetch data from MySQL
  const fetchStudents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Student Saved!");
        setForm({
          firstName: "",
          lastName: "",
          level: "",
          parentPhone: "",
          studentPhone: "",
          status: "Pending",
        });
        fetchStudents();
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to save student.");
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Delete this student permanently?")) {
      try {
        const response = await fetch(`${API_URL}?id=${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchStudents();
        }
      } catch (error) {
        console.error("Delete Error:", error);
        alert("Could not delete record.");
      }
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h2>Vision Family Admin</h2>
        <div className="admin-user">
          <span>{admin?.username}</span>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="admin-main">
        {/* Form Section */}
        <div className="form-card">
          <h3>Add Student</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <input
              name="level"
              placeholder="Level"
              value={form.level}
              onChange={handleChange}
            />
            <input
              name="parentPhone"
              placeholder="Parent Phone"
              value={form.parentPhone}
              onChange={handleChange}
            />
            <input
              name="studentPhone"
              placeholder="Student Phone"
              value={form.studentPhone}
              onChange={handleChange}
            />
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button type="submit" className="btn-save">
              Save Record
            </button>
          </form>
        </div>

        {/* Table Section */}
        <div className="list-card">
          <h3>Student Directory</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>
                      {s.firstName} {s.lastName}
                    </td>
                    <td>{s.level}</td>
                    <td>
                      <span className={`badge ${s.status.toLowerCase()}`}>
                        {s.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteStudent(s.id)}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
