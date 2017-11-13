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
            // TODO implement
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public getOrder(request, response) {
        try {
            console.log('GET /orders/' + request.params.id)
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public postOrder(request, response) {
        try {
            console.log('POST /orders')
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public putOrder(request, response) {
        try {
            console.log('PUT /orders/' + request.params.id)
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }

    public deleteOrder(request, response) {
        try {
            console.log('DELETE /orders/' + request.params.id)
            response.status(200).send()
        } catch(error) {
            console.log(error);
            response.status(500).send()
        }
    }
}

export default OrderController