import repository from '../products/ProductRepository'

class ProductController {

    constructor(router) {
        this.mountRoutes(router)
    }

    private mountRoutes(router) : void {
        router.get('/products', this.getProducts)
        router.get('/products/:id', this.getProduct)
        router.post('/products', this.postProduct)
        router.put('/products/:id', this.putProduct)
        router.delete('/products/:id', this.deleteProduct)
    }

    // GET /products
    public async getProducts(request, response) {
        try {
            console.log('GET /products')
            let products = await repository.findAll()
            response.status(200).json(products)
        } catch(error) {
            console.log(error)
            response.status(500).send()
        }
    }

    // GET /product/:id
    public async getProduct(request, response) {
        try {
            console.log('GET /products/' + request.params.id)
            let product = await repository.findOne(request.params.id);
            if(product) {
                response.status(200).json(product)
            } else {
                response.status(204).send()
            }
        } catch(error) {
            console.log(error)
            response.status(500).send()
        }
    }

    // POST /products
    public async postProduct(request, response) {
        try {
            console.log('POST /products')
            await repository.save(request.body)
            response.status(201).send()
        } catch(error) {
            console.log(error)
            response.status(500).send()
        }
    }

    // PUT /products/:id
    public async putProduct(request, response) {
        try {
            console.log('PUT /products/' + request.params.id)
            await repository.save({
                id: request.params.id,
                sku: request.body.sku,
                name: request.body.name,
                price: request.body.price,
                stockLevel: request.body.stockLevel,
                tags: request.body.tags
            })
            response.status(200).json(request.body)
        } catch(error) {
            console.log(error)
            response.status(500).send()
        }
    }

    // DELETE /products/:id
    public async deleteProduct(request, response) {
        try {
            console.log('DELETE /products/' + request.params.id)
            await repository.delete(request.params.id)
            response.status(200).send()
        } catch(error) {
            response.status(500).send()
        }
    }
}

export default ProductController