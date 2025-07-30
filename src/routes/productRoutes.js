const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { validateProduct } = require('../middlewares/validation'); // Importa o middleware de validação

// Defina suas rotas aqui
router.get('/products', ProductController.getAll); 
router.post('/products', validateProduct, ProductController.create); 
router.get('/products/:id', ProductController.getById);
router.put('/products/:id', validateProduct, ProductController.update);
router.delete('/products/:id', ProductController.delete);

module.exports = router;
