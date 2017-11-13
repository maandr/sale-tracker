interface Order {
    id? : number
    createdAt : string
    status : string
    paymentMethod : string
    shippingMethod : string
    shippingPrice : number
    firstname : string
    lastname : string
    street : string
    street2 : string
    postalCode : string
    city : string
    country : string
}

export default Order