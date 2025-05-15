const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Add this POST route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submission:", { name, email, message });
  res.status(200).json({ message: "Message received" });
});
app.get("/", (req, res) => {
    res.send("Backend is running 🎉");
  });
// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
