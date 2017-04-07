var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);

  connection.query('CREATE DATABASE `db_projectname` DEFAULT CHARACTER SET = `utf8mb4`', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results);
	});


  connection.end();
});
