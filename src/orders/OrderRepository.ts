import EntityRepository from '../entity/EntityRepository'
import Order from './Order'

class OrderRepository extends EntityRepository {

    constructor() {
        super()
    }

    public async findAll() : Promise<Array<Order>> {
        console.log('retrieving all orders')
        return await this.query('SELECT * FROM orders')
    }

    public async findOne(id : number) : Promise<Order> {
        console.log('finding order by id ' + id)
        return await this.query('SELECT * FROM order WHERE id = ?', [ id ])
    }

    public async save(order : Order) : Promise<void> {
        console.log('saving order ' + JSON.stringify(order))
    }

    public async delete(id : number) : Promise<void> {
        console.log('deleting order ' + id)
        await this.query('DELETE * FROM order WHERE id = ?', [ id ])
    }
}