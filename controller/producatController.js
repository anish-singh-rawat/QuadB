import ProductModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).send(products);
};

export const getProductById = async (req, res) => {
    console.log(req.params.id, "product id")
    if (!req.params.id) {
        return res.status(404).send({ message: "please provide ID" })
    }
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found.' });
    return res.status(200).send({ product });
};

export const addProduct = async (req, res) => {
    const { name, description, price, quantity } = req.body;
    if (!name, !description, !price, !quantity) {
        return res.status(204).send({ message: "please provide all detais" });
    }
    const product = new ProductModel({ name, description, price, quantity });
    await product.save();
    return res.status(200).send({ product, message: "product added successfully" });
};


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: "Please provide an ID" });
        }
        const { name, description, price, quantity } = req.body;

        const product = await ProductModel.findByIdAndUpdate(
            id,
            { name, description, price, quantity },
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).send({ message: 'Product not found.' });
        }

        res.status(200).send({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

export const deleteProduct = async (req, res) => {
    console.log(req.params.id, "product id")
    if (!req.params.id) {
        return res.status(404).send({ message: "please provide ID" })
    }
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found.' });
    return res.status(200).send({ messsage: 'Product deleted successfully' });
};
