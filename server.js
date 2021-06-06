// Installed packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Global packages
const db = require('./db/connection');

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
        switch (answers.Action) {
            case "View All Departments":
                viewDepartments();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Employees":
                viewEmployees();
                break;

            case "Add A Department":
                addDepartment();
                break;

            case "Add A Role":
                addRole();
                break;

            case "Add An Employee":
                addEmployee();
                break;

            case "Update An Employee Role":
                updateEmployee();
                break;
        }

    })
}

// 
function viewDepartments() {
    db.query(
        'SELECT * FROM departments',
        function (err, results) {
            if (err) throw err
            console.table(results)
            startUp()
        });
};
function viewRoles() {
    db.query(
        'SELECT * FROM roles',
        function (err, results) {
            if (err) throw err
            console.table(results)
            startUp()
        });
};
function viewEmployees() {
    db.query(
        'SELECT * FROM employees',
        function (err, results) {
            if (err) throw err
            console.table(results)
            startUp()
        });
};
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "What is the Department Name?",
            validate: (value) => {
                if (value) { return true }
                else { return "Department Name Required" }
            }
        },
    ]).then((answer) => {
        db.query(
            'INSERT INTO departments SET ?',
            {
                name: answer.deptName
            },
            function (err, results) {
                if (err) throw err
                console.table(results)
                viewDepartments()
            });
    })
};

// employee is incomplete
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Please enter First Name",
            validate: (value) => {
                if (value) { return true }
                else { return "First Name Required" }
            }
        },
        {
            type: "input",
            name: "lastName",
            message: "Please enter Last Name",
            validate: (value) => {
                if (value) { return true }
                else { return "Last Name Required" }
            }
        },
        {
            type: "input",
            name: "roleName",
            message: "Please enter Role",
            validate: (value) => {
                if (value) { return true }
                else { return "Role Required" }
            }
        },
        {
            type: "input",
            name: "departmentID",
            message: "Please enter departmentID",
            validate: (value) => {
                if (value) { return true }
                else { return "departmentID Required" }
            }
        },

        // correct this in the morning
    ]).then((answers) => {
        db.query(
            'INSERT INTO roles SET ?',
            {
                title: answers.roleName,
                salary: answers.salary,
                departmentID: answers.departmentID
            },
            function (err, results) {
                if (err) throw err
                console.table(results)
                viewDepartments()
            });
    })


};
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "Please enter Role",
            validate: (value) => {
                if (value) { return true }
                else { return "Role Required" }
            }
        },
        {
            type: "input",
            name: "salary",
            message: "Please enter Salary",
            validate: (value) => {
                if (value) { return true }
                else { return "Salary Required" }
            }
        },
        {
            type: "input",
            name: "departmentID",
            message: "Please enter departmentID",
            validate: (value) => {
                if (value) { return true }
                else { return "departmentID Required" }
            }
        },
    ]).then((answers) => {
        db.query(
            'INSERT INTO roles SET ?',
            {
                title: answers.roleName,
                salary: answers.salary,
                departmentID: answers.departmentID
            },
            function (err, results) {
                if (err) throw err
                console.table(results)
                viewRoles()
            });
    })

};
function updateEmployee() {

};




startUp();