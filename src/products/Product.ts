interface Product {
    id?: number
    sku: string
    name : string
    price : number
    stockLevel : number
    tags?: Array<string>
}

export default Product