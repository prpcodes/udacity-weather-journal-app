// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 3000;
// Require Express to run server and routes
var express = require('express');
// Start up an instance of app
var app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Rout Main
app.get('/projectData', function (req, res) {
    res.send(projectData);
  })

// Setup Server
const server = app.listen(port, ()=> {
  console.log(`running on localhost: ${port}`)
});