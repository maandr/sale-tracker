import repository from '../products/ProductRepository'

class ProductController {

    constructor(router) {
        this.mountRoutes(router);
    }

    private mountRoutes(router) : void {
        router.get('/products', async (request, response) => {
            try {
                console.log('GET /products')
                let products = await repository.findAll()
                response.status(200).json(products)
            } catch(error) {
                console.log(error)
                response.status(500).send()
            }
        })

        router.get('/products/:id', async (request, response) => {
            try {
                console.log('GET /products/' + request.params.id)
                let product = await repository.findOne(request.params.id);
                if(product)
                    response.status(200).json(product)
                else
                    response.status(204).send()
            } catch(error) {
                console.log(error)
                response.status(500).send()
            }
        })

        router.post('/products', (request, response) => {
            try {
                console.log('POST /products')
                console.log(JSON.stringify(request.body))
                repository.save(request.body)
                response.status(201).send()
            } catch(error) {
                console.log(error)
                response.status(500).send()
            }
        })

        router.put('/products/:id', (request, response) => {
            try {
                console.log('PUT /products/' + request.params.id)
                repository.save({
                    id: request.params.id,
                    sku: request.body.sku,
                    name: request.body.name,
                    price: request.body.price,
                    stockLevel: request.body.stockLevel
                })
                response.status(200).json(request.body)
            } catch(error) {
                console.log(error)
                response.status(500).send()
            }

        })

        router.delete('/products/:id', (request, response) => {
            try {
                console.log('DELETE /products/' + request.params.id)
                repository.delete(request.params.id)
                response.status(200).send()
            } catch(error) {
                response.status(500).send()
            }
        })
    }
}

export default ProductController