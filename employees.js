/**
node employees.js
**/

// Request packages
var bodyParser = require("body-parser");
var cors = require('cors');
var express = require("express");
var app = express();

// Declare an array of JSON objects
const employees1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" }
];

const employees2 = [
  { id: 1, name: "John", lastName: "Doe" },
  { id: 2, name: "Peter", lastName: "Smith" }
];

app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

// Route to employees v1
app.get('/v1/employees', function(req, res) {
  res.json( { employees1 } );
});

// Route to employees v2
app.get('/v2/employees', function(req, res) {
  res.json( { employees2 } );
});

var PORT = process.env.port || 3000;

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});
