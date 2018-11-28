DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  -- Creates a boolean column called "five_times" that sets the default value to false if nothing is entered --
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);