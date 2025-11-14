
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mysql from "mysql2/promise";

const pool = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cricket_ground",
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
          profile.emails[0].value,
        ]);

        if (rows.length === 0) {
          await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
            profile.displayName,
            profile.emails[0].value,
            "", // no password for OAuth
          ]);
        }

        done(null, profile);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
