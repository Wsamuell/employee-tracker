DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS employees;


CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);


CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    departmentID INT,
    FOREIGN KEY (departmentID) REFERENCES departments(id)
);

CREATE TABLE managers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    departmentID INT,
    FOREIGN KEY (departmentID) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roleID INT,
    managerID INT,
    FOREIGN KEY (managerID) REFERENCES managers(id),
    FOREIGN KEY (roleID) REFERENCES roles(id)
    -- FOREIGN KEY (managerID) REFERENCES managers(id) ON DELETE SET NULL,

);