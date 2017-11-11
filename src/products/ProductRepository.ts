import * as mysql from 'mysql'

class ProductRepository {
    protected connection;

    constructor() {
        this.initializeDatabaseConnection();
    }

    private initializeDatabaseConnection() : void {
        this.connection = mysql.createConnection({
            host     : '192.168.99.100',
            user     : 'admin',
            password : 'admin',
            database : 'sales_tracking'
        });

        this.connection.connect(function(error) {
            if(error) {
                console.log(error)  
            }
        })
    }

    public findAll() : Array<Product> {
        return [
            { sku: '1001-XS', name: 'Riot Dont Diet Shirt Black', price: 29.99, stockLevel: 5 },
            { sku: '1001-S', name: 'Riot Dont Diet Shirt Black', price: 29.99, stockLevel: 7 }
        ]
    }

    public findOne(sku : string) {
        console.log('finding product by sku: ' + sku)
    }

    public save(product : Product) {
        console.log('saving product ' + product)
        this.connection.query('INSERT INTO products (sku, name, price, stockLevel) VALUES (?, ?, ?, ?)', [
            product.sku,
            product.name,
            product.price,
            product.stockLevel
        ], function(error, results, fields) {
            if(error) {
                console.log(error)
            }
        });
    }

    public delete(product : Product) {
        console.log('deleting product ' + product)
    }
}

export default new ProductRepository()