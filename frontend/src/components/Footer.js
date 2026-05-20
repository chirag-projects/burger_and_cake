function Footer() {
  return (
    <footer style={footer}>

      <div style={section}>
        <h3 style={title}>🍔 Burger & Cake</h3>

        <p style={text}>
          Fresh burgers and premium eggless cakes
          delivered with taste and quality.
        </p>
      </div>

      <div style={section}>
        <h4 style={heading}>Quick Links</h4>

        <a href="/" style={link}>
          Home
        </a>

        <a href="/dashboard" style={link}>
          Shop
        </a>

        <a href="/history" style={link}>
          History
        </a>
      </div>

      <div style={section}>
        <h4 style={heading}>Contact</h4>

        <a
          href="mailto:burgercake@gmail.com"
          style={link}
        >
          burgercake@gmail.com
        </a>

        <a
          href="https://instagram.com"
          style={link}
        >
          Instagram
        </a>

        <a
          href="https://facebook.com"
          style={link}
        >
          Facebook
        </a>
      </div>

    </footer>
  );
}

export default Footer;

/* STYLES */

const footer = {
  background: "#111",
  color: "#fff",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  padding: "50px 30px",
  gap: "30px",
};

const section = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "250px",
};

const title = {
  fontSize: "1.5rem",
  fontWeight: "700",
};

const heading = {
  fontSize: "1.1rem",
  fontWeight: "600",
};

const text = {
  color: "#bbb",
  lineHeight: "1.6",
};

const link = {
  color: "#fff",
  textDecoration: "none",
};

