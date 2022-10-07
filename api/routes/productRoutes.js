import express from 'express';
import { productController } from '../controllers/index.js';

const router = express.Router();

router.route('/products')
    .post(productController.createProducts)
    .get(productController.getAllproducts)
router.route('/products/:id')
   .get(productController.getProductsById)
   .put(productController.updateProductById)
   .delete(productController.deleteProductById)

export default router;
