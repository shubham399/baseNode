var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var BookModel = require('./models/Book');

var app = express();
var port = 8080;
var db = 'mongodb://localhost/dbName';

app.get('/', (req, res) => {
    res.send("Express server is up and running!!");
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

app.use(jsonParser);

mongoose.connect(db).then(dbConnectSuccess, dbConnectErr);

dbConnectSuccess = () => {
  app.listen(port, () => {
        console.log("app listening on port " + port);
    });
}

dbConnectErr = () => {
  console.log("error connecting to db");
}