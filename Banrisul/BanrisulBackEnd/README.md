🚀 BanrisulBackEnd – API Simulada para Open Finance
Este projeto simula uma API bancária do Banrisul, como parte de um ecossistema de Open Finance. Ele permite operações bancárias simuladas como criação de conta, autenticação, transações, geração de consentimento e recomendação de ofertas de crédito com base em score.

📌 Funcionalidades Principais
Criação de contas bancárias (/banrisul/contas)

Autenticação via número da conta e senha (/banrisul/login)

Depósito e saque simulados (/banrisul/transacoes)

Consulta de extrato por conta (/banrisul/transacoes/:numeroConta)

Criação e listagem de ofertas de crédito (/banrisul/ofertas)

Listagem de ofertas recomendadas por score (/banrisul/ofertas/recomendadas/:score)

Geração e validação de consentimento para Open Finance (/banrisul/open-finance/consentimento)

Acesso aos dados bancários com consentimento válido (/banrisul/open-finance/dados?numeroConta=...)

🛠️ Tecnologias Utilizadas
Node.js – Ambiente de execução JavaScript

Express.js – Framework para criação de APIs REST

Sequelize – ORM para modelagem e manipulação de dados com PostgreSQL

PostgreSQL – Banco de dados relacional

JWT – Autenticação com JSON Web Tokens

UUID – Geração de identificadores únicos universais

dotenv – Gerenciamento de variáveis de ambiente

bcrypt – Criptografia de senhas

cors – Middleware para habilitar CORS na API

📦 Principais Bibliotecas (package.json)
json
Copiar
Editar
"dependencies": {
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "pg": "^8.16.0",
  "pg-hstore": "^2.3.4",
  "sequelize": "^6.37.7",
  "uuid": "^11.1.0"
}
📁 Estrutura de Pastas
bash
Copiar
Editar
BanrisulBackEnd/
│
├── src/
│   ├── config/                # Configuração do Sequelize
│   ├── controllers/           # Lógica de controle das rotas
│   ├── middlewares/           # Autenticação, validação e segurança
│   ├── migrations/            # Migrações do banco
│   ├── models/                # Modelos Sequelize
│   ├── routes/                # Arquivos de rotas REST
│   ├── seeders/               # Dados simulados
│
├── .env                       # Variáveis de ambiente
├── app.js                    # Arquivo principal da aplicação
├── package.json              # Dependências do projeto
├── .sequelizerc              # Caminhos do Sequelize CLI

🔒 Segurança
A autenticação é feita por meio de JWT. O consentimento é validado para acesso a dados bancários via Open Finance, garantindo que apenas clientes autorizados possam visualizar suas informações.