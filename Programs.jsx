import img8 from "../assets/8image.png";
import "./Programs.css";
import { useState } from "react";

const jss = [
  "English Language",
  "Literature in English",
  "Mathematics",
  "Intermediate Science",
  "National Values",
  "Civic Education",
  "Digital Technology",
  "Prevocational Studies",
  "National History",
  "Creative Arts",
  "Religious Studies",
];
const sss = [
  "Mathematics",
  "English Language",
  "Literature",
  "Chemistry",
  "Physics",
  "Biology",
  "Geography",
  "Agricultural Science",
  "Economics",
  "Commerce",
  "Marketing",
  "Digital Technology",
  "Financial Accounting",
  "Civic Education",
  "Religious Studies",
  "Government",
];
const vocational = [
  { icon: "✂️", name: "Fashion Design" },
  { icon: "💻", name: "Computer Skills" },
  { icon: "💇", name: "Hair Dressing" },
  { icon: "✂️", name: "Haircut" },
  { icon: "📿", name: "Bead Making" },
  { icon: "🍳", name: "Catering & Baking" },
  { icon: "🖌️", name: "Painting" },
  { icon: "🛠️", name: "Technical & Craft Skills" },
];
const partners = [
  {
    name: "Help A Child Foundation",
    icon: "🤝",
    shortDesc:
      "International NGO supporting child education and welfare across Nigeria and Africa.",
    details: {
      intro: "Official Scholarship & Child Support Sponsor",
      focus: [
        "Monthly Student Support ($5-$20+ per child)",
        "Humanitarian Child Welfare Programs",
        "Educational Sponsorship",
        "Student Financial Assistance",
      ],
      description:
        "Help A Child Foundation partners with Vision Family Academy as the official point person for Nigeria and Africa. They provide direct monthly financial support to deserving students with proper documentation and humanitarian integrity.",
      supportStructure:
        "Individual child support ranging from $5-$20 to $1000+ per month with full documentation",
      requirements:
        "Student profiles, group/individual photos, verified enrollment lists, and documented need assessment",
      contact: {
        name: "Dr. Williams Andrew",
        title: "Director, African Project",
        email: "Available through foundation website",
      },
      registration:
        "Contact admissions office to apply for scholarship support or to provide student information for sponsorship consideration",
    },
    website: "https://helpachildfoundation.com/",
  },
  {
    name: "Vision International University",
    icon: "🏛️",
    shortDesc:
      "Vision Business School partnerships providing certification and diploma courses and scholarship support.",
    details: {
      intro: "In conjunction with VISION INT UNIVERSITY USA",
      scholarship:
        "Scholarship Sponsor - Supporting deserving students through financial aid programs",
      courses: [
        "AI Technology",
        "Digital Technology",
        "Computer Hardware & Maintenance",
        "Data Analytics",
        "Graphic Design",
        "Website Development",
        "Software Development",
      ],
      degrees: [
        "Business Development",
        "Public Administration",
        "Entrepreneurship",
        "Leadership",
      ],
      registration: "Free Registration - Get forms at school premises",
      contact: {
        phones: ["08103467725", "08066810524"],
        address:
          "Vision Business School, No. 1 Vision Drive, Off School Road, Okutukutu, Yenagoa Bayelsa State, Nigeria",
      },
      website: "https://www.vision.edu/web/",
    },
  },
  {
    name: "City & Guilds of London",
    icon: "🎖️",
    desc: "Internationally recognised technical and vocational qualifications.",
  },
  {
    name: "NBTE / Skill Training Bodies",
    icon: "📜",
    desc: "National Board for Technical Education accredited skill development.",
  },
];

