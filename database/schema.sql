create table projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

create TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
);

insert into users (username, password, role) values ('admin', 'admin', 'admin');

insert into projects (title, description) values ('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');