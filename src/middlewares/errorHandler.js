// src/middlewares/errorHandler.js

/**
 * Este middleware é responsável por capturar e tratar erros que ocorrem
 * durante o processamento das requisições na aplicação.
 * Ele deve ser adicionado após todas as rotas e middlewares.
 * 
 * @param {Error} err - O objeto de erro gerado
 * @param {Request} req - Objeto de requisição do Express
 * @param {Response} res - Objeto de resposta do Express
 * @param {Function} next - Função para passar o controle para o próximo middleware
 */
const errorHandler = (err, req, res, next) => {
    // 1. LOG DE ERRO
    // Loga a pilha de erros no console para facilitar a depuração
    console.error(err.stack);

    // 2. RESPOSTA DE ERRO
    // Retorna uma resposta JSON com status 500 (Internal Server Error)
    // e uma mensagem genérica de erro
    res.status(500).json({ error: 'Something went wrong!' });
};

// 3. EXPORTAÇÃO DO MANIPULADOR
// Exporta o manipulador de erros para que possa ser utilizado em outros módulos
module.exports = errorHandler;
