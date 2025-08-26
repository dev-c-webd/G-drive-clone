import express from "express";
import userRoutes from "./routes/user.routes.js";

// envs import (first dotenv before connectdb)
import dotenv from "dotenv";
dotenv.config();

// database import
import connectDb from "./config/db.js";
connectDb();

const app = express();

// for ejs and form data handling
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/user", userRoutes);

// port
app.listen(8000, (req, res) => {
  console.log("server running");
});
    