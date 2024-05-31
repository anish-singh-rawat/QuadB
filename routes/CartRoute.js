import express from "express";
import { addToCart } from "../controller/CartController.js";

const CartRoute = express.Router();

CartRoute.post('/AddCartItem', addToCart)
// CartRoute.get('/getCartItem/:id', getProductById)
// CartRoute.delete('/deleteCartItem/:id', getProductById)


export default CartRoute