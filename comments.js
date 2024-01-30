// Create web server
var express = require('express');
var router = express.Router();
// Create database connection
var db = require('../db');

// Get all comments
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM comments";
  db.query(sql, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  })
});

// Get single comment
router.get('/:id', function(req, res, next) {
  var sql = "SELECT * FROM comments WHERE id=" + req.params.id;
  db.query(sql, function(err, row, fields) {
    if (err) throw err;
    res.json(row);
  })
});

// Add a comment
router.post('/', function(req, res, next) {
  var sql = "INSERT INTO `comments`(`id`, `name`, `comment`) VALUES (NULL,'" + req.body.name + "','" + req.body.comment + "')";
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
  })
});

// Update a comment
router.put('/:id', function(req, res, next) {
  var sql = "UPDATE `comments` SET `name`='" + req.body.name + "',`comment`='" + req.body.comment + "' WHERE `id`=" + req.params.id;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
  })
});

// Delete a comment
router.delete('/:id', function(req, res, next) {
  var sql = "DELETE FROM `comments` WHERE `id`=" + req.params.id;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
  })
});

module.exports = router;