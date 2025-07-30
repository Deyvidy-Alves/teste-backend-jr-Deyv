// src/services/ProductService.js

/**
 * Serviço para gerenciar produtos.
 */

const Product = require('../models/Product'); // Importa o modelo de produto

class ProductService {
  // Cria um novo produto
  static async create(data) {
    console.log('Dados recebidos para criação do produto:', data);
    return await Product.create(data);
  }

  // Obtém todos os produtos
  static async getAll() {
    const snapshot = await Product.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Obtém um produto pelo ID
  static async getById(id) {
    const doc = await Product.collection.doc(id).get();
    if (!doc.exists) {
      throw new Error('Produto não encontrado');
    }
    return { id: doc.id, ...doc.data() };
  }

  // Atualiza um produto pelo ID
  static async update(id, data) {
    const docRef = Product.collection.doc(id);
    await docRef.update(data);
    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...updatedDoc.data() };
  }

  // Deleta um produto pelo ID
  static async delete(id) {
    const docRef = Product.collection.doc(id);
    await docRef.delete();
  }
}

module.exports = ProductService; // Exporta o serviço de produtos
