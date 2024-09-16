const Cart = require('../models/cartModel');

exports.addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  try {
    const cartItem = await Cart.create({ user_id: req.user.id, product_id, quantity });
    res.json({ message: 'Item added to cart', cartItem });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findByUserId(req.user.id);
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};
