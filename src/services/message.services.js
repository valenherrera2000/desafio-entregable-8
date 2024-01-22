import messageRepository from '../repositories/message.repository.js';

export default class MessageService {
  static findAll(filter = {}) {
    return messageRepository.getAll(filter);
  }

  static async create(payload) {
    console.log('Creating a new message 📩');
    const message = await messageRepository.create(payload);
    console.log(`Message created successfully (${message._id}) 📩`);
    return message;
  }

  static findById(messageId) {
    return messageRepository.getById(messageId);
  }

  static updateById(messageId, payload) {
    return messageRepository.updateById(messageId, payload);
  }

  static deleteById(messageId) {
    return messageRepository.deleteById(messageId);
  }
}
