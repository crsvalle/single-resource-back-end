DROP DATABASE IF EXISTS snacks_dev;
CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 image TEXT DEFAULT '',
 serving INT DEFAULT 0,
 protein INT DEFAULT 0,
 sugar INT DEFAULT 0,
 sodium INT DEFAULT 0,
 fat INT DEFAULT 0,
 type TEXT,
 is_favorite BOOLEAN
);