import img9 from "../assets/9image.png";
import "./Admissions.css";

const levels = [
  { label: "Reception 1 & 2", age: "Ages 2–4", icon: "🌱", color: "green" },
  { label: "Nursery 1 & 2", age: "Ages 4–5", icon: "🌼", color: "green" },
  { label: "Basic 1 – 5", age: "Ages 5–10", icon: "📖", color: "blue" },
  {
    label: "Junior Technical (JSS 1–3)",
    age: "Ages 10–13",
    icon: "🔬",
    color: "blue",
  },
  {
    label: "Senior Technical (SS 1–2)",
    age: "Ages 13–16",
    icon: "🎓",
    color: "wine",
  },
];

const steps = [
  {
    step: "01",
    title: "Visit the School",
    desc: "Come to No. 1 Vision Drive, Off School Road, Okutukutu, Yenagoa to obtain your registration form.",
  },
  {
    step: "02",
    title: "Complete the Form",
    desc: "Fill in the registration form with your child's details and submit it along with the required documents.",
  },
  {
    step: "03",
    title: "Assessment",
    desc: "Your child may undergo a brief assessment to determine the appropriate class placement.",
  },
  {
    step: "04",
    title: "Confirmation",
    desc: "Receive your admission letter and prepare for resumption. Welcome to the Vision Family!",
  },
];

export default function Admissions({ navigate }) {
  return (
    <div className="admissions">
      <div className="page-header">
        <div className="ph-inner">
          <p className="eyebrow">Join Our Family</p>
          <h1>Admissions</h1>
          <p>
            Admissions are currently open. Enrol your child and give them the
            gift of dual-track education.
          </p>
        </div>
      </div>

      {/* LEVELS */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Open Levels</p>
          <h2 className="section-title">Currently Enrolling</h2>
          <p className="section-sub">
            We accept students across all levels — from Reception through Senior
            Secondary.
          </p>
          <div className="levels-grid">
            {levels.map((l, i) => (
              <div className={`level-card lc-${l.color}`} key={i}>
                <span className="lc-icon">{l.icon}</span>
                <h4>{l.label}</h4>
                <span className="lc-age">{l.age}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY + IMAGE */}
      <section className="section apply-section">
        <div className="section-inner apply-inner">
          <div className="apply-steps">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">How to Apply</h2>
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-num">{s.step}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={img9}
            alt="Students enrolling at Vision Family Academy"
            className="apply-img"
          />
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="adm-contact-banner">
        <div className="acb-inner">
          <div className="acb-text">
            <h2>Ready to Enrol?</h2>
            <p>
              Visit us at our school premises or call to speak with our
              admissions team directly.
            </p>
            <p className="acb-address">
              📍 No. 1 Vision Drive, Off School Road, Okutukutu, Yenagoa,
              Bayelsa State
            </p>
          </div>
          <div className="acb-actions">
            <a href="tel:08103467725" className="acb-phone">
              <span>📞</span>
              <div>
                <strong>08103467725</strong>
                <span>Call Admissions</span>
              </div>
            </a>
            <a href="tel:08066810524" className="acb-phone">
              <span>📞</span>
              <div>
                <strong>08066810524</strong>
                <span>Call Admissions</span>
              </div>
            </a>
            <button className="btn-wine" onClick={() => navigate("contact")}>
              Send a Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
