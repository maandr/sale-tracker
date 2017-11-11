import * as express from 'express'
import * as bodyParser from 'body-parser'
import ProductController from './controller/ProductController'

class App {
    public express
    public controllers

    constructor() {
        this.express = express()
        const router = express.Router()

        this.express.use(bodyParser.json())
        this.express.use('/api', router)

        this.controllers = [
            new ProductController(router)
        ]
    }
}

export default new App().express;