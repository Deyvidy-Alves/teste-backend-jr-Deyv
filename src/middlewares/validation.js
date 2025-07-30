// src/middlewares/validation.js

/**
 * Este módulo contém as regras de validação para os dados do produto
 * usando o express-validator. Ele garante que os dados recebidos
 * nas requisições estejam no formato correto antes de serem processados.
 */

const { body, validationResult } = require('express-validator'); // Importa funções do express-validator

// 1. REGRAS DE VALIDAÇÃO PARA PRODUTOS
const validateProduct = [
  // Valida o campo 'nome'
  body('nome')
    .isString().withMessage('Deve ser uma string') // Verifica se é uma string
    .trim() // Remove espaços em branco no início e no final
    .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'), // Verifica se tem pelo menos 3 caracteres
  
  // Valida o campo 'descricao' (opcional)
  body('descricao')
    .optional() // Permite que o campo seja omitido
    .isString().withMessage('Deve ser uma string'), // Verifica se é uma string
    
  // Valida o campo 'preco'
  body('preco')
    .isFloat({ gt: 0 }).withMessage('Deve ser um número positivo'), // Verifica se é um número positivo
  
  // Valida o campo 'quantidade'
  body('quantidade')
    .isInt({ min: 0 }).withMessage('Deve ser um inteiro não negativo'), // Verifica se é um inteiro não negativo
    
  // 2. FUNÇÃO DE MANIPULAÇÃO DE ERROS
  (req, res, next) => {
    const errors = validationResult(req); // Obtém os erros de validação
    if (!errors.isEmpty()) {
      // Se houver erros, retorna um status 422 e os erros
      return res.status(422).json({ errors: errors.array() });
    }
    next(); // Se não houver erros, passa para o próximo middleware
  }
];

// 3. EXPORTAÇÃO DO MIDDLEWARE
module.exports = {
  validateProduct // Exporta a função de validação para uso em rotas
};
