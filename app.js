import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("fdghjk");
});

app.listen(8000, (req, res) => {
  console.log("server running");
});
    