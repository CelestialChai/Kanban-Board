-- DROP DATABASE
DROP DATABASE IF EXISTS kanban_db;

-- CREATE DATABASE
CREATE DATABASE kanban_db;

-- Connect to the database
\c kanban_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
   );

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'To Do',
    user_id INT REFERENCES users(id),
   );

INSERT INTO users (username, password) VALUES
('JollyGuru', 'password'),
('SunnyScribe', 'password'),
('RadiantComet', 'password');
