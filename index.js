const express = require("express");
const app = express();
const port = 9000;
// const user = require("./api/user");

// var users = require("./api/user.json");

// set view engine
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});
// home
app.get("/", (request, response) => response.render("index"));

// game
app.get("/game", (request, response) => response.render("game"));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
