// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [
  {
    uniqueID: "harold",
    name: "Harold",
    phoneNumber: 8675309,
    email: "dummy@example.com"
  }
  
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/tables", function(req, res) {

  
  return res.json(reservations);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
