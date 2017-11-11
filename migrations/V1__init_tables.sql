CREATE TABLE products (
    `id` int NOT NULL AUTO_INCREMENT,
    `sku` varchar(20) NOT NULL,
    `name` varchar(120) NOT NULL,
    `price` decimal,
    `stockLevel` int,
    PRIMARY KEY(id)
);