import { Router } from 'express';
import { saveProducto, getProducto, getProductos, getProductosCount, deleteProducto, updateProducto } from '../controllers/productos';

const router = Router();

/**
 * @swagger
 * Tags: 
 *     name: Products
 *     description: Products endpoint
 */

/**
 * @swagger
 * /productos:
 * get:
 *  summary: get all products
 *  tags: [Products]
 */
router.get('/productos', getProductos)

/**
 * @swagger
 * /productos/count:
 * get:
 *  summary: get total products counter
 * tags: [Products]
 */
router.get('/productos/count', getProductosCount)

/**
 * @swagger
 * /productos:
 * get:
 *  summary: get product by id
 *  tags: [Products]
 */
router.get('/productos/:id', getProducto)

/**
 * @swagger
 * /productos:
 * post:
 *  summary: save a new product
 * tags: [Products]
 */
router.post('/productos', saveProducto)

/**
 * @swagger
 * /productos:
 * delete:
 *  summary: delete a product by id
 * tags: [Products]
 */
router.delete('/productos/:id', deleteProducto)

/**
 * @swagger
 * /productos:
 * put:
 *  summary: update a product by id
 * tags: [Products]
 */
router.put('/productos/:id', updateProducto)

export default router