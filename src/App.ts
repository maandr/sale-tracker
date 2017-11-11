import * as express from 'express'
import ProductController from './controller/ProductController'

class App {
    public express
    public controllers

    constructor() {
        this.express = express()
        const router = express.Router()
        this.controllers = [
            new ProductController(router)
        ]
        this.express.use('/api', router)
    }
}

export default new App().express;