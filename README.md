
📌 CRUD API – Node.js + Express + Firebase

API RESTful simples desenvolvida em Node.js com Express, utilizando o Firebase Firestore como banco de dados.

🚀 Tecnologias

Node.js

Express

Firebase Firestore

Dotenv para variáveis de ambiente



---

📂 Estrutura do Projeto

📦 crud-api-firebase
├── 📂 src
│   ├── 📂 routes
│   │   └── userRoutes.js
│   ├── 📂 controllers
│   │   └── userController.js
│   ├── 📂 config
│   │   └── firebase.js
│   ├── server.js
│   └── app.js
├── .env
├── package.json
└── README.md


---

⚙️ Instalação

# Clone o repositório
git clone https://github.com/seu-usuario/crud-api-firebase.git

# Entre na pasta
cd crud-api-firebase

# Instale as dependências
npm install

# Configure o arquivo .env
cp .env.example .env

# Inicie o servidor
npm run dev


---

🔑 Variáveis de Ambiente (.env)

PORT=3000
FIREBASE_PROJECT_ID=seu-projeto
FIREBASE_PRIVATE_KEY="sua-chave-privada"
FIREBASE_CLIENT_EMAIL=seu-email-firebase@projeto.iam.gserviceaccount.com

> ⚠️ Importante: nunca exponha suas credenciais públicas do Firebase em repositórios abertos.




---

📌 Rotas da API

➕ Criar Usuário

POST /api/users

Body JSON

{
  "name": "João Silva",
  "email": "joao@email.com"
}


---

📋 Listar Usuários

GET /api/users


---

🔎 Buscar Usuário por ID

GET /api/users/:id


---

✏️ Atualizar Usuário

PUT /api/users/:id

Body JSON

{
  "name": "João Atualizado"
}


---

❌ Deletar Usuário

DELETE /api/users/:id


---

📮 Exemplo de Requisição (via cURL)

curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"Maria","email":"maria@email.com"}'


---



