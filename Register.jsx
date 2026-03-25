import { useState } from "react";
import "./Register.css"; // We'll create this to match your style

export default function Register({ navigate }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    level: "",
    parentPhone: "",
    studentPhone: "",
    status: "Pending", // Hidden from user, set automatically
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Connect to your PHP API
      const response = await fetch(
        "http://localhost/vision%20family/VFC/api.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.status === "success") {
        alert(
          "Registration Successful! Please visit the school for assessment.",
        );
        navigate("home"); // Send them back to home after success
      } else {
        alert("Server error: " + result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Could not connect to the server. Is XAMPP running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="reg-card">
        <button className="back-btn" onClick={() => navigate("admissions")}>
          ← Back to Admissions
        </button>

        <h2>Student Registration</h2>
        <p>Please provide accurate details for the student enrollment.</p>

        <form onSubmit={handleSubmit} className="reg-form">
          <div className="form-row">
            <div className="input-group">
              <label>First Name</label>
              <input
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Applying For Level</label>
            <select
              name="level"
              required
              value={formData.level}
              onChange={handleChange}
            >
              <option value="">Select Level</option>

              <optgroup label="Early Childhood">
                <option value="Pre-Nursery">Pre-Nursery</option>
                <option value="Nursery 1">Nursery 1</option>
                <option value="Nursery 2">Nursery 2</option>
              </optgroup>

              <optgroup label="Primary (Basic)">
                <option value="Basic 1">Basic 1</option>
                <option value="Basic 2">Basic 2</option>
                <option value="Basic 3">Basic 3</option>
                <option value="Basic 4">Basic 4</option>
                <option value="Basic 5">Basic 5</option>
                <option value="Basic 6">Basic 6</option>
              </optgroup>

              <optgroup label="Junior Secondary">
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
              </optgroup>

              <optgroup label="Senior Secondary">
                <option value="SS 1">SS 1</option>
                <option value="SS 2">SS 2</option>
                <option value="SS 3">SS 3</option>
              </optgroup>
            </select>
          </div>
          <div className="input-group">
            <label>Parent/Guardian Phone</label>
            <input
              name="parentPhone"
              type="tel"
              required
              value={formData.parentPhone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Student Phone (Optional)</label>
            <input
              name="studentPhone"
              type="tel"
              value={formData.studentPhone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Processing..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
