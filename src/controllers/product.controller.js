import ProductService from '../services/product.services.js';
import ProductModel from "../models/ProductModel.js";

export default class ProductController {
    static async create(data) {
        console.log('Creating a new product 🛍️');
        const newProduct = await ProductService.create(data);
        console.log('Product created successfully 🛍️');
        return newProduct;
    }

    static async get(query = {}) {
        const products = await ProductModel.find(query);
        return products;
    }

    static async getById(productId) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Error(`Product ID not found: ${productId} 😨`);
        }
        return product;
    }

    static async updateById(productId, data) {
        await ProductController.getById(productId);
        console.log('Updating the product 🛍️');
        await ProductModel.updateOne({ _id: productId }, { $set: data });
        console.log('Product updated successfully 🛍️');
    }

    static async deleteById(productId) {
        await ProductController.getById(productId);
        console.log('Deleting the product 🛍️');
        await ProductModel.deleteOne({ _id: productId });
        console.log('Product deleted successfully 🛍️');
    }
}
