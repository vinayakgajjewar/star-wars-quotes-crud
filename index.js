var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var port = 3000;

app.get("/", function(request, response) {
  // console.log("GET request at /");
  response.sendFile(__dirname + "/index.html");
});

app.post("/quotes", function(request, response) {
  // console.log("POST request at /quotes");
  console.log(request.body);
});

app.listen(port, function() {
  console.log("Listening on port " + port);
});
