var express = require('express');
var mongoose = require('mongoose');

var BookModel = require('../models/Book');
var router = express.Router();

router.get('/', (req, res) => {
  var instructions = {
    "API routes": {
      "GET /books": "get all books in the db",
      "GET /books/:id": "get specific book with id from the db",
      "POST /books": "create a book in the db",
      "PUT /books": "update a book with id in the db",
      "DELETE /books": "delete a book with id from the db"
    }
  }
  res.json(instructions);
});

module.exports = router;