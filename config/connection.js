const mysql = require("mysql"); //*needed to create connection

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ratamacue2289!",
  database: "employee_db",
});

console.clear();
console.log("Hello, how can I help you today?");

module.exports = connection;
