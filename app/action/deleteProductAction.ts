"use server"

export default async function deleteProductAction(id:number) {
    await fetch(`http://localhost:3000/api/deleteProduct/${id}`,{
        method:"DELETE",
    })

}
