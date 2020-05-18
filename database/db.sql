
CREATE DATABASE Misvideos;

use Misvideos;

show tables;

CREATE TABLE video (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  category VARCHAR(15),
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);



describe video;
