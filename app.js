const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => res.render("index.html"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
