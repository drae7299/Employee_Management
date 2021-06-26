use employees;
DROP DATABASE IF EXISTS employeesDB; 
CREATE database employeesDB; 

USE employeesDB; 

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL, 
    PRIMARY KEY (id)
); 