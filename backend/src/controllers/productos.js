import { connect } from "../database";

export const getProductos = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM medicamentos");
    res.json(rows);
}

export const getProducto = async (req,res) => {
    const connection = await connect();
    const [rows]= await connection.query('SELECT *FROM medicamentos WHERE id_medicamento = ?', [req.params.id,]);
    res.json(rows[0]);
}

export const getProductosCount = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM medicamentos');
    res.json(rows[0]["COUNT(*)"]);
}

export const saveProducto = async (req,res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO medicamentos(nombre_medicamento, precio_u, cantidad_stock, cantidad_vendida) VALUES(?,?,?,?)', 
    [req.body.nombre_medicamento, req.body.precio_u, req.body.cantidad_stock, req.body.cantidad_vendida]);
    res.json({
        id: results.insertId,
        ...req.body,
    });
}

export const deleteProducto = async (req,res) => {
    const connection = await connect();
    await connection.query("DELETE FROM medicamentos WHERE id_medicamento = ?",req.params.id);
    res.sendStatus(204);
}

export const updateProducto = async (req,res) => {
    const connection = await connect();
    await connection.query("UPDATE medicamentos SET ? WHERE id_medicamento = ?",
    [req.body,
    req.params.id]);
    res.sendStatus(204);
}