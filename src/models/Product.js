// src/models/Product.js

const db = require('../config/database'); // Importa a instância do banco de dados Firestore

class Product {
  // 1. ACESSO À COLEÇÃO DE PRODUTOS
  static collection = db.collection('products'); // Acessa a coleção de produtos no Firestore

  /**
   * Cria um novo produto
   * @param {Object} data - Dados do produto a serem criados
   * @returns {Promise<Object>} - Retorna o produto criado, incluindo seu ID
   */
  static async create(data) {
    const docRef = await this.collection.add(data); 
    const snapshot = await docRef.get(); 
    return { id: docRef.id, ...snapshot.data() }; 
  }

  /**
   * Obtém todos os produtos
   * @returns {Promise<Array>} - Retorna uma lista de produtos
   */
  static async getAll() {
    const snapshot = await this.collection.get(); // Obtém todos os documentos da coleção
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapeia os documentos para incluir seus IDs
  }

  /**
   * Obtém um produto pelo ID
   * @param {string} id 
   * @returns {Promise<Object>} 
   * @throws {Error} 
   */
  static async getById(id) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new Error('Produto não encontrado'); 
    return { id: doc.id, ...doc.data() };
  }

  /**
   * Atualiza um produto pelo ID
    @param {string} id 
    @param {Object} data 
    @returns {Promise<Object>} 
   */
  static async update(id, data) {
    const productRef = this.collection.doc(id); 
    await productRef.update(data); 
    return { id, ...data }; 
  }  

  /**
   * Deleta um produto pelo ID
    @param {string} id 
    @returns {Promise<void>} 
   */
  static async delete(id) {
    await this.collection.doc(id).delete(); // Deleta o documento pelo ID
  }
}

// 2. EXPORTAÇÃO DO MODELO
module.exports = Product; 