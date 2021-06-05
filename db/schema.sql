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
    departmentID INTEGER,
    CONSTRAINT fk_role_department FOREIGN KEY (departmentID) REFERENCES departments(id) ON DELETE SET NULL
);

-- CREATE TABLE lead (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL
-- );

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roleID INTEGER,
    departmentID INTEGER,
    CONSTRAINT fk_employee_department FOREIGN KEY (departmentID) REFERENCES departments(id) ON DELETE SET NULL,
    CONSTRAINT fk_role FOREIGN KEY (roleID) REFERENCES roles(id) ON DELETE SET NULL,
    -- CONSTRAINT fk_manager FOREIGN KEY (managerID) REFERENCES managers(id) ON DELETE SET NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);