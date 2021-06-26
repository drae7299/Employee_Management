const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  password: "",
  database: "employeesDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("you are connected");
  initialize();
});

const initialize = () => {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "View All Roles",
        "View All Departments",
        "Add New Role",
        "Add New Department",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Employees by Department":
          viewEmployeesByDept();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "Add New Role":
          addNewRole();
          break;

        case "Add New Department":
          addNewDepartment();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};
