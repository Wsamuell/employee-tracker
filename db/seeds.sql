INSERT INTO departments (name)
VALUES  
('Sales'),
('Engineering'),
('Legal'),
('Finance');


INSERT INTO roles (departmentID, title, salary)
VALUES
(1, 'Sales Lead', 100000),
(1, 'Salesperson', 80000),
(2, 'Lead Engineer', 150000),
(2, 'Software Engineer', 120000),
(4, 'Accountant', 125000),
(3, 'Legal Team Lead', 250000),
(3, 'Lawyer', 190000);

INSERT INTO managers (first_name, last_name, departmentID)
VALUES
('Dirk', 'Hoch', 1),
('Dan', 'Millet', 1),
('Clinton', 'Saliba', 1),
('Gerda', 'Nixon', 2),
('Thi', 'Zeledon', 2),
('Eli', 'Varn', 4);


INSERT INTO employees (first_name, last_name, managerID, roleID)
VALUES
-- sales person
('Marget', 'Forester', 1, 2),
('Lyndon', 'Subia', 2, 2),
('Aleen', 'Tipping', 3, 2),
('Micheal', 'Juares', 1, 2),
('Helaine', 'Mahar', 2, 2),
('Garth', 'Casados', 3, 2),
('Tyson', 'Tome', 1, 2),
('Shonna', 'Uvalle', 2, 2),
('Johnathon', 'Rothchild', 3, 2),

-- software engineer
('Wilburn', 'Holdeman', 4, 4),
('Shantell', 'Hinckley', 4, 4),
('Dudley', 'Gibbon', 5, 4),
('Jaye', 'Horta', 5, 4),
('Sherise', 'Manchester', 4, 4),
('Leanna', 'Seats', 5, 4),

-- Accountants
('Jennie', 'Ungar', 4, 5),
('Chrissy', 'Spillers', 4, 5),
('Reena', 'Aparicio', 4, 5),
('Conrad', 'Jamar', 4, 5),


-- Lawyers
('Yolande', 'Mccully', 4, 7),
('Katharine', 'Eells', 4, 7),
('Cami', 'Tee', 4, 7),
('Quincy', 'Mace', 4, 7);