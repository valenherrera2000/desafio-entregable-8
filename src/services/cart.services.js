import cartRepository from '../repositories/cart.repository.js';

export default class CartService {
  static findAll(filter = {}) {
    return cartRepository.getAll(filter);
  }

  static async create(payload) {
    console.log('Creating a new cart 🛒');
    const cart = await cartRepository.create(payload);
    console.log(`Cart created successfully (${cart._id}) 🛒`);
    return cart;
  }

  static findById(sid) {
    return cartRepository.getById(sid);
  }

  static updateById(sid, payload) {
    return cartRepository.updateById(sid, payload);
  }

  static deleteById(sid) {
    return cartRepository.deleteById(sid);
  }
}
