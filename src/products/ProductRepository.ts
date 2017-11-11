import * as mysql from 'mysql'

class ProductRepository {
    protected mysql;

    constructor() {
        this.initializeDatabaseConnection();
    }

    private initializeDatabaseConnection() : void {
        this.mysql = mysql.createConnection({
            host     : '192.168.99.100',
            user     : 'admin',
            password : 'admin',
            database : 'sales_tracking'
        });

        this.mysql.connect(function(error) {
          console.log(error)  
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
    }

    public delete(product : Product) {
        console.log('deleting product ' + product)
    }
}

export default new ProductRepository()