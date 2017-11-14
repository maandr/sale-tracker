import EntityRepository from '../entity/EntityRepository'
import Order from './Order'

class OrderRepository extends EntityRepository {

    constructor() {
        super()
    }

    // TODO: join lineitems on order
    public async findAll() : Promise<Array<Order>> {
        console.log('retrieving all orders')
        return await this.query('SELECT * FROM orders')
    }

    // TODO: join lineitems on order
    public async findOne(id : number) : Promise<Order> {
        console.log('finding order by id ' + id)
        return await this.query('SELECT * FROM order WHERE id = ?', [ id ])
    }

    public async save(order : Order) : Promise<void> {
        console.log('saving order ' + JSON.stringify(order))
        if(order.id) {
            let createdOrder = await this.query('INSERT INTO orders (status, paymentMethod, shippingMethod, shippingPrice, firstname, lastname, street, street2, postalCode, city, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)' [
                order.status,
                order.paymentMethod,
                order.shippingMethod,
                order.shippingPrice,
                order.firstname,
                order.lastname,
                order.street,
                order.street2,
                order.postalCode,
                order.city,
                order.country
            ])
            order.lineItems.forEach(async (lineItem) => {
                let createdLineItem = await this.query('INSERT INTO lineitems (name, amount, price) VALUES (?, ?, ?)', [
                    lineItem.name,
                    lineItem.amount,
                    lineItem.price
                ])

                await this.query('INSERT INTO m_order_lineitem (orderId, lineItemId) VALUES (?, ?)', [
                    createdOrder.id,
                    createdLineItem.id
                ])
            })
        } else {
            await this.query('UPDATE orders SET status = ?, paymentMethod = ?, shippingMethod = ?, shippingPrice = ?, firstname = ?, lastname = ?, street = ?, street2 = ?, postalCode = ?, city = ?, country = ?', [
                order.status,
                order.paymentMethod,
                order.shippingMethod,
                order.shippingPrice,
                order.firstname,
                order.lastname,
                order.street,
                order.street2,
                order.postalCode,
                order.city,
                order.country
            ])
            /* strategy to update lineitems, on PUT, drop all an re-create? */
        }
    }

    public async delete(id : number) : Promise<void> {
        console.log('deleting order ' + id)
        await this.query('DELETE * FROM order WHERE id = ?', [ id ])
    }
}

export default new OrderRepository()