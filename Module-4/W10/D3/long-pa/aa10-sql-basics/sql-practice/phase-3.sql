-- 1. A new customer joined the loyalty program
INSERT INTO customers (name, phone, points) VALUES ('Rachel', '1111111111', 5);

-- 2. Rachel purchases a coffee
-- Check Rachel's current points
SELECT points FROM customers WHERE name = 'Rachel';

-- Update Rachel's points after purchase
UPDATE customers SET points = points - 1 WHERE name = 'Rachel';

-- Add coffee order
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (0, CURRENT_TIMESTAMP);

-- 3. Two new customers joined the loyalty program
INSERT INTO customers (name, email, phone, points) VALUES 
    ('Monica', 'monica@friends.show', '2222222222', 5),
    ('Phoebe', 'phoebe@friends.show', '3333333333', 5);

-- 4. Phoebe purchases three coffees
-- Check Phoebe's current points
SELECT points FROM customers WHERE name = 'Phoebe';

-- Update Phoebe's points after purchase
UPDATE customers SET points = points - 3 WHERE name = 'Phoebe';

-- Add coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- 5. Rachel and Monica each purchase four coffees
-- Update Rachel's points
UPDATE customers SET points = points - 4 WHERE name = 'Rachel';

-- Add Rachel's coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- Update Monica's points
UPDATE customers SET points = points - 4 WHERE name = 'Monica';

-- Add Monica's coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- 6. Monica wants to know her new point total
SELECT points FROM customers WHERE name = 'Monica';

-- 7. Rachel wants to check her total points and redeem if enough
SELECT points FROM customers WHERE name = 'Rachel';
-- If points >= 1, redeem
UPDATE customers SET points = points - 1 WHERE name = 'Rachel';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 8. Three new customers joined the loyalty program
INSERT INTO customers (name, email, points) VALUES 
    ('Joey', 'joey@friends.show', 5),
    ('Chandler', 'chandler@friends.show', 5),
    ('Ross', 'ross@friends.show', 5);

-- 9. Ross purchases six coffees
-- Check Ross's current points
SELECT points FROM customers WHERE name = 'Ross';

-- Update Ross's points after purchase
UPDATE customers SET points = points - 6 WHERE name = 'Ross';

-- Add Ross's coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- 10. Monica purchases three coffees
-- Update Monica's points
UPDATE customers SET points = points - 3 WHERE name = 'Monica';

-- Add Monica's coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- 11. Phoebe wants to check her total points and redeem if enough
SELECT points FROM customers WHERE name = 'Phoebe';
-- If points >= 1, redeem
UPDATE customers SET points = points - 1 WHERE name = 'Phoebe';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 12. Ross demands a refund for the last two coffees
-- Delete last two coffee orders for Ross
DELETE FROM coffee_orders WHERE id IN (
    SELECT id FROM coffee_orders 
    WHERE ordered_at = (SELECT MAX(ordered_at) FROM coffee_orders WHERE is_redeemed = 0) 
    LIMIT 2
);

-- Update Ross's points to reflect the returned purchases
UPDATE customers SET points = points + 2 WHERE name = 'Ross';

-- 13. Joey purchases two coffees
-- Update Joey's points
UPDATE customers SET points = points - 2 WHERE name = 'Joey';

-- Add Joey's coffee orders
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES 
    (0, CURRENT_TIMESTAMP),
    (0, CURRENT_TIMESTAMP);

-- 14. Monica wants to check her total points and redeem if enough
SELECT points FROM customers WHERE name = 'Monica';
-- If points >= 1, redeem
UPDATE customers SET points = points - 1 WHERE name = 'Monica';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 15. Chandler wants to delete his loyalty program account
DELETE FROM customers WHERE name = 'Chandler';

-- 16. Ross wants to check his total points and redeem if enough
SELECT points FROM customers WHERE name = 'Ross';
-- If points >= 1, redeem
UPDATE customers SET points = points - 1 WHERE name = 'Ross';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 17. Joey wants to check his total points and redeem if enough
SELECT points FROM customers WHERE name = 'Joey';
-- If points >= 1, redeem
UPDATE customers SET points = points - 1 WHERE name = 'Joey';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 18. Phoebe wants to change her email
UPDATE customers SET email = 'p_as_in_phoebe@friends.show' WHERE name = 'Phoebe';
