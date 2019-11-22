const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

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

  // This just goes back to the index page, empty so it seems unnecessary unless you were trying to render the form pre-filled to edit.
  // This app.get is nested under your app.post route above(!)
  // app.get("/listing", (req, res) => {
  //   res.render("index.ejs", {
  //     userInputName,
  //     userInputPrice,
  //     userInputDescription
  //   });
  // });
});

// This route won't have access to the variables in the previous route. 
app.get("/listing", (req, res) => {
  res.render("index.ejs", {
    userInputName,
    userInputPrice,
    userInputDescription
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
