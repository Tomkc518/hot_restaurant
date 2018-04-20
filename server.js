// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var tablesCount = 5;
var reservationArr = [];
var waitListArr = [];

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

$("#reserveSubmit").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    uniqueID: $("#uniqueID").val().trim(),
    name: $("#name").val().trim(),
    phoneNumber: $("#phoneNumber").val().trim(),
    email: $("#email").val().trim()
  };

  $.post("/api/new", newReservation)
    .then(function(data){
    var newTable = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.uniqueID = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
    reservations.push(newTable);
  
    if(tablesCount > 0){
      reservationArr.push(newTable);
      alert("You've got a reservation!");
    } else {
      waitListArr.push(newTable);
      alert("It will be between 5 and 500 minutes for the next table");
    }
    res.json(newTable);
    tablesCount--;
  
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});










app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
