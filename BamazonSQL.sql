CREATE DATABASE bazamon_db;
USE bazamon_db;

CREATE TABLE products(
item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_nameprice INTEGER(30) NOT NULL,
department_quantity INTEGER(30),
PRIMARY KEY (item_id)
);

ALTER TABLE products
MODIFY COLUMN department_nameprice DECIMAL (8,2) NOT NULL;

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("fishing pole", 149.99, 40);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("tackle box", 34.99, 25);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("bobber", 4.99, 60);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("knife", 55.99, 20);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("weighters", 100.00, 24);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("fishing line", 14.99, 100);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("life jacket", 35.00, 14);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("kayak", 1000.00, 9);

INSERT INTO products (product_name, department_nameprice, department_quantity)
VALUES ("Yetti cooler", 450.00, 22);

