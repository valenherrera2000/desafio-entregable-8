import ProductDTO from '../dto/product.dto.js';

export default class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async getAll(filter = {}) {
        const products = await this.dao.get(filter);
        return products.map(product => new ProductDTO(product));
    }

    async create(data) {
        const product = await this.dao.create(data);
        return new ProductDTO(product);
    }

    async updateById(id, data) {
        return this.dao.updateById(id, data);
    }

    async deleteById(id) {
        return this.dao.deleteById(id);
    }
}
