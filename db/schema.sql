DROP DATABASE IF EXISTS snacks_dev;
CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 image TEXT DEFAULT "",
 serving INT NOT NULL,
 protein INT NOT NULL,
 sugar INT NOT NULL,
 sodium INT NOT NULL,
 fat INT NOT NULL,
 type TEXT,
 is_favorite BOOLEAN
);