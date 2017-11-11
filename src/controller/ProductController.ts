import repository from '../products/ProductRepository'

class ProductController {

    constructor(router) {
        this.mountRoutes(router);
    }

    private mountRoutes(router) : void {
        router.get('/products', (request, response) => {
            console.log('GET /products')
            response.json(repository.findAll())
        })

        router.get('/products/:id', (request, response) => {
            console.log('GET /products/' + request.params.id)
            response.json(request.body)
        })

        router.post('/products', (request, response) => {
            console.log('POST /products')
            response.json(request.body)
        })

        router.put('/products/:id', (request, response) => {
            console.log('PUT /products/' + request.params.id)
            response.json(request.body)
        })

        router.delete('/products/:id', (request, response) => {
            console.log('DELETE /products/' + request.params.id)
            response.json(request.body)
        })
    }
}

export default ProductController