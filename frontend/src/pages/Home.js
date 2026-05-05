import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* ===== VIDEO HERO SECTION ===== */}
      <div style={videoSection}>
        
        {/* 🔥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={video}
        >
          {/* ✅ FIXED PATH (must be in public folder) */}
          <source src="./burgre.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div style={overlay}></div>

        {/* Content */}
        <div style={content}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <Products />
      <Footer />
    </>
  );
}

export default Home;

/**
 * Styles
 */

const videoSection = {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
};

const video = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
  zIndex: 1,
};

const content = {
  position: "relative",
  zIndex: 2,
  color: "#fff",
};