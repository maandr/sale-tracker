import EntityRepository from '../entity/EntityRepository'

class ProductRepository extends EntityRepository {
    constructor() {
        super();
    }

    public async findAll() : Promise<any> {
        console.log('retrieving all products')
        return await this.query('SELECT * FROM products')
    }

    public async findOne(id : number) {
        console.log('finding product by id: ' + id)
        return await this.query('SELECT * FROM products WHERE id = ?', [ id ])
    }

    public async save(product : Product) {
        console.log('saving product ' + JSON.stringify(product))
        if(product.id) {
            return await this.query('UPDATE products SET sku = ?, name = ?, price = ?, stockLevel = ? WHERE id = ?', [
                product.sku,
                product.name,
                product.price,
                product.stockLevel,
                product.id
            ])
        } else {
            return await this.query('INSERT INTO products (sku, name, price, stockLevel) VALUES (?, ?, ?, ?)', [
                product.sku,
                product.name,
                product.price,
                product.stockLevel
            ])
        }
    }

    public async delete(id : number) {
        console.log('deleting product ' + id)
        return await this.query('DELETE FROM products WHERE id = ?', [ id ])
    }
}

export default new ProductRepository()