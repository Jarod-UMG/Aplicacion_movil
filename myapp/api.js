const API='http://192.168.0.33:3000/productos'

export const getProductos = async () => {
    const res = await fetch(API)
    return await res.json()
};

export const getProducto= async (id) =>{
    const res = await fetch(`${API}/${id}`);
    return await res.json();
}