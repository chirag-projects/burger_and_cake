import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

function History() {
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/analytics/items/")
      .then((res) => res.json())
      .then((data) => setPieData(data));

    fetch("http://127.0.0.1:8000/api/analytics/daily/")
      .then((res) => res.json())
      .then((data) => setLineData(data));
  }, []);

  const COLORS = [
    "#ff5e00",
    "#ff9a3c",
    "#ffb347",
    "#ff7043",
    "#ffa726",
  ];

  return (
    <div style={container}>
      {/* HEADER */}
      <Navbar />

      <div style={header}>
        <h1 style={title}>Analytics Dashboard 📊</h1>
        <p style={subtitle}>
          Track orders, customer behavior & sales growth
        </p>
      </div>

      {/* TOP STATS */}
      <div style={statsGrid}>
        <div style={statCard}>
          <h2>15+</h2>
          <p>Products</p>
        </div>

        <div style={statCard}>
          <h2>1.1M+</h2>
          <p>Customers</p>
        </div>

        <div style={statCard}>
          <h2>98%</h2>
          <p>Satisfaction</p>
        </div>
      </div>

      {/* CHARTS */}
      <div style={chartGrid}>

        {/* PIE CHART */}
        <div style={chartCard}>
          <h2 style={chartTitle}>Most Purchased Items 🍔</h2>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="count"
                nameKey="item_name"
                outerRadius={120}
                label
                animationDuration={1500}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE GRAPH */}
        <div style={chartCard}>
          <h2 style={chartTitle}>Orders By Date 📈</h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />
              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="total"
                stroke="#ff5e00"
                strokeWidth={4}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default History;

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#111",
  color: "#fff",
  padding: "40px",
};

const header = {
  marginBottom: "40px",
};

const title = {
  fontSize: "2.5rem",
  fontWeight: "800",
};

const subtitle = {
  color: "#aaa",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginBottom: "40px",
};

const statCard = {
  background: "#1c1c1c",
  padding: "30px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const chartGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
};

const chartCard = {
  background: "#1a1a1a",
  borderRadius: "20px",
  padding: "20px",
};

const chartTitle = {
  marginBottom: "20px",
};