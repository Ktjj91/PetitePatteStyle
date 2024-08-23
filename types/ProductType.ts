export type ProductType = {
    id:number,
    name:string,
    description:string,
    price:string,
    image:string,
    quantity:number,
    size:string,
    is_available:boolean,
    categoriesId:number
}


export type ProductTypeId = {
    categoryId:number,
    description:string,
    id:number,
    is_available:boolean,
    image:string,
    quantity:number,
    size:string,
    name:string,
    price:string,


}