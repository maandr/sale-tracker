use serpdb;

CREATE TABLE products (
    `id` int NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL,
    `modified_at` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    `sku` varchar(20) NOT NULL,
    `name` varchar(120) NOT NULL,
    `price` decimal,
    `stockLevel` int,
    `tags` varchar(300),
    PRIMARY KEY(id)
);

-- TODO: auto set createdAt
CREATE TABLE orders (
    `id` int NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL,
    `modified_at` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    `status` varchar(20) NOT NULL,
    `payment_method` varchar(60) NOT NULL,
    `shipping_method` varchar(60) NOT NULL,
    `shipping_price` decimal NOT NULL,
    `firstname` varchar(60) NOT NULL,
    `lastname` varchar(60) NOT NULL,
    `street` varchar(60) NOT NULL,
    `street2` varchar(60) NOT NULL,
    `postalCode` varchar(10) NOT NULL,
    `city` varchar(60) NOT NULL,
    `country` varchar(2) NOT NULL,
    PRIMARY KEY(id)
);

-- TODO: onDelete cascade
CREATE TABLE lineitems (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `amount` int NOT NULL,
    `price` decimal NOT NULL,
    PRIMARY KEY(id)
);

-- TODO: onDelete cascade
CREATE TABLE m_order_lineitem (
    `orderId` int NOT NULL,
    `lineitemId` int NOT NULL
);