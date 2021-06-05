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


INSERT INTO employees (first_name, last_name, departmentID, roleID)
VALUES
('Dirk', 'Hoch', 1, 1),
('Dan', 'Millet', 1, 1),
('Clinton', 'Saliba', 1, 1),
('Marget', 'Forester', 1, 2),
('Lyndon', 'Subia', 1, 2),
('Aleen', 'Tipping', 1, 2),
('Micheal', 'Juares', 1, 2),
('Helaine', 'Mahar', 1, 2),
('Garth', 'Casados', 1, 2),
('Tyson', 'Tome', 1, 2),
('Shonna', 'Uvalle', 1, 2),
('Johnathon', 'Rothchild', 1, 2),
('Gerda', 'Nixon', 2, 3),
('Thi', 'Zeledon', 2, 3),
('Wilburn', 'Holdeman', 2, 4),
('Shantell', 'Hinckley', 2, 4),
('Dudley', 'Gibbon', 2, 4),
('Jaye', 'Horta', 2, 4),
('Sherise', 'Manchester', 2, 4),
('Leanna', 'Seats', 2, 4),
('Jennie', 'Ungar', 3, 5),
('Chrissy', 'Spillers', 3, 5),
('Reena', 'Aparicio', 3, 5),
('Conrad', 'Jamar', 3, 5),
('Diego', 'Demyan', 3, 5),
('Eli', 'Varn', 4, 6),
('Yolande', 'Mccully', 4, 7),
('Katharine', 'Eells', 4, 7),
('Cami', 'Tee', 4, 7),
('Quincy', 'Mace', 4, 7);