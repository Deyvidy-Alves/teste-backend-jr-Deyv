const request = require('supertest');
const app = require('../src/app');

describe('API de Produtos', () => {
    let productId; // Variável para armazenar o ID do produto criado

    // Cria um produto antes de executar os outros testes
    beforeAll(async () => {
        const response = await request(app)
            .post('/api/products')
            .send({
                nome: 'Produto Teste',
                descricao: 'Descrição do produto teste',
                preco: 20.0,
                quantidade: 10
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        productId = response.body.id; // Armazena o ID do produto criado
        console.log('Produto criado com ID:', productId); // Adicionei esta linha
    });

    it('deve criar um novo produto (teste explícito)', async () => {
        const novoProduto = { nome: "Café", preco: 12.50, quantidade: 100 };
        const res = await request(app).post('/api/products').send(novoProduto);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
    });


    it('deve listar todos os produtos', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('deve obter um produto pelo ID', async () => {
        const response = await request(app).get(`/api/products/${productId}`);
        console.log('Resposta do produto:', response.body); // Adicionei esta linha
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('nome');
    });

    it('deve atualizar um produto', async () => {
        const response = await request(app)
            .put(`/api/products/${productId}`)
            .send({
                nome: 'Produto Atualizado',
                preco: 25.0,
                quantidade: 15
            });
        console.log('Resposta da atualização:', response.body); // Adicionei esta linha
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('nome', 'Produto Atualizado');
    });

    it('deve deletar um produto', async () => {
        const response = await request(app).delete(`/api/products/${productId}`);
        expect(response.status).toBe(204);
    });
});
