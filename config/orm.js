// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(burgers, cb) {
      var queryString = "SELECT * FROM " + burgers + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },