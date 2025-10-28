import db from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const registerUser = (req, res) => {
  const { name, contact, password } = req.body;
  if (!name || !contact || !password) return res.status(400).json({ message: 'All fields required' });

  db.query('SELECT * FROM users WHERE contact = ?', [contact], async (err, results) => {
    if (results.length > 0) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (name, contact, password) VALUES (?, ?, ?)', [name, contact, hashedPassword], (err) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: 'User registered successfully' });
    });
  });
};

export const loginUser = (req, res) => {
  const { contact, password } = req.body;
  db.query('SELECT * FROM users WHERE contact = ?', [contact], async (err, results) => {
    if (err) return res.status(500).json({ message: err });
    if (results.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, name: user.name, contact: user.contact } });
  });
};

export const getProfile = (req, res) => {
  const userId = req.user.id;
  db.query('SELECT id, name, contact FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results[0]);
  });
};
