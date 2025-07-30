const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de segurança e configuração
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rotas
app.use('/api', productRoutes);
app.use(errorHandler);

// Exporte o app para testes
module.exports = app;

// Inicie o servidor apenas se não estiver em um ambiente de teste
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
