const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = await Product.create({ name, price, description, created_by: req.user.id });
    res.json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};
