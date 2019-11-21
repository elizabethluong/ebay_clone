const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index.ejs"));

app.post("/listing", (req, res) => {
  res.render("mockup.ejs", {
    userInputName: req.body.name,
    userInputPrice: req.body.price,
    userInputDescription: req.body.description
  });
});

//   res.send(
//     // instead res.render("index.html")
//     `Thanks ${userInputName}, I got the form
//         Thanks ${userInputPrice} this is an option
//         Thanks ${userInputDescription} this is a message.`

// fetch(userInputName + userInputPrice + userInputDescription).then(response => {
//   res.render("mockup.html");
// });
app.listen(port, () => console.log(`Listening on port ${port}!`));
