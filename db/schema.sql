/*
Creating the database
*/

CREATE DATABASE burgers_db;
USE burgers_db;

-- creating a table burgers with pre-defined fields --
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)

)


