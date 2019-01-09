var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password123',
  database: 'burger_db'
});

// Make connection.
connection.connect(function(err){
  if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;