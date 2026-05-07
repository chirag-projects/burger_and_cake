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
    if (stored) setUser(stored);
  }, []);


  const login = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    // 🔥 Fetch user info from Google
    const res = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      }
    );

    const user = await res.json();

    // Save user
    localStorage.setItem("user", JSON.stringify(user));

    // redirect
    navigate("/dashboard");
  },
  onError: () => console.log("Login Failed"),
});
// 🔥 Handle Shop click
  const handleShop = () => {
    if (!user) {
      login(); // force login
    } else {
      navigate("/dashboard");
    }
  };

  // 🔥 Handle History click (different page)
  const handleHistory = () => {
    if (!user) {
      login();
    } else {
      navigate("/history"); // 👈 different page
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

      {/* Links */}
      <div style={links}>
        <a style={link} onClick={() => navigate("/")}>Home</a>

        <a style={link} onClick={handleShop}>Shop</a>

        <a style={link}>Contact</a>
      </div>

       {/* Actions */}
      <div style={actions}>
        <motion.button
          style={historyBtn}
          onClick={handleHistory}
          whileHover={{ scale: 1.05 }}
        >
          History
        </motion.button>

        {!user ? (
          <motion.button
            style={signInBtn}
            onClick={() => login()}
            whileHover={{ scale: 1.08 }}
          >
            Sign In
          </motion.button>
        ) : (
          <div style={avatar}>
            {user.email?.charAt(0).toUpperCase()}
          </div>
        )}
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
  fontfamily: "'Poppins', sans-serif",
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