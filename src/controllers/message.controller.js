import MessageService from '../services/message.services.js';
import MessageDAO from '../dao/message.mongodb.dao.js';

export default class MessageController {
  static async create(data) {
    console.log('Creating a new message 📩');
    const newMessage = await MessageService.create(data);
    console.log('Message created successfully 📩');
    return newMessage;
  }

  static async get(query = {}) {
    const messages = await MessageDAO.getAll(query);
    return messages;
  }

  static async getById(messageId) {
    const message = await MessageDAO.getById(messageId);
    if (!message) {
      throw new Error(`Message ID not found: ${messageId} 😨`);
    }
    return message;
  }

  static async updateById(messageId, data) {
    await MessageController.getById(messageId);
    console.log('Updating the message 📩');
    await MessageDAO.updateById(messageId, data);
    console.log('Message updated successfully 📩');
  }

  static async deleteById(messageId) {
    await MessageController.getById(messageId);
    console.log('Deleting the message 📩');
    await MessageDAO.deleteById(messageId);
    console.log('Message deleted successfully 📩');
  }
}
