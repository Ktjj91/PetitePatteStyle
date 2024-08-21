export type OrderStripeType = {
    totalAmount:string,
    items:ItemOrder[]
    id:number
}

export type ItemOrder = {
    description:string,
    id:number,
    image:string,
    name:string
    orderId:number,
    price:number,
    quantity:number
}