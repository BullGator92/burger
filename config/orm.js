// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    console.log('inside all');
    connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
      if (err) throw err;
      // console.log('result',result);
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    var queryString='UPDATE ' + tableInput + " SET devoured = true WHERE " + condition + ";";
    console.log('hey', queryString);
    connection.query(queryString,
      function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },

  create: function(tableInput,val,cb) {
    connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result){
      if(err)throw err;
      cb(result);
    })
  },
}
module.exports = orm;