import CartService from '../services/cart.services.js';
import CartDAO from '../dao/cart.mongodb.dao.js';
import ProductDAO from '../dao/product.mongodb.dao.js';

export default class CartController {
  static async purchaseCart(cartId) {
    const cart = await CartDAO.getById(cartId);
    if (!cart) {
      throw new Error(`Cart ID not found: ${cartId}`);
    }
    const productsToPurchase = cart.products;
    const productsNotPurchased = [];

    for (const product of productsToPurchase) {
      const existingProduct = await ProductDAO.getById(product.product);
      if (!existingProduct || existingProduct.stock < product.quantity) {
        productsNotPurchased.push(product.product);
      } else {
        existingProduct.stock -= product.quantity;
        await ProductDAO.updateById(product.product, { stock: existingProduct.stock });
      }
    }

    if (productsNotPurchased.length > 0) {
      return productsNotPurchased;
    }

    await CartDAO.updateById(cartId, { products: [] });

    return 'Purchase completed successfully';
  }

  static async create(data) {
    console.log('Creating a new cart 🛒');
    const newCart = await CartService.create(data);
    console.log('Cart created successfully 🛒');
    return newCart;
  }

  static async get(query = {}) {
    const carts = await CartDAO.getAll(query);
    return carts;
  }

  static async getById(sid) {
    const cart = await CartDAO.getById(sid);
    if (!cart) {
      throw new Error(`Cart ID not found: ${sid} 😨`);
    }
    return cart;
  }

  static async updateById(sid, data) {
    await CartController.getById(sid);
    console.log('Updating the cart 🛒');
    await CartService.updateById(sid, data);
    console.log('Cart updated successfully 🛒');
  }

  static async deleteById(sid) {
    await CartController.getById(sid);
    console.log('Deleting the cart 🛒');
    await CartService.deleteById(sid);
    console.log('Cart deleted successfully 🛒');
  }
}
