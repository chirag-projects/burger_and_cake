import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={container}>
      {/* Header */}
       <Navbar />
      <div style={header}>
        <h1 style={title}>Welcome, {user?.email}</h1>
        <p style={subtitle}>Explore Delicious Items 🍔🎂</p>
      </div>

      {/* Products Grid */}
      <div style={grid}>
        {items.map((item, i) => (
          <div key={i} style={card}>
            
            {/* IMAGE */}
            <div style={imageWrapper}>
              <img src={item.image} alt={item.name} style={image} />
              <span style={badge}>#{item.id}</span>
            </div>

            {/* INFO */}
            <div style={info}>
              <h3 style={name}>{item.name}</h3>
              <p style={price}>₹{item.price}</p>

              {/* ✅ BUTTONS (INSIDE MAP) */}
              <div style={actions}>
                <button
                  style={cartBtn}
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  style={buyBtn}
                  onClick={() => buyNow(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

/* ================= STYLES ================= */

const container = {
  padding: "40px",
  background: "#111",
  minHeight: "100vh",
  color: "#fff",
};

const header = {
  marginBottom: "30px",
};

const title = {
  fontSize: "2rem",
  fontWeight: "800",
};

const subtitle = {
  color: "#aaa",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#1a1a1a",
  borderRadius: "15px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "0.3s",
};

const imageWrapper = {
  position: "relative",
};

const image = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
};

const badge = {
  position: "absolute",
  top: "10px",
  left: "10px",
  background: "#ff5e00",
  padding: "5px 10px",
  borderRadius: "10px",
  fontSize: "0.8rem",
};

const info = {
  padding: "15px",
};

const name = {
  margin: "0 0 5px",
};

const price = {
  color: "#ff9a3c",
  fontWeight: "600",
};
const actions = {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
};

const cartBtn = {
  flex: 1,
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
};

const buyBtn = {
  flex: 1,
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #ff5e00, #ff9a3c)",
  color: "#fff",
  cursor: "pointer",
};

/* ================= DATA (15 ITEMS) ================= */

const items = [
  { id: 1, name: "Cheese Burger", price: 120, image: "/chees_burger.jpg" },
  { id: 2, name: "Veg Burger", price: 100, image: "/veg_burger.jpg" },
  { id: 3, name: "Chocolate Cake", price: 250, image: "/Chocolate_Cake.jpg" },
  { id: 4, name: "Vanilla Cake", price: 220, image: "/Vanilla_Cake.jpg" },
  { id: 5, name: "Strawberry Cake", price: 260, image: "/Strawberry_Cake.jpg" },
  { id: 6, name: "Cupcake Pack", price: 150, image: "/Cupcake_Pack.jpg" },
  { id: 7, name: "Double Burger", price: 180, image: "/Double_Burger.jpeg" },
  { id: 8, name: "Mini Cake", price: 140, image: "/Mini_Cake.jpg" },
  { id: 9, name: "Choco Lava", price: 130, image: "/choco_Lava.jpg" },
  { id: 10, name: "Fruit Cake", price: 280, image: "/Fruit_Cake.jpg" },
  { id: 11, name: "Paneer Burger", price: 160, image: "/Paneer_Burger.jpg" },
  { id: 12, name: "Red Velvet Cake", price: 300, image: "/Red_Velvet_Cake.jpeg" },
  { id: 13, name: "Black Forest", price: 320, image: "/Black_Forest.JPG" },
  { id: 14, name: "Brownie", price: 110, image: "/Brownie.jpg" },
  { id: 15, name: "Ice Cream Cake", price: 350, image: "/Ice_Cream_Cake.jpg" },
];

//fuctions
const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
};

const buyNow = (item) => {
  // send to backend (we'll define below)
  fetch("https://burger-and-cake-1.onrender.com/api/buy/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: JSON.parse(localStorage.getItem("user")),
      item,
    }),
  });

  alert("Order placed");
};