import { Router } from 'express';
import MessageController from '../../controllers/message.controller.js';

const router = Router();

router.get('/messages', async (req, res) => {
    let messages = await MessageController.get();
    res.render('messages', { messages: messages.map(message => message.toJSON()) });
});

export default router;
