"use server"

export default async function deleteProductAction(id:number) {
    const parseId = String(id)
    await fetch(`api/deleteProduct/${parseId}`,{
        method:"DELETE",
    })

}
