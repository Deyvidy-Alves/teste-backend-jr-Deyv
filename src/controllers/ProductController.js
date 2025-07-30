// src/controllers/productController.js

/**
 * CONTROLADOR DE PRODUTOS
 * 
 * Este módulo contém a lógica para manipular as requisições relacionadas a produtos.
 * Ele interage com o ProductService para realizar operações de CRUD (Create, Read, Update, Delete).
 * 
 * @param {Request} req - Objeto de requisição do Express, que contém informações sobre a requisição HTTP.
 * @param {Response} res - Objeto de resposta do Express, que permite enviar uma resposta ao cliente.
 */

const ProductService = require('../services/ProductService'); // Importa o serviço de produtos

class ProductController {
  /**
   * Obtém todos os produtos (GET /api/products)
   */
  static async getAll(req, res) {
    try {
      const products = await ProductService.getAll(); // Chama o serviço para obter todos os produtos
      res.json(products); // Retorna a lista de produtos em formato JSON
    } catch (error) {
      console.error('Erro ao listar produtos:', error); // Loga o erro no console
      res.status(500).json({ error: error.message }); // Retorna erro 500 em caso de falha
    }
  }

  /**
   * Cria um novo produto (POST /api/products)
   */
  static async create(req, res) {
    try {
      console.log('Dados recebidos na requisição para criar produto:', req.body); // Loga os dados recebidos
      const product = await ProductService.create(req.body); // Chama o serviço para criar o produto
      res.status(201).json(product); // Retorna o produto criado com status 201
    } catch (error) {
      console.error('Erro ao criar produto:', error); // Loga o erro no console
      res.status(500).json({ error: error.message }); // Retorna erro 500 em caso de falha
    }
  }

  /**
   * Obtém um produto pelo ID (GET /api/products/:id)
   */
  static async getById(req, res) {
    try {
      const product = await ProductService.getById(req.params.id); // Chama o serviço para obter o produto pelo ID
      res.json(product); // Retorna o produto em formato JSON
    } catch (error) {
      console.error('Erro ao obter produto:', error); // Loga o erro no console
      res.status(404).json({ error: error.message }); // Retorna erro 404 se o produto não for encontrado
    }
  }

  /**
   * Atualiza um produto pelo ID (PUT /api/products/:id)
   */
  static async update(req, res) {
    try {
      const product = await ProductService.update(req.params.id, req.body); // Chama o serviço para atualizar o produto
      res.json(product); // Retorna o produto atualizado em formato JSON
    } catch (error) {
      console.error('Erro ao atualizar produto:', error); // Loga o erro no console
      res.status(404).json({ error: error.message }); // Retorna erro 404 se o produto não for encontrado
    }
  }

  /**
   * Deleta um produto pelo ID (DELETE /api/products/:id)
   */
  static async delete(req, res) {
    try {
      await ProductService.delete(req.params.id); // Chama o serviço para deletar o produto
      res.status(204).send(); // Retorna status 204 No Content em caso de sucesso
    } catch (error) {
      console.error('Erro ao deletar produto:', error); // Loga o erro no console
      res.status(404).json({ error: error.message }); // Retorna erro 404 se o produto não for encontrado
    }
  }
}

module.exports = ProductController; // Exporta o controlador para uso em rotas
