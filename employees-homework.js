/**
Desarrolle un programa en Node.js donde la primer versión del API regresa el id y nombre del empleado.
La segunda versión del API, regresara id, nombre y apellido.
El código base está en Slack.
**/

// Request packages
var app = express();

// Declare an array of JSON objects
const employees1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" }
];

// Route to employees v2
app.get('/v2/employees', function(req, res) {
  // Print JSON array
  res.json( { employees2 } );
});

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});
