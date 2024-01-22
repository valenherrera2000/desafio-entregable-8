import { Router } from 'express';
import ProductController from '../../controllers/product.controller.js';

const router = Router();

router.get('/products', async (req, res) => {
    let products = await ProductController.get();
    res.render('products', { products: products.map(p => p.toJSON()) });
});


export default router;