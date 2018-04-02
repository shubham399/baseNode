var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 8080;

app.get('/', (req, res) => {
    res.send("Express server is up and running!!");
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

app.use(jsonParser);

app.listen(port, () => {
    console.log("app listening on port " + port);
});