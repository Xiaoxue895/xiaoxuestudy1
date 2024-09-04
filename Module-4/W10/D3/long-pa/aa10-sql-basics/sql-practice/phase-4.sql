-- Your code here 

-- Create Employees table
CREATE TABLE Employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    department TEXT NOT NULL,
    role TEXT NOT NULL
);

-- Create RomanticRelationships table
CREATE TABLE RomanticRelationships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee1_id INTEGER REFERENCES Employees(id),
    employee2_id INTEGER REFERENCES Employees(id)
);

-- Create PerformanceReviews table
CREATE TABLE PerformanceReviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER REFERENCES Employees(id),
    score REAL NOT NULL
);

-- Create OfficeParties table
CREATE TABLE OfficeParties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    party_type TEXT NOT NULL,
    budget REAL NOT NULL,
    scheduled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 1. Add "Michael Scott" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Michael', 'Scott', 'Management', 'Regional Manager');

-- 2. Add "Dwight Schrute" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Dwight', 'Schrute', 'Sales', 'Assistant Regional Manager');

-- 3. Add "Jim Halpert" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Jim', 'Halpert', 'Sales', 'Sales Representative');

-- 4. Add "Pam Beesly" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Pam', 'Beesly', 'Reception', 'Receptionist');

-- 5. Add "Kelly Kapoor" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Kelly', 'Kapoor', 'Product Oversight', 'Customer Service Representative');

-- 6. Add "Angela Martin" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Angela', 'Martin', 'Accounting', 'Head of Accounting');

-- 7. Add "Roy Anderson" to your list of employees
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Roy', 'Anderson', 'Warehouse', 'Warehouse Staff');

-- 8. "Roy Anderson" and "Pam Beesly" are in a romantic relationship
-- Fetch IDs for Roy and Pam
SELECT id FROM Employees WHERE first_name = 'Roy' AND last_name = 'Anderson';
SELECT id FROM Employees WHERE first_name = 'Pam' AND last_name = 'Beesly';
-- Assuming Roy's ID is 7 and Pam's ID is 4
INSERT INTO RomanticRelationships (employee1_id, employee2_id) VALUES (7, 4);

-- 9. "Ryan Howard" is hired in the "Reception" department
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Ryan', 'Howard', 'Reception', 'Temp');

-- 10. An onsite office party is scheduled with a budget of $100.00
INSERT INTO OfficeParties (party_type, budget) VALUES ('Onsite', 100.00);

-- 11. "Dwight Schrute" gets a performance review with a score of 3.3
-- Fetch Dwight's ID
SELECT id FROM Employees WHERE first_name = 'Dwight' AND last_name = 'Schrute';
-- Assuming Dwight's ID is 2
INSERT INTO PerformanceReviews (employee_id, score) VALUES (2, 3.3);

-- 12. "Jim Halpert" gets a performance review with a score of 4.2
-- Fetch Jim's ID
SELECT id FROM Employees WHERE first_name = 'Jim' AND last_name = 'Halpert';
-- Assuming Jim's ID is 3
INSERT INTO PerformanceReviews (employee_id, score) VALUES (3, 4.2);

-- 13. "Dwight Schrute"'s past performance review needs to be changed to a score of 9.0
UPDATE PerformanceReviews SET score = 9.0 WHERE employee_id = 2;

-- 14. "Jim Halpert"'s past performance review needs to be changed to a score of 9.3
UPDATE PerformanceReviews SET score = 9.3 WHERE employee_id = 3;

-- 15. "Jim Halpert" is promoted to the role of "Assistant Regional Manager"
UPDATE Employees SET role = 'Assistant Regional Manager' WHERE id = 3;

