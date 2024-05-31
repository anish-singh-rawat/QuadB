import express from "express";
import authMiddleWare from "../middleware/AuthMiddleware.js";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/producatController.js";

const ProductRouter = express.Router()

ProductRouter.get('/getProduct/:id', getProductById)
ProductRouter.get('/AllProduct', getAllProducts)
ProductRouter.post('/addProduct', authMiddleWare, addProduct)
ProductRouter.delete('/deleteProduct/:id', authMiddleWare,deleteProduct)
ProductRouter.put('/updateProduct/:id',authMiddleWare, updateProduct)

export default ProductRouter