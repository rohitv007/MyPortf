const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000 || process.env.PORT;

// app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send('Home Page');
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname + "/public/404.html"))
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));