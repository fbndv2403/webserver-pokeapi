require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");

app.use(express.static("./src/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
