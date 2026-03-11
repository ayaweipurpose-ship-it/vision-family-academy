import { useState } from "react";
import img10 from "../assets/10image.png";
import "./Contact.css";

export default function Contact() {
  const [form, setForm]     = useState({ name:"", phone:"", email:"", subject:"", message:"" });
  const [sent, setSent]     = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <div className="contact">
      <div className="page-header">
        <div className="ph-inner">
          <p className="eyebrow">We'd Love to Hear From You</p>
          <h1>Contact Us</h1>
          <p>Questions about admissions, programs, or anything else? Reach out and we'll respond promptly.</p>
        </div>
      </div>

      {/* MAIN CONTACT GRID */}
      <section className="section">
        <div className="section-inner ct-grid">
          {/* INFO */}
          <div className="ct-info">
            <img src={img10} alt="Vision Family Academy contact" className="ct-img" />
            <div className="ct-cards">
              <div className="ct-card">
                <span>📍</span>
                <div>
                  <strong>Visit Us</strong>
                  <p>No. 1 Vision Drive, Off School Road,<br/>Okutukutu, Yenagoa,<br/>Bayelsa State, Nigeria</p>
                </div>
              </div>
              <div className="ct-card">
                <span>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p><a href="tel:08103467725">08103467725</a></p>
                  <p><a href="tel:08066810524">08066810524</a></p>
                </div>
              </div>
              <div className="ct-card">
                <span>🕐</span>
                <div>
                  <strong>School Hours</strong>
                  <p>Mon – Fri: 8:00 AM – 3:00 PM</p>
                  <p>Saturday: 9:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="ct-form-wrap">
            {sent ? (
              <div className="ct-success">
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out to Vision Family Academy. We'll get back to you shortly.</p>
                <button className="btn-blue" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={submit}>
                <h3>Send a Message</h3>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" required placeholder="Your full name" value={form.name} onChange={change}/>
                  </div>
                  <div className="cf-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="08XXXXXXXXX" value={form.phone} onChange={change}/>
                  </div>
                </div>
                <div className="cf-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={change}/>
                </div>
                <div className="cf-group">
                  <label>Subject *</label>
                  <select name="subject" required value={form.subject} onChange={change}>
                    <option value="">Select a subject</option>
                    <option>Admissions Enquiry</option>
                    <option>Academic Programs</option>
                    <option>Vocational Training</option>
                    <option>Fees & Payments</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="cf-group">
                  <label>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Write your message here..." value={form.message} onChange={change}/>
                </div>
                <button type="submit" className="btn-blue cf-submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="ct-map-bar">
        <div className="ct-map-inner">
          <span>📍</span>
          <div>
            <strong>Find Us</strong>
            <p>No. 1 Vision Drive, Off School Road, Okutukutu, Yenagoa, Bayelsa State</p>
          </div>
          <a
            href="https://maps.google.com/?q=Okutukutu,Yenagoa,Bayelsa"
            target="_blank" rel="noopener noreferrer"
            className="btn-wine"
          >Open in Google Maps</a>
        </div>
      </div>
    </div>
  );
}
