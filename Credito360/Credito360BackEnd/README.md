
# 💳 Crédito360BackEnd – API de Marketplace de Crédito via Open Finance

> **Status do projeto:** Em desenvolvimento ‑ v1.0.0  

O **Crédito360** é uma plataforma acadêmica que conecta usuários a múltiplos bancos simulados (Itaú, Sicredi, Banrisul, Mercado Pago) através do **Open Finance**.  
A API consolida dados bancários – obtidos apenas mediante **consentimento** – calcula um **score** com IA e devolve **ofertas de crédito personalizadas**.

---

## 📊 Fluxo de Dados

```text
┌──────────┐      Credenciais       ┌──────────────┐
│  Cliente ├───────────────────────►│ API do Banco │
└──────────┘                        └──────────────┘
     ▲               Token &              │
     │            Consentimento            │
     │                                     ▼
┌─────────────────────────────────────────────────┐
│               Crédito360BackEnd                │
│ ─────────────────────────────────────────────── │
│ 1. Valida consentimento                         │
│ 2. Coleta saldo, transações e ofertas           │
│ 3. Calcula score (TensorFlow.js)                │
│ 4. Armazena/responde dados em cache (opt.)      │
└─────────────────────────────────────────────────┘
     ▲                                     │
     └──────────── Ofertas & Score─────────┘
```

---

## ✨ Funcionalidades Principais

| Categoria           | Endpoints (prefixo `/api`)                                  | Descrição resumida                                   |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| **Autenticação**    | `POST /login`  •  `POST /register`                          | Login/cadastro de clientes (JWT)                     |
| **Conexão Bancária**| `POST /connect/:banco`                                      | Efetua login no banco escolhido e gera consentimento |
| **Dados Bancários** | `GET /dados/:banco`                                         | Retorna saldo, transações e ofertas                  |
| **Score**           | `POST /atualizar-score` <br> `GET /score/:cpf`              | Calcula e consulta score agregado                   |
| **Ofertas**         | `GET /ofertas/recomendadas/:cpf`                            | Lista ofertas adequadas ao score do cliente          |

---

## 🛠️ Tecnologias & Bibliotecas

| Camada            | Principais Pacotes                   |
| ----------------- | ------------------------------------ |
| **Core API**      | `express` · `cors` · `dotenv`        |
| **Segurança**     | `bcrypt` · `jsonwebtoken`            |
| **Banco de Dados**| `postgres` · `sequelize` · `pg-hstore`|
| **IA / Score**    | `@tensorflow/tfjs`                   |
| **HTTP Client**   | `axios`                              |

<details>
<summary>package.json (deps principais)</summary>

```json
{
  "@tensorflow/tfjs": "^4.22.0",
  "axios": "^1.9.0",
  "bcrypt": "^6.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "pg": "^8.16.0",
  "pg-hstore": "^2.3.4",
  "sequelize": "^6.37.7"
}
```
</details>

---

## 📂 Estrutura de Pastas

```
Credito360BackEnd/
├── .env                   # Variáveis de ambiente
├── package.json
├── src
│   ├── app.js             # Bootstrap do servidor Express
│   ├── config/            # Sequelize e helpers
│   ├── controllers/       # Lógica das rotas REST
│   ├── core/
│   │   ├── scoreAI.js     # Modelo TensorFlow p/ score
│   │   └── scoreCache.js  # LRU cache simples
│   ├── middlewares/       # Auth + validações
│   ├── migrations/        # Scripts de criação do DB
│   ├── models/            # Modelos Sequelize
│   ├── routes/            # Agrupamento de endpoints
│   └── services/
│       └── bancos/        # Integrações Itaú, Sicredi, etc.
└── ...
```

---

