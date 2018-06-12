var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var port = 3000;
var db;

MongoClient.connect("mongodb://vinayakgajjewar:vinayakgajjewar1@ds016718.mlab.com:16718/star-wars-quotes-db", function(error, client) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to database successfully");
  }

  if (client != null) {
    db = client.db("star-wars-quotes-db");
    app.listen(port, function() {
      console.log("Listening on port " + port);
    });
  } else {
    console.log("client is null");
  }
});

app.get("/", function(request, response) {
  // console.log("GET request at /");
  response.sendFile(__dirname + "/index.html");
});

app.post("/quotes", function(request, response) {
  // console.log("POST request at /quotes");
  console.log(request.body);
});
