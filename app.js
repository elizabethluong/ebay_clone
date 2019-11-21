const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => res.render("index.html"));

app.post("/listing", (req, res) => {
  const userInputName = req.body.name;
  const userInputPrice = req.body.price;
  const userInputDescription = req.body.description;
  res.end();
  console.log(userInputName);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
