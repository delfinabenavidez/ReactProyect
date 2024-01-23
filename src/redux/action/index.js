// Alañadir producto al carrito
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// Sacar producto del carrito
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}