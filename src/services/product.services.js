import productRepository from '../repositories/product.repository.js';

export default class ProductService {
    static async findAll(filter = {}) {
        try {
            const products = await productRepository.getAll(filter); 
            return products;
        } catch (error) {
            throw new Error(`Error while fetching products: ${error.message}`);
        }
    }

    static async create(payload) {
        try {
            console.log('Creating a new product 🛍️');
            const product = await productRepository.create(payload);
            console.log(`Product created successfully (${product._id}) 🛍️`);
            return product;
        } catch (error) {
            throw new Error(`Error while creating product: ${error.message}`);
        }
    }

    static async findById(productId) {
        try {
            const product = await productRepository.getById(productId);
            if (!product) {
                throw new Error(`Product with ID ${productId} not found`);
            }
            return product;
        } catch (error) {
            throw new Error(`Error while finding product by ID: ${error.message}`);
        }
    }

    static async updateById(productId, payload) {
        try {
            await productRepository.updateById(productId, payload);
            console.log('Product updated successfully 🛍️');
        } catch (error) {
            throw new Error(`Error while updating product: ${error.message}`);
        }
    }

    static async deleteById(productId) {
        try {
            await productRepository.deleteById(productId);
            console.log('Product deleted successfully 🛍️');
        } catch (error) {
            throw new Error(`Error while deleting product: ${error.message}`);
        }
    }
}
