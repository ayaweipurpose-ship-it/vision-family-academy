import img8 from "../assets/8image.png";
import "./Programs.css";

const jss = [
  "English Language","Literature in English","Mathematics","Intermediate Science",
  "National Values","Civic Education","Digital Technology","Prevocational Studies",
  "National History","Creative Arts","Religious Studies",
];
const sss = [
  "Mathematics","English Language","Literature","Chemistry","Physics","Biology",
  "Geography","Agricultural Science","Economics","Commerce","Marketing",
  "Digital Technology","Financial Accounting","Civic Education","Religious Studies","Government",
];
const vocational = [
  { icon:"🔩", name:"Welding" },
  { icon:"✂️", name:"Fashion Design" },
  { icon:"💻", name:"Computer Skills" },
  { icon:"💇", name:"Hair Dressing" },
  { icon:"✂️", name:"Haircut" },
  { icon:"📿", name:"Bead Making" },
  { icon:"🍳", name:"Catering & Baking" },
  { icon:"🔧", name:"Plumbing" },
  { icon:"🖌️", name:"Painting" },
  { icon:"🪟", name:"Tiling" },
  { icon:"🛠️", name:"Technical & Craft Skills" },
];
const partners = [
  { name:"Federal Ministry of Labour & Employment", icon:"🏛️", desc:"Ensuring our vocational training meets national employment standards." },
  { name:"City & Guilds of London", icon:"🎖️", desc:"Internationally recognised technical and vocational qualifications." },
  { name:"NBTE / Skill Training Bodies", icon:"📜", desc:"National Board for Technical Education accredited skill development." },
];

export default function Programs({ navigate }) {
  return (
    <div className="programs">
      <div className="page-header">
        <div className="ph-inner">
          <p className="eyebrow">What We Offer</p>
          <h1>Programs &amp; Curriculum</h1>
          <p>A full dual learning system — academic rigour plus hands-on vocational training at every level.</p>
        </div>
      </div>

      {/* DUAL SYSTEM OVERVIEW */}
      <section className="section">
        <div className="section-inner dual-overview">
          <div className="do-text">
            <p className="eyebrow">The Dual Learning System</p>
            <h2 className="section-title">Two Tracks,<br/>One Complete Education</h2>
            <p>At Vision Family Academy, no student graduates without both a strong academic foundation and a practical skill they can use immediately. This is the Vision difference.</p>
          </div>
          <img src={img8} alt="Students in dual learning program" className="do-img" />
        </div>
      </section>

      {/* ACADEMIC TRACKS */}
      <section className="section acad-section">
        <div className="section-inner">
          <p className="eyebrow">Track 1 — Academics</p>
          <h2 className="section-title">Academic Curriculum</h2>
          <p className="section-sub">Government-approved subjects from Reception through Senior Secondary.</p>
          <div className="acad-grid">
            <div className="acad-card acad-jss">
              <div className="acad-header">
                <span className="acad-badge">JSS 1–3</span>
                <h3>Junior Secondary</h3>
              </div>
              <ul className="subject-list">
                {jss.map((s,i) => <li key={i}><span>▸</span>{s}</li>)}
              </ul>
            </div>
            <div className="acad-card acad-sss">
              <div className="acad-header">
                <span className="acad-badge">SS 1–2</span>
                <h3>Senior Secondary</h3>
              </div>
              <ul className="subject-list">
                {sss.map((s,i) => <li key={i}><span>▸</span>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VOCATIONAL */}
      <section className="section voc-section">
        <div className="section-inner">
          <p className="eyebrow">Track 2 — Vocational</p>
          <h2 className="section-title">Practical Skills Training</h2>
          <p className="section-sub">Hands-on skills that give every graduate the ability to create income and opportunity.</p>
          <div className="voc-grid">
            {vocational.map((v,i) => (
              <div className="voc-card" key={i}>
                <span className="voc-icon">{v.icon}</span>
                <p>{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="section partner-section">
        <div className="section-inner">
          <p className="eyebrow">Our Partnerships</p>
          <h2 className="section-title">Certified &amp; Recognised Training</h2>
          <p className="section-sub">We collaborate with reputable institutions to ensure quality training and certification for our students.</p>
          <div className="partner-grid">
            {partners.map((p,i) => (
              <div className="partner-card" key={i}>
                <span className="part-icon">{p.icon}</span>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section prog-cta-section">
        <div className="section-inner prog-cta">
          <h2>Ready to Enrol?</h2>
          <p>Admissions are open. Visit us or call to get your registration form today.</p>
          <button className="btn-wine" onClick={() => navigate("admissions")}>See Admissions Info</button>
        </div>
      </section>
    </div>
  );
}
