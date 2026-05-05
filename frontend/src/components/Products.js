import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Products() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0% at 20% 50%)", "circle(120% at 20% 50%)"]
  );

  return (
    <div ref={ref} style={section}>
      
      {/* LEFT → Smaller Video */}
      <motion.div
        style={{
          ...videoWrapper,
          clipPath: clip,
        }}
      >
        <video autoPlay loop muted playsInline style={video}>
          {/* 👉 ADD YOUR VIDEO HERE */}
          <source src="./cake.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* RIGHT → Content */}
      <div style={right}>
        <h2 style={heading}>Beautiful and Eggless Cakes</h2>

        <div style={buttonGroup}>
          {[
            "Chocolate Flavour",
            "Vanilla Flavour",
            "Strawberry Flavour",
          ].map((item, i) => (
            <motion.button
              key={i}
              style={button}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

/* ================= STYLES ================= */

const section = {
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 80px",
  overflow: "hidden",
};

/* 🔥 Smaller video container */
const videoWrapper = {
  width: "40%",
  height: "60%",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
};

const video = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const right = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const heading = {
  fontSize: "2.5rem",
  fontWeight: "800",
  fontFamily: "'Poppins', sans-serif",
  color: "#222",
};

/* 🔥 Animated buttons */
const buttonGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const button = {
  padding: "14px 25px",
  fontSize: "1rem",
  fontWeight: "600",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",

  color: "#fff",
  background: "linear-gradient(135deg, #ff5e00, #ff9a3c)",

  boxShadow: "0 10px 25px rgba(255,94,0,0.3)",
};