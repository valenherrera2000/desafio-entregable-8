import CartRepository from './cart.repository.js';
import MessageRepository from './message.repository.js';
import ProductRepository from './product.repository.js';
import { CartDAO } from '../dao/cart.mongodb.dao.js';
import { MessageDAO } from '../dao/message.mongodb.dao.js';
import { ProductDAO } from '../dao/product.mongodb.dao.js';

export const cartRepository = new CartRepository(new CartDAO());
export const messageRepository = new MessageRepository(new MessageDAO());
export const productRepository = new ProductRepository(new ProductDAO ());
