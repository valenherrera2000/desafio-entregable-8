import MessageDTO from '../dto/message.dto.js';

export default class MessageRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async getAll(filter = {}) {
        const messages = await this.dao.get(filter);
        return messages.map(message => new MessageDTO(message));
    }

    async create(data) {
        const message = await this.dao.create(data);
        return new MessageDTO(message);
    }

    async updateById(id, data) {
        return this.dao.updateById(id, data);
    }

    async deleteById(id) {
        return this.dao.deleteById(id);
    }
}
