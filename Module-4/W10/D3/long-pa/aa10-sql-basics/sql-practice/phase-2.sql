-- Your code here 
-- Create the customers table
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    phone CHAR(10) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    points INTEGER NOT NULL DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create the coffee_orders table
CREATE TABLE coffee_orders (
    id INTEGER PRIMARY KEY,
    is_redeemed BOOLEAN DEFAULT 0,
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Drop the tables if they exist
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS coffee_orders;
