const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Melrose@1307855',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
);
inquirer
    .prompt([

        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'choice',
            choices: ['view department', 'view role', 'view employee', 'add department', 'add role', 'add employee', 'update employee role'],
        },
    ])
    .then(async (data) => {
        if (data.choice === "view department") {
            console.log("department")
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
            });
        }
        else if (data.choice === "view role") {
            console.log("role")
            db.query('SELECT * FROM role', function (err, results) {
                console.log(results);
            });
        }
        else if (data.choice === "view employee") {
            console.log("employee")
            db.query('SELECT * FROM employee', function (err, results) {
                console.log(results);
            });
        }
        else if (data.choice === "add department") {
            console.log("department")
            const answers = await inquirer.prompt(
                [{
                    name: 'department_name',
                    type: 'input',
                    message: 'what is the department name'
                }]
            )
            db.query('INSERT INTO department (name) VALUES (?)', [answers.department_name], function (err, results) {
                console.log(results);
                
            });
        }

        else if (data.choice === "add role") {
            console.log("role")
            const answers = await inquirer.prompt(
                [{
                    name: 'role',
                    type: 'input',
                    message: 'what is your role'
                }]
            )
            db.query('INSERT INTO role (name) VALUES (?)', [answers.department_name], function (err, results) {
                console.log(results);
                
            });
        }

        else if (data.choice === "add employee") {
            console.log("employee")
            const answers = await inquirer.prompt(
                [{
                    name: 'employee',
                    type: 'input',
                    message: 'what is an employee'
                }]
            )
            db.query('INSERT INTO emmployee (name) VALUES (?)', [answers.department_name], function (err, results) {
                console.log(results);
                
            });
        }

        else if (data.choice === "update employee role") {
            console.log("employee role")
            const answers = await inquirer.prompt(
                [{
                    name: 'employee',
                    type: 'input',
                    message: 'what is the department name'
                }]
            )
            db.query('INSERT INTO department (name) VALUES (?)', [answers.department_name], function (err, results) {
                console.log(results);
                
            });
        }
    })