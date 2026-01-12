create table users (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  is_admin boolean not null default false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);