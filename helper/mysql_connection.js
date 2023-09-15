// get the client
const mysql = require('mysql2');
// create the connection
const con = mysql.createConnection(
  {
    host:'localhost',
    user: 'new_blog', 
    password:'P)yD/LvU89Dzcy-',
    database: 'blogger'
  }
);
con.connect((err)=> 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + con.threadId);
});

module.exports = {con}