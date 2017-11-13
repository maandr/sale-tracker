CREATE TABLE products (
    `id` int NOT NULL AUTO_INCREMENT,
    `sku` varchar(20) NOT NULL,
    `name` varchar(120) NOT NULL,
    `price` decimal,
    `stockLevel` int,
    `tags` varchar(220),
    PRIMARY KEY(id)
);

CREATE TABLE orders (
    `id` int NOT NULL AUTO_INCREMENT,
    `createdAt` datetime NOT NULL,
    `status` varchar(20) NOT NULL,
    `paymentMethod` varchar(60) NOT NULL,
    `shippingMethod` varchar(60) NOT NULL,
    `shippingPrice` decimal NOT NULL,
    `firstname` varchar(60) NOT NULL,
    `lastname` varchar(60) NOT NULL,
    `street` varchar(60) NOT NULL,
    `street2` varchar(60) NOT NULL,
    `postalCode` varchar(10) NOT NULL,
    `city` varchar(60) NOT NULL,
    `country` varchar(2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE lineitems (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `price` decimal NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE m_order_lineitem (
    `orderId` int NOT NULL,
    `lineitemId` int NOT NULL
);