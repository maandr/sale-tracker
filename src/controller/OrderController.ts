import repository from '../orders/OrderRepository'

class OrderController {

    constructor(router) {
        this.mountRoutes(router)
    }

    private mountRoutes(router) : void {
        router.get('/orders', this.getOrders)
        router.get('/orders/:id', this.getOrder)
        router.post('/orders', this.postOrder)
        router.put('/order/:id', this.putOrder)
        router.delete('/order/:id', this.deleteOrder)
    }

    public getOrders(request, response) {
        try {
            console.log('GET /orders')
            let orders = repository.findAll()
            response.status(200).json(orders)
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public getOrder(request, response) {
        try {
            console.log('GET /orders/' + request.params.id)
            let order = repository.findOne(request.params.id)
            response.status(200).json(order)
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public async postOrder(request, response) {
        try {
            console.log('POST /orders')
            await repository.save(request.body)
            response.status(201).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public putOrder(request, response) {
        try {
            console.log('PUT /orders/' + request.params.id)
            repository.save({
                id: request.params.id,
                status: request.body.status,
                paymentMethod: request.body.paymentMethod,
                shippingMethod: request.body.shippingMethod,
                shippingPrice: request.body.shippingPrice,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                street: request.body.street,
                street2: request.body.street2,
                postalCode: request.body.postalCode,
                city: request.body.city,
                country: request.body.country,
                lineItems: request.body.lineItems
            })
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public deleteOrder(request, response) {
        try {
            console.log('DELETE /orders/' + request.params.id)
            repository.delete(request.params.id)
            response.status(204).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }
}

export default OrderController