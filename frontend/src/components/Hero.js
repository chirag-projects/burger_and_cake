import { motion } from "framer-motion";

/* ================= TEXT ================= */

function AnimatedText() {
  const title = "Delicious Burgers & Cakes 🍔";

  return (
    <>
      <h1 style={heading}>
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", marginRight: "8px" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        style={subText}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.7,
        }}
      >
        Fresh, Tasty, and Delivered Fast
      </motion.p>
    </>
  );
}

/* ================= MAIN ================= */

export default function HeroCards() {
  return (
    <div style={container}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <AnimatedText />
      </div>

      <div style={cardsWrapper}>
        {food.map((text, i) => (
          <Card key={i} text={text} delay={i * 0.2} />
        ))}
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function Card({ text, delay }) {
  return (
    <motion.div
      style={card}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        stiffness: 160,
        damping: 14,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.div>
  );
}

/* ================= STYLES ================= */

/* 🔥 Poppins font (make sure imported in index.html or CSS) */
const heading = {
  fontSize: "3rem", 
  fontWeight: "bold", 
  lineHeight: "1.2", 
  background: "linear-gradient(90deg, #ffffff, #ffffff)", 
  WebkitBackgroundClip: "text", 
  WebkitTextFillColor: "transparent",
};

const subText = {
  fontSize: "1.1rem",
  marginTop: "15px",
  fontFamily: "'Poppins', sans-serif",
  color: "#ffffff",
  letterSpacing: "0.5px",
};

const container = {
  padding: "40px 20px",
};

const cardsWrapper = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
};

/* 🔥 FINAL CARD STYLE (short + strong orange) */
const card = {
  width: 220,
  height: 70, // 👈 much shorter now
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: 30, // 👈 smoother rounded look

  fontSize: "0.95rem",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  color: "#fff",

  background: "linear-gradient(135deg, #ff5e00, #ff9a3c)", // 👈 more orange, less white

  boxShadow: "0 8px 20px rgba(255, 94, 0, 0.3)",
  cursor: "pointer",
};

/* ================= DATA ================= */

const food = [
  "1.1M+ Customers",
  "Premium Quality",
  "Up to 15 Varieties",
  "Pure Veg",
];