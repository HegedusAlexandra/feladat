/* const cors = require("cors"); */
const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Pizza", (req, res) => {
  fs.readFile("data/pizza.json", "utf8", function (err, data) {
    res.send(data);
  });
});

app.post("/submit-form", (req, res) => {
  res.send(req.body.exampleInputName);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
