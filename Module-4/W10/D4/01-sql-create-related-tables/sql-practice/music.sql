-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians_old;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians_old (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

-- drop the old musicians
DROP TABLE IF EXISTS musicians;

-- create new table here
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

-- if we have data 
INSERT INTO musicians (id, first_name, last_name)
SELECT id, first_name, last_name FROM musicians_old;

-- delete the old table
DROP TABLE musicians_old;

-- step 2
DROP TABLE IF EXISTS musician_instruments;

CREATE TABLE musician_instruments (
  musician_id INTEGER,
  instrument_id INTEGER,
  PRIMARY KEY (musician_id, instrument_id),
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);
