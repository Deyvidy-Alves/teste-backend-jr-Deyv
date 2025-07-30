// src/config/database.js

/**
 * MÓDULO DE CONFIGURAÇÃO DO BANCO DE DADOS
 * 
 * Este módulo configura a conexão com o Firestore usando o Firebase Admin SDK.
 * Ele importa as credenciais necessárias e inicializa a aplicação Firebase.
 */

const admin = require('firebase-admin'); // Importa o SDK do Firebase Admin
const path = require('path'); // Módulo para manipulação de caminhos de arquivos

// 1. IMPORTAÇÃO DO ARQUIVO DE CREDENCIAIS
// O arquivo 'firebase-config.json' contém as credenciais necessárias para autenticar
// a aplicação com o Firebase. O caminho é ajustado para garantir que o arquivo seja
// encontrado corretamente, independentemente do diretório atual.
const serviceAccount = require(path.join(__dirname, 'firebase-config.json')); // Ajuste o caminho conforme necessário

// 2. INICIALIZAÇÃO DO FIREBASE
// A função initializeApp é chamada para configurar a aplicação Firebase com as credenciais
// e a URL do banco de dados. Isso permite que a aplicação interaja com o Firestore.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Credenciais de autenticação
  databaseURL: "https://projetonodejs-2b3ec.firebaseio.com" // URL do seu projeto Firebase
});

// 3. REFERÊNCIA AO FIRESTORE
// A variável 'db' armazena a referência à instância do Firestore, que será usada
// para realizar operações de leitura e escrita no banco de dados.
const db = admin.firestore();

// 4. EXPORTAÇÃO DA INSTÂNCIA DO FIRESTORE
// O módulo exporta a instância do Firestore para que possa ser utilizada em outros
// módulos da aplicação, como modelos e serviços.
module.exports = db;
