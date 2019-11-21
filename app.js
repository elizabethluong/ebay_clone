const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index.ejs"));

app.post("/listing", (req, res) => {
  let userInputName = req.body.name;
  let userInputPrice = req.body.price;
  let userInputDescription = req.body.description;

  res.render("mockup.ejs", {
    userInputName,
    userInputPrice,
    userInputDescription
  });

  app.get("/listing", (req, res) => {
    res.render("index.ejs", {
      userInputName,
      userInputPrice,
      userInputDescription
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
