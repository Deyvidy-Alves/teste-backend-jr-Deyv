API para gerenciamento de estoque com Node.js e Firebase Firestore

📌 Funcionalidades

CRUD completo para produtos
Validação automática de dados
Integração com Firebase
Estrutura organizada em camadas

🛠️ Tecnologias
Node.js
Express
Firebase Firestore
Jest (para testes)
⚙️ Configuração

Pré-requisitos

Node.js 16+
Conta Firebase

Instalação

git clone [seu-repo]
cd projeto-nodejs
npm install
cp .env.example .env
Configurar Firebase

Baixe o arquivo firebase-config.json do console Firebase
Coloque na pasta src/config/
Rodar o projeto

Copy code
npm start          # Produção
npm run dev        # Desenvolvimento
npm test           # Testes

🚀 Endpoints

GET    /api/products       - Lista todos os produtos
POST   /api/products       - Cria novo produto
GET    /api/products/:id   - Obtém produto por ID
PUT    /api/products/:id   - Atualiza produto
DELETE /api/products/:id   - Remove produto

📦 Estrutura do Código


src/
├── controllers/  # Lógica das rotas
├── routes/       # Definição de endpoints
├── services/     # Regras de negócio
├── models/       # Interação com Firestore
└── middlewares/  # Validações

🛑 Observações de Segurança
Mantenha firebase-config.json fora do controle de versão
Proteja os endpoints com autenticação em produção