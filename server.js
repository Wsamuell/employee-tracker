// Installed packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Global packages
const db = require('./db/connection');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');

// confirmation of db
db.connect(err => {
    if (err) throw err;
});

// stored answers to all questions
let newAction = [];


// start the inquire Actions
function startUp() {
    inquirer.prompt([
        {
            type: "list",
            name: "Action",
            message: 'What would you like to do?',
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add A Department",
                "Add A Role",
                "Add An Employee",
                "Update An Employee Role"
            ],
        },
    ]).then((answers) => {
        console.log("does this work?")
        switch (answers.action) {
            case "View All Departments":
                viewDepartments();
                break;

            //         case "View All Roles":
            //             viewRoles();
            //             break;

            //         case "View All Employees":
            //             viewEmployees();
            //             break;

            //         case "Add A Department":
            //             addDepartment();
            //             break;

            //         case "Add A Role":
            //             addRole();
            //             break;

            //         case "Add An Employee":
            //             addEmployee();
            //             break;

            //         case "Update An Employee Role":
            //             updateEmployee();
            //             break;

        }

    })
}

// 
function viewDepartments() {
    connection.query(
        'SELECT * FROM departments',
        function (err, results) {
            if (err) throw err
            console.table(results)
            startUp()
        });
};
// function viewRoles(){

// };
// function viewEmployees(){

// };
// function addDepartment(){

// };
// function addEmployee(){

// };
// function addRole(){

// };
// function updateEmployee(){

// };




startUp();