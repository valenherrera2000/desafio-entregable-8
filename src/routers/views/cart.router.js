import { Router } from 'express';
import CartController from '../../controllers/cart.controller.js';


const router = Router();

router.get('/carts', async (req, res) => {
    let carts = await CartController.get();
    res.render('carts', { carts: carts.map(cart => cart.toJSON()) });
});

export default router;
