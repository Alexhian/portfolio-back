create table projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

create TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
);

insert into users (username, email, password, role) values ('admin', 'admin@admin.com', '$argon2id$v=19$m=65536,t=3,p=4$9Kd1qzuSCnf9FwZFUqSG8w$C3A6ptbfGQaSY8e6r5oeE1lMkbqiqc7SwlYA7R/uVH8', 'admin');

insert into projects (title, description) values ('Project 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
('Project 2', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
('Project 3', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');