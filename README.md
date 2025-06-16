
# 🧠 Projeto Crédito360 – Open Finance com Análise Inteligente de Crédito

O **Crédito360** é um ecossistema de APIs e interfaces integradas que simula o funcionamento de um **Marketplace de Crédito baseado em Open Finance**.  
Permite que usuários conectem suas contas bancárias (Itaú, Sicredi, Banrisul, Mercado Pago), compartilhem dados via consentimento e recebam **ofertas de crédito personalizadas com base em score de IA**.

---

## 🔁 Visão Geral do Funcionamento

```
Usuário ↔ FrontEnd ↔ Crédito360BackEnd ↔ APIs Bancárias Simuladas
                                ↳ Coleta de dados bancários com consentimento
                                ↳ Cálculo de Score com TensorFlow.js
                                ↳ Recomendação de ofertas personalizadas
```

---

## 📦 Arquitetura do Projeto

```
CREDITO360/
├── docker/                        # Dockerfiles para backend e frontend
├── Credito360BackEnd/            # API central com IA e agregação de dados
├── Credito360FrontEnd/           # Interface React do usuário
├── Itau/ItauBackEnd              # Banco simulado Itaú
├── Sicredi/SicrediBackEnd        # Banco simulado Sicredi
├── Banrisul/BanrisulBackEnd      # Banco simulado Banrisul
├── MercadoPago/MercadoPagoBackEnd# Banco simulado Mercado Pago
```

---

## 📋 Tecnologias Utilizadas

- **Node.js + Express** – Backend REST das APIs bancárias e central
- **React + TypeScript + Vite** – Frontend moderno
- **Sequelize + PostgreSQL** – ORM e banco de dados relacional
- **TensorFlow.js** – Cálculo de score de crédito com IA
- **Docker** – Contêineres para toda a infraestrutura
- **JWT** – Autenticação segura

---

## ⚙️ Passo a Passo da Instalação com Docker

```bash
# 1. Clone o repositório
git clone https://github.com/danielhennig/CREDITO360.git
cd CREDITO360
npm install

# 2. Construa as imagens Docker
docker compose build

# 3. Suba todos os serviços (APIs + Frontends)
docker compose up -d

# 4. (Opcional mas recomendado) Resete todos os bancos com migrations + seeds
npm run reset-todos
```

---

## 🌐 Fluxo do Usuário

1. **Cadastro/Login** no sistema central
2. **Conexão com um ou mais bancos** via número da conta e senha
3. Geração de **consentimento** por banco
4. Coleta automática de **dados bancários**
5. **Cálculo do score de crédito**
6. **Recomendações de ofertas** com base no perfil financeiro

---

## 🔌 Endpoints Chave

| Componente          | Exemplo de Rota                                 |
| ------------------ | ----------------------------------------------- |
| API Central         | `POST /connect/itau`, `GET /score/:cpf`         |
| Bancos Simulados    | `POST /banrisul/transacoes`, `GET /banrisul/ofertas` |
| IA de Score         | `POST /atualizar-score`, `GET /ofertas/recomendadas/:cpf` |
| Frontend            | `/login`, `/connect-banks`, `/offers`, `/dashboard` |

---

## 🧪 Testes com Seeds 

- Acesse o frontend Credito360: http://localhost:3005
  `Crie uma conta, porem cpf deve ser 123.456.789-00`
  `Dados de conecxao de contas:`
  `Itau: Numero 111111 , Senha 123456`
  `Sicredi: Numero 222222 , Senha 123456`
  `Mercado Pago: Numero 333333 , Senha 123456`
  `Banrisul: Numero 444444 , Senha 123456`
  
- Acesse o frontend Banco360: http://localhost:3006
  `Plataforma para gerenciar e criar contas, fazer transacoes e criar ofertas de credito`
  
- A API central responde em: http://localhost:3000
- As APIs dos bancos simulados:
  - Itaú: http://localhost:3001
  - Sicredi: http://localhost:3002
  - Mercado Pago: http://localhost:3003
  - Banrisul: http://localhost:3004

---

## 📄 Licença

Projeto acadêmico sob licença MIT.  
Desenvolvido por [Daniel Hennig, Miguel, Guilherme](https://github.com/danielhennig) para fins educacionais.