-- 16. "Ryan Howard" is promoted to the "Sales" department as the role of "Sales Representative"
UPDATE Employees SET department = 'Sales', role = 'Sales Representative' WHERE id = (SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard');

-- 17. An onsite office party is scheduled with a budget of $200.00
INSERT INTO OfficeParties (party_type, budget) VALUES ('Onsite', 200.00);

-- 18. "Angela Martin" and "Dwight Schrute" are in a romantic relationship
-- Fetch Angela's ID
SELECT id FROM Employees WHERE first_name = 'Angela' AND last_name = 'Martin';
-- Assuming Angela's ID is 6
INSERT INTO RomanticRelationships (employee1_id, employee2_id) VALUES (6, 2);

-- 19. "Angela Martin" gets a performance review score of 6.2
INSERT INTO PerformanceReviews (employee_id, score) VALUES (6, 6.2);

-- 20. "Ryan Howard" and "Kelly Kapoor" are in a romantic relationship
-- Fetch Kelly's ID
SELECT id FROM Employees WHERE first_name = 'Kelly' AND last_name = 'Kapoor';
-- Assuming Kelly's ID is 5
INSERT INTO RomanticRelationships (employee1_id, employee2_id) VALUES ((SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard'), 5);

-- 21. An onsite office party is scheduled with a budget of $50.00
INSERT INTO OfficeParties (party_type, budget) VALUES ('Onsite', 50.00);

-- 22. "Jim Halpert" moves to another office branch (remove relationships and performance reviews)
-- Remove relationships and performance reviews for Jim
DELETE FROM RomanticRelationships WHERE employee1_id = 3 OR employee2_id = 3;
DELETE FROM PerformanceReviews WHERE employee_id = 3;

-- Remove Jim from Employees table
DELETE FROM Employees WHERE id = 3;

-- 23. "Roy Anderson" and "Pam Beesly" are NO LONGER in a romantic relationship
DELETE FROM RomanticRelationships WHERE employee1_id = 7 AND employee2_id = 4;

-- 24. "Pam Beesly" gets a performance review score of 7.6
-- Fetch Pam's ID
SELECT id FROM Employees WHERE first_name = 'Pam' AND last_name = 'Beesly';
-- Assuming Pam's ID is 4
INSERT INTO PerformanceReviews (employee_id, score) VALUES (4, 7.6);

-- 25. "Dwight Schrute" gets another performance review score of 8.7
INSERT INTO PerformanceReviews (employee_id, score) VALUES (2, 8.7);

-- 26. "Ryan Howard" quits the office (remove relationships and performance reviews)
-- Remove relationships and performance reviews for Ryan
DELETE FROM RomanticRelationships WHERE employee1_id = (SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard') 
   OR employee2_id = (SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard');
DELETE FROM PerformanceReviews WHERE employee_id = (SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard');
-- Remove Ryan from Employees table
DELETE FROM Employees WHERE id = (SELECT id FROM Employees WHERE first_name = 'Ryan' AND last_name = 'Howard');

-- 27. "Jim Halpert" moves back to this office branch's "Sales" department
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Jim', 'Halpert', 'Sales', 'Sales Representative');

-- 28. "Karen Filippelli" moves from a different office into this office's "Sales" department
INSERT INTO Employees (first_name, last_name, department, role) VALUES 
('Karen', 'Filippelli', 'Sales', 'Sales Representative');

-- 29. "Karen Filippelli" and "Jim Halpert" are in a romantic relationship
-- Fetch Karen's ID
SELECT id FROM Employees WHERE first_name = 'Karen' AND last_name = 'Filippelli';
-- Assuming Karen's ID is 8
INSERT INTO RomanticRelationships (employee1_id, employee2_id) VALUES (8, 3);

-- 30. An onsite office party is scheduled with a budget of $120.00
INSERT INTO OfficeParties (party_type, budget) VALUES ('Onsite', 120.00);

-- 31. The onsite office party scheduled right before this is canceled, and an offsite office party is scheduled instead with a budget of $300.00
-- Find the ID of the last onsite party
SELECT id FROM OfficeParties WHERE party_type = 'Onsite' ORDER BY scheduled_at DESC LIMIT 1;
-- Assuming the ID of the last onsite party is 17
DELETE FROM OfficeParties WHERE id = 17;
-- Insert a new offsite party with a budget of $300.00
INSERT INTO OfficeParties (party_type, budget) VALUES ('Offsite', 300.00);

-- 32. "Karen Filippelli" and "Jim Halpert" are NO LONGER in a romantic relationship
DELETE FROM RomanticRelationships WHERE employee1_id = 8 AND employee2_id = 3;

-- 33. "Pam Beesly" and "Jim Halpert" are in a romantic relationship
-- Add a new romantic relationship
INSERT INTO RomanticRelationships (employee1_id, employee2_id) VALUES (4, 3);