export default function Programs({ navigate }) {
  const [expandedPartner, setExpandedPartner] = useState(null);

  const togglePartner = (index) => {
    setExpandedPartner(expandedPartner === index ? null : index);
  };
  return (
    <div className="programs">
      <div className="page-header">
        <div className="ph-inner">
          <p className="eyebrow">What We Offer</p>
          <h1>Programs &amp; Curriculum</h1>
          <p>
            A full dual learning system — academic rigour plus hands-on
            vocational training at every level.
          </p>
        </div>
      </div>

      {/* DUAL SYSTEM OVERVIEW */}
      <section className="section">
        <div className="section-inner dual-overview">
          <div className="do-text">
            <p className="eyebrow">The Dual Learning System</p>
            <h2 className="section-title">
              Two Tracks,
              <br />
              One Complete Education
            </h2>
            <p>
              At Vision Family Academy, no student graduates without both a
              strong academic foundation and a practical skill they can use
              immediately. This is the Vision difference.
            </p>
          </div>
          <img
            src={img8}
            alt="Students in dual learning program"
            className="do-img"
          />
        </div>
      </section>

      {/* ACADEMIC TRACKS */}
      <section className="section acad-section">
        <div className="section-inner">
          <p className="eyebrow">Track 1 — Academics</p>
          <h2 className="section-title">Academic Curriculum</h2>
          <p className="section-sub">
            Government-approved subjects from Reception through Senior
            Secondary.
          </p>
          <div className="acad-grid">
            <div className="acad-card acad-jss">
              <div className="acad-header">
                <span className="acad-badge">JSS 1–3</span>
                <h3>Junior Secondary</h3>
              </div>
              <ul className="subject-list">
                {jss.map((s, i) => (
                  <li key={i}>
                    <span>▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="acad-card acad-sss">
              <div className="acad-header">
                <span className="acad-badge">SS 1–2</span>
                <h3>Senior Secondary</h3>
              </div>
              <ul className="subject-list">
                {sss.map((s, i) => (
                  <li key={i}>
                    <span>▸</span>
                    {s}
                  </li>
                ))}
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
          <p className="section-sub">
            Hands-on skills that give every graduate the ability to create
            income and opportunity.
          </p>
          <div className="voc-grid">
            {vocational.map((v, i) => (
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
          <p className="section-sub">
            We collaborate with reputable institutions to ensure quality
            training and certification for our students.
          </p>
          <div className="partner-grid">
            {partners.map((p, i) => (
              <div className="partner-card" key={i}>
                <span className="part-icon">{p.icon}</span>
                <h4>{p.name}</h4>

                {p.details ? (
                  // Extended format with expandable details
                  <div className="partner-details">
                    <p className="partner-intro">{p.shortDesc}</p>

                    {expandedPartner === i && (
                      <>
                        <p className="partner-tagline">{p.details.intro}</p>

                        {p.details.scholarship && (
                          <p className="partner-highlight scholarship-badge">
                            🎓 {p.details.scholarship}
                          </p>
                        )}

                        {p.details.focus && p.details.focus.length > 0 && (
                          <div className="detail-section">
                            <strong>Focus Areas:</strong>
                            <ul>
                              {p.details.focus.map((area, j) => (
                                <li key={j}>{area}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {p.details.description && (
                          <p className="partner-description">
                            {p.details.description}
                          </p>
                        )}

                        {p.details.supportStructure && (
                          <p className="partner-highlight support-amounts">
                            💰 {p.details.supportStructure}
                          </p>
                        )}

                        {p.details.requirements && (
                          <div className="detail-section">
                            <strong>Requirements:</strong>
                            <p className="requirements-text">
                              {p.details.requirements}
                            </p>
                          </div>
                        )}

                        {p.details.contact && (
                          <div className="detail-section">
                            <strong>Contact:</strong>
                            {p.details.contact.name && (
                              <p>
                                <strong>{p.details.contact.name}</strong> -{" "}
                                {p.details.contact.title}
                              </p>
                            )}
                            {p.details.contact.email && (
                              <p>📧 {p.details.contact.email}</p>
                            )}
                          </div>
                        )}

                        {p.details.courses && p.details.courses.length > 0 && (
                          <div className="detail-section">
                            <strong>Courses:</strong>
                            <ul>
                              {p.details.courses.map((course, j) => (
                                <li key={j}>{course}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {p.details.degrees && p.details.degrees.length > 0 && (
                          <div className="detail-section">
                            <strong>Degree Programs:</strong>
                            <ul>
                              {p.details.degrees.map((degree, j) => (
                                <li key={j}>{degree}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {p.details.registration && (
                          <p className="partner-highlight">
                            {p.details.registration}
                          </p>
                        )}

                        {p.details.contact && (
                          <div className="detail-section">
                            <strong>Contact:</strong>
                            {p.details.contact.phones &&
                              p.details.contact.phones.length > 0 && (
                                <p>📞 {p.details.contact.phones.join(" | ")}</p>
                              )}
                            {p.details.contact.address && (
                              <p>📍 {p.details.contact.address}</p>
                            )}
                          </div>
                        )}

                        {(p.details.website || p.website) && (
                          <a
                            href={p.details.website || p.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="partner-link"
                          >
                            Visit Website →
                          </a>
                        )}
                      </>
                    )}

                    <button
                      className="learn-more-btn"
                      onClick={() => togglePartner(i)}
                    >
                      {expandedPartner === i ? "Show Less ▲" : "Learn More ▼"}
                    </button>
                  </div>
                ) : (
                  // Simple format for basic partners
                  <>
                    <p>{p.desc}</p>
                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="partner-link"
                      >
                        Learn More →
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section prog-cta-section">
        <div className="section-inner prog-cta">
          <h2>Ready to Enrol?</h2>
          <p>
            Admissions are open. Visit us or call to get your registration form
            today.
          </p>
          <button className="btn-wine" onClick={() => navigate("admissions")}>
            See Admissions Info
          </button>
        </div>
      </section>
    </div>
  );
}
