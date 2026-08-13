const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static assets (index.html, style.css, script.js, images...)
app.use(express.static(path.join(__dirname, "public")));

// Explicit root route (falls back to public/index.html anyway, but kept for clarity)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Simple 404 for anything else
app.use((req, res) => {
  res.status(404).send("404 — ไม่พบหน้าที่คุณต้องการ");
});

app.listen(PORT, () => {
  console.log(`Portfolio server running → http://localhost:${PORT}`);
});
