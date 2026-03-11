import img1 from "../assets/1image.png";
import img2 from "../assets/2image.png";
import img3 from "../assets/3image.png";
import img4 from "../assets/4image.png";
import img5 from "../assets/5image.png";
import "./Home.css";

const pillars = [
  { icon:"🎓", title:"Academic Curriculum", desc:"Government-approved subjects from Reception through Senior Secondary — rigorous, structured, and examination-ready.", color:"blue" },
  { icon:"⚙️", title:"Vocational Training",  desc:"Hands-on skills: welding, fashion, ICT, catering, plumbing, painting and more — making graduates self-reliant.", color:"wine" },
  { icon:"🤝", title:"Certified Partnerships", desc:"We collaborate with the Federal Ministry of Labour, City & Guilds of London, and NBTE for recognised certifications.", color:"green" },
];

const assess = ["Punctuality","Class Attendance","Class Participation","Assignments","Research & Projects","Presentations","Mid-Term Tests","Examinations"];

export default function Home({ navigate }) {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow" style={{color:"var(--green-light)"}}>Welcome to</p>
            <h1 className="hero-h1">Vision Family<br/><em>Academy</em></h1>
            <p className="hero-member">A proud member of <strong>Vision International School</strong></p>
            <p className="hero-desc">
              A forward-thinking school committed to eradicating illiteracy through quality education and practical skills development. We prepare students for higher education, employment, and self-reliance.
            </p>
            <div className="hero-btns">
              <button className="btn-wine" onClick={() => navigate("admissions")}>Apply Now</button>
              <button className="btn-outline-white" onClick={() => navigate("programs")}>Our Programs</button>
            </div>
          </div>
          <div className="hero-mosaic">
            <div className="hm-main">
              <img src={img1} alt="Vision Family Academy students" />
            </div>
            <div className="hm-stack">
              <img src={img2} alt="Classroom learning" />
              <img src={img3} alt="Vocational training" />
            </div>
            <div className="hm-badge">
              <span className="hm-badge-icon">📚</span>
              <strong>Dual Learning</strong>
              <span>Academic + Vocational</span>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/></svg>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">What Makes Us Different</p>
          <h2 className="section-title">The Vision Advantage</h2>
          <p className="section-sub">Two complete learning tracks. One extraordinary graduate.</p>
          <div className="pillars-grid">
            {pillars.map((p,i) => (
              <div className={`pillar pillar-${p.color}`} key={i}>
                <div className="p-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="gallery-strip">
        <div className="gs-inner">
          <img src={img4} alt="School activity" />
          <img src={img5} alt="Students at work" />
          <div className="gs-text-card">
            <p className="eyebrow">Our Campus</p>
            <h3>A Safe &amp; Conducive<br/>Learning Environment</h3>
            <p>Well-equipped classrooms, technical workshops, computer labs, and practical skill areas — all designed for the modern learner.</p>
            <button className="btn-blue" onClick={() => navigate("about")}>Learn More</button>
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT ── */}
      <section className="section assess-section">
        <div className="section-inner assess-inner">
          <div className="assess-text">
            <p className="eyebrow">How We Evaluate</p>
            <h2 className="section-title">Holistic Assessment &amp; Grading</h2>
            <p>We believe a child's success is determined by both academic performance and character development. Our grading system reflects the whole student — not just exam scores.</p>
            <button className="btn-blue" style={{marginTop:28}} onClick={() => navigate("programs")}>View Full Curriculum</button>
          </div>
          <div className="assess-grid">
            {assess.map((a,i) => (
              <div className="assess-chip" key={i}>
                <span className="ac-num">{String(i+1).padStart(2,"0")}</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="home-cta">
        <div className="hcta-inner">
          <h2>Admissions Are Currently Open!</h2>
          <p>Enrol your child today from Reception to Senior Secondary. Visit us at No. 1 Vision Drive, Okutukutu, Yenagoa.</p>
          <div className="hcta-btns">
            <button className="btn-wine" onClick={() => navigate("admissions")}>How to Apply</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Call Us Now</button>
          </div>
        </div>
      </section>

    </div>
  );
}
