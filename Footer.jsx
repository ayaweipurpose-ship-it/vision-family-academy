import "./Footer.css";

export default function Footer({ navigate }) {
  const links = [
    ["home","Home"],["about","About Us"],["programs","Programs"],
    ["admissions","Admissions"],["contact","Contact"]
  ];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="fcol fcol-brand">
          <div className="f-shield">
            <span>VFA</span><span>★</span>
          </div>
          <p className="f-name">Vision Family Academy</p>
          <p className="f-tag">…Eradicating Illiteracy</p>
          <p className="f-member">A proud member of <strong>Vision International School</strong></p>
        </div>
        <div className="fcol">
          <p className="f-heading">Quick Links</p>
          <ul>{links.map(([id,label]) => (
            <li key={id}><button onClick={() => navigate(id)}>{label}</button></li>
          ))}</ul>
        </div>
        <div className="fcol">
          <p className="f-heading">Contact</p>
          <p>📍 No. 1 Vision Drive, Off School Road,<br/>Okutukutu, Yenagoa,<br/>Bayelsa State, Nigeria</p>
          <p style={{marginTop:10}}>📞 <a href="tel:08103467725">08103467725</a><br/>
          📞 <a href="tel:08066810524">08066810524</a></p>
        </div>
        <div className="fcol">
          <p className="f-heading">Our Partners</p>
          <ul className="f-partners">
            <li>Federal Ministry of Labour & Employment</li>
            <li>City & Guilds of London</li>
            <li>NBTE / Skill Training Bodies</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vision Family Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
