
export const getCart = async (req, res) => {
    const cart = await CartModel.findOne({ userId: req.user._id }).populate('products.productId');
    if (!cart) return res.status(404).send('Cart not found.');
    res.send(cart);
};

export const addToCart = async (req, res) => {
    // let cart = await CartModel.findOne({ userId: req.user._id });
    // if (!cart) {
    //     cart = new CartModel({ userId: req.user._id, products: [] });
    // }
    // const { productId, quantity } = req.body;
    // const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    // if (productIndex >= 0) {
    //     cart.products[productIndex].quantity += quantity;
    // } else {
    //     cart.products.push({ productId, quantity });
    // }
    // await cart.save();
    res.send({message : 'Success saving'});
};

export const removeFromCart = async (req, res) => {
    const cart = await CartModel.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).send('Cart not found.');
    cart.products = cart.products.filter(p => p.productId.toString() !== req.params.id);
    await cart.save();
    res.send(cart);
};
