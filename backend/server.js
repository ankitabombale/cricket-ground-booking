import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // your MySQL password
  database: "cricket_db" // change to your db name
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// ======================= SIGNUP =======================
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [user] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length > 0) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ======================= LOGIN =======================
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0) return res.status(404).json({ message: "User not found" });

    const validPass = await bcrypt.compare(password, user[0].password);
    if (!validPass) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user[0].id, email: user[0].email }, "secretKey", {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
