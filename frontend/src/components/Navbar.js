import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={nav}
    >
      {/* Logo */}
      <h2 style={logo}>🍔 Burger & Cake</h2>

      {/* Links */}
      <div style={links}>
        {["Home", "Menu", "Contact"].map((item, i) => (
          <motion.a
            key={i}
            href="#"
            style={link}
            whileHover={{ scale: 1.1, color: "#ff7a18" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      {/* Buttons */}
      <div style={actions}>
        <motion.button
          style={historyBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          History
        </motion.button>

        <motion.button
          style={signInBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;

/**
 * Styles
 */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,

  // glass effect
  background: "transparent",
//   backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
};

const logo = {
  fontWeight: "800",
  fontSize: "1.5rem",
  background: "linear-gradient(90deg, #ffffff, #ffb347)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const links = {
  display: "flex",
  gap: "30px",
};

const link = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "500",
  cursor: "pointer",
};

const actions = {
  display: "flex",
  gap: "15px",
};

const historyBtn = {
  padding: "8px 18px",
  borderRadius: "20px",
  border: "1px solid #ddd",
  background: "transparent",
  cursor: "pointer",
  fontWeight: "500",
};

const signInBtn = {
  padding: "8px 20px",
  borderRadius: "20px",
  border: "none",
  background: "linear-gradient(90deg, #ff7a18, #ffb347)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};