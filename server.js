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
        'SELECT employees.first_name, employees.last_name, roles.title, roles.salary , departments.name, CONCAT_WS(managers.first_name, managers.last_name) AS Managers FROM employees INNER JOIN roles ON employees.roleID = roles.id INNER JOIN departments ON departments.id = roles.departmentID RIGHT JOIN managers ON employees.managerID = employees.managerID;',
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

// for loop and function for updated department
// for loop is put inside function so we can simply use the function to call it where ever needed
const updatedRoles = [];

function selectRole() {
    db.query(
        'SELECT * FROM roles',
        function (err, results) {
            if (err) throw err
            for (i = 0; i < results.length; i++) {
                updatedRoles.push(results[i].title);
            }
        });
    return updatedRoles;
};


// for loop and function for updated managers
const updatedManagers = [];

function selectManager() {
    db.query(
        'SELECT * FROM managers',
        function (err, results) {
            if (err) throw err
            for (i = 0; i < results.length; i++) {
                updatedManagers.push(results[i].first_name + ' ' + results[i].last_name);
            }
        });
    return updatedManagers;
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
            type: "list",
            name: "managerName",
            message: "Please choose a Manager",
            choices: selectManager()
        },
        {
            type: "list",
            name: "roleName",
            message: "Please select Role",
            choices: selectRole()
        }

        // something is missing, im missing the value managers and roleID for roles is not displaying
    ]).then((answers) => {

        // by using indexOf, we area asking the script to replace the value of answer with the initial value which is the id
        var addEmployeeRole = selectRole().indexOf(answers.roleName) + 1
        var addEmployeeManager = selectManager().indexOf(answers.managerName) + 1

        db.query(
            'INSERT INTO employees SET ?',
            {
                first_name: answers.firstName,
                last_name: answers.lastName,
                roleID: addEmployeeRole,
                managerID: addEmployeeManager
            },
            function (err, results) {
                if (err) throw err
                console.table(results)
                viewEmployees()
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
    db.query("SELECT employees.last_name FROM employees", function (err, res) {
        if (err) throw err
        console.table(res)

        inquirer.prompt([
            {
                type: "list",
                name: "employeeName",
                message: "Please choose select Employee last name",
                choices: function () {
                    const lastName = [];
                    for (var i = 0; i < res.length; i++) {
                        lastName.push(res[i].last_name);
                    }
                    return lastName;
                }
            },
            {
                type: "list",
                name: "roleName",
                message: "Please select New Role",
                choices: selectRole()
            }
        ]).then((answers) => {
            var addEmployeeRole = selectRole().indexOf(answers.roleName) + 1
            db.query(
                'UPDATE employees SET WHERE ?',
                {
                    last_name: answers.lastName
                },
                {
                    roleID: addEmployeeRole,

                },
                function (err, results) {
                    if (err) throw err
                    console.table(results)
                    viewEmployees()
                })
        });
    });
};




startUp();