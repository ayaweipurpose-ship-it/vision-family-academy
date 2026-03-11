import img6 from "../assets/6image.png";
import img7 from "../assets/7image.png";
import "./About.css";

const facilities = [
  { icon:"🏫", label:"Well-equipped Classrooms" },
  { icon:"🛠️", label:"Technical & Vocational Workshops" },
  { icon:"💻", label:"Computer Learning Facilities" },
  { icon:"🔧", label:"Practical Skill Areas" },
  { icon:"👩‍🏫", label:"Qualified Teachers & Instructors" },
];

const values = [
  { icon:"🎯", title:"Purpose-Driven", desc:"Every lesson ties to a bigger purpose — preparing students for real life, not just exams.", color:"wine" },
  { icon:"🌱", title:"Growth Mindset",  desc:"We believe every child can grow. Our educators unlock each student's unique potential.", color:"green" },
  { icon:"🤝", title:"Community First", desc:"Students, teachers, and parents work together to create a family-like learning environment.", color:"blue" },
  { icon:"📐", title:"Discipline & Excellence", desc:"We uphold high standards in both academic performance and personal character.", color:"wine" },
];

export default function About({ navigate }) {
  return (
    <div className="about">
      <div className="page-header">
        <div className="ph-inner">
          <p className="eyebrow">Who We Are</p>
          <h1>About Vision Family Academy</h1>
          <p>Government-approved, community-rooted, and committed to excellence in both academics and practical skills.</p>
        </div>
      </div>

      {/* STORY + IMAGE */}
      <section className="section">
        <div className="section-inner ab-story">
          <div className="ab-img-wrap">
            <img src={img6} alt="Vision Family Academy campus" className="ab-img-main" />
            <div className="ab-img-badge">
              <span>📍</span>
              <p>Okutukutu, Yenagoa<br/>Bayelsa State</p>
            </div>
          </div>
          <div className="ab-story-text">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">Built on a Bold Belief</h2>
            <p>Vision Family Academy is a government-approved school located in Okutukutu, Yenagoa, Bayelsa State. We are dedicated to providing quality education that combines academic excellence with practical skills training.</p>
            <p>Our school operates under a dual learning model, allowing students to gain both theoretical knowledge and hands-on skills that prepare them for the real world.</p>
            <p>We are affiliated with recognised educational and training organisations, ensuring our students receive standard and certified training that opens doors beyond the classroom.</p>
            <p>As a proud member of the <strong>Vision International School</strong> network, we uphold a tradition of excellence and continue raising the bar for what education in our community can achieve.</p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section mv-section">
        <div className="section-inner mv-grid">
          <div className="mv-card mv-blue">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>To eliminate illiteracy by providing accessible, quality education and practical skills training that empowers students to become productive members of society.</p>
          </div>
          <div className="mv-card mv-wine">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To operate a dual learning system that equips every student with both academic knowledge and vocational skills — nurturing creativity, self-reliance, and entrepreneurship.</p>
          </div>
          <div className="mv-card mv-green">
            <div className="mv-icon">🏅</div>
            <h3>Our Motto</h3>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontStyle:"italic", color:"var(--green)"}}>…Eradicating Illiteracy</p>
          </div>
        </div>
      </section>

      {/* FACILITIES + IMAGE */}
      <section className="section fac-section">
        <div className="section-inner fac-inner">
          <div>
            <p className="eyebrow">Our Campus</p>
            <h2 className="section-title">School Facilities</h2>
            <p className="section-sub">We provide a safe and conducive environment for learning.</p>
            <ul className="fac-list">
              {facilities.map((f,i) => (
                <li key={i} className="fac-item">
                  <span className="fac-icon">{f.icon}</span>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={img7} alt="School facilities" className="fac-img" />
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">What We Stand For</p>
          <h2 className="section-title">Our Core Values</h2>
          <div className="vals-grid">
            {values.map((v,i) => (
              <div className={`val-card val-${v.color}`} key={i}>
                <span className="val-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ab-cta-section">
        <div className="section-inner ab-cta">
          <h2>Want to Be Part of Our Community?</h2>
          <p>Explore our programs or reach out to our admissions team today.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="btn-blue" onClick={() => navigate("programs")}>Our Programs</button>
            <button className="btn-wine" onClick={() => navigate("admissions")}>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
