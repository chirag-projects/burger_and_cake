function Footer() {
  return (
    <footer style={footerWrap}>

      {/* ── Top grid ── */}
      <div style={footerTop}>

        {/* Brand */}
        <div>
          <h2 style={brandTitle}>🍔 Burger &amp; Cake</h2>
          <p style={brandDesc}>
            Crafted with love since 2020. From juicy gourmet burgers to dreamy
            custom cakes — we deliver joy to your door.
          </p>
          <span style={badge}>Est. 2020</span>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={colHeading}>Quick Links</h4>
          <ul style={linkList}>
            {["Home", "Menu", "Special Offers", "About Us", "Blog"].map((item) => (
              <li key={item}><a href="#" style={linkItem}><span style={dot} />{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 style={colHeading}>Our Products</h4>
          <ul style={linkList}>
            {["Gourmet Burgers", "Custom Cakes", "Combo Deals", "Beverages", "Party Packs"].map((item) => (
              <li key={item}><a href="#" style={linkItem}><span style={dot} />{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={colHeading}>Support</h4>
          <ul style={linkList}>
            {["Track Order", "FAQs", "Contact Us", "Refund Policy"].map((item) => (
              <li key={item}><a href="#" style={linkItem}><span style={dot} />{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 style={colHeading}>Follow Us</h4>
          <div style={socialRow}>
            {["f", "in", "tw", "yt"].map((s) => (
              <a key={s} href="#" style={socialBtn}>{s}</a>
            ))}
          </div>
          <ul style={{ ...linkList, marginTop: "20px" }}>
            {["+91 98765 43210", "hello@burgercake.com", "Chennai, Tamil Nadu"].map((item) => (
              <li key={item}><a href="#" style={linkItem}><span style={dot} />{item}</a></li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div style={footerBottom}>
        <p style={copyText}>© 2026 Burger &amp; Cake. All rights reserved.</p>
        <div style={legalRow}>
          <a href="#" style={legalLink}>Privacy Policy</a>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <a href="#" style={legalLink}>Terms of Use</a>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <a href="#" style={legalLink}>Sitemap</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

/* ─── Styles ─────────────────────────────────────────────── */

const footerWrap = {
  background: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 40%, #FFA940 70%, #fff8f0 100%)",
  color: "#fff",
  fontFamily: "'Segoe UI', sans-serif",
};

const footerTop = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "40px",
  padding: "56px 48px 40px",
  borderBottom: "1px solid rgba(255,255,255,0.25)",
};

const brandTitle = {
  fontSize: "22px",
  fontWeight: 700,
  color: "#fff",
  margin: "0 0 10px",
  letterSpacing: "1px",
};

const brandDesc = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.7,
  margin: "0 0 18px",
};

const badge = {
  display: "inline-block",
  background: "rgba(255,255,255,0.2)",
  border: "1px solid rgba(255,255,255,0.4)",
  color: "#fff",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "1.5px",
  padding: "5px 14px",
  borderRadius: "20px",
  textTransform: "uppercase",
};

const colHeading = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.6)",
  margin: "0 0 18px",
};

const linkList = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const linkItem = {
  textDecoration: "none",
  color: "rgba(255,255,255,0.9)",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: "7px",
  marginBottom: "11px",
};

const dot = {
  width: "5px",
  height: "5px",
  background: "rgba(255,255,255,0.5)",
  borderRadius: "50%",
  flexShrink: 0,
  display: "inline-block",
};

const socialRow = {
  display: "flex",
  gap: "10px",
};

const socialBtn = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.2)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: "13px",
  textDecoration: "none",
};

const footerBottom = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 48px",
  flexWrap: "wrap",
  gap: "12px",
};

const copyText = {
  margin: 0,
  fontSize: "13px",
  color: "rgba(255,255,255,0.75)",
};

const legalRow = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
};

const legalLink = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  letterSpacing: "0.3px",
};