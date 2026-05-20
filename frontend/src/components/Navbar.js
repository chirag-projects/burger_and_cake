import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));

    if (stored) {
      setUser(stored);
    }
  }, []);

  // Google Login
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {

      // Fetch Google User Info
      const res = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const user = await res.json();

      // Save User
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      // Redirect
      navigate("/dashboard");
    },

    onError: () => console.log("Login Failed"),
  });

  // Shop Click
  const handleShop = () => {
    if (!user) {
      login();
    } else {
      navigate("/dashboard");
    }
  };

  // History Click
  const handleHistory = () => {
    if (!user) {
      login();
    } else {
      navigate("/history");
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={nav}
    >

      {/* Logo */}
      <h2 style={logo}>🍔 Burger & Cake</h2>

      {/* Navigation Links */}
      <div style={links}>

        <button
          style={linkButton}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          style={linkButton}
          onClick={handleShop}
        >
          Shop
        </button>

        <button
          style={linkButton}
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>

      </div>

      {/* Right Buttons */}
      <div style={actions}>

        <motion.button
          style={historyBtn}
          onClick={handleHistory}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          History
        </motion.button>

        {!user ? (

          <motion.button
            style={signInBtn}
            onClick={() => login()}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>

        ) : (

          <motion.div
            style={avatar}
            whileHover={{ scale: 1.08 }}
          >
            {user.email?.charAt(0).toUpperCase()}
          </motion.div>

        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;

/* ================= STYLES ================= */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: "transparent",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
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
  alignItems: "center",
};

const linkButton = {
  background: "transparent",
  border: "none",
  color: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "500",
  fontSize: "1rem",
  cursor: "pointer",
};

const actions = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
};

const historyBtn = {
  color: "#fff",
  padding: "8px 18px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.3)",
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

const avatar = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff5e00, #ff9a3c)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  cursor: "pointer",
};