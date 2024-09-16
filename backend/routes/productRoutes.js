const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');

router.get('/', productController.getAllProducts);
router.post('/', verifyToken, verifyAdmin, productController.createProduct);

module.exports = router;
