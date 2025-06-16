💻 BanrisulFrontEnd – Interface Web Simulada do Banco Banrisul (Open Finance)
Este projeto representa o frontend (interface do usuário) do sistema bancário simulado do Banrisul, projetado para integrar-se ao ecossistema Open Finance. Ele permite que o cliente gerencie sua conta, visualize extratos, conecte-se com o sistema Crédito360 e veja ofertas de crédito com base no score.

🧩 Funcionalidades
✅ Cadastro de nova conta bancária

🔐 Autenticação com número da conta e senha

📄 Consulta de extrato bancário

💸 Realização de transações (depósito e saque)

📊 Visualização de ofertas de crédito

📬 Gerenciamento de consentimentos Open Finance

⚙️ Integração com API BanrisulBackEnd

🛠️ Tecnologias Utilizadas
React.js (v18) – Biblioteca principal para construção da UI

TypeScript – Tipagem estática para maior segurança no desenvolvimento

Vite – Ferramenta moderna para build e desenvolvimento

TailwindCSS – Framework de utilitários CSS para estilização rápida

Radix UI – Componentes acessíveis e estilizados

React Router DOM – Gerenciamento de rotas da aplicação

Zod + React Hook Form – Validação de formulários

TanStack React Query – Cache e gerenciamento de requisições

Axios – Cliente HTTP para comunicação com backend

📁 Estrutura de Pastas
csharp
Copiar
Editar
BanrisulFrontEnd/
│
├── public/                  # Arquivos públicos (favicon, robots.txt etc.)
├── src/
│   ├── components/          # Componentes reutilizáveis (UI, Layout, Loading)
│   ├── contexts/            # Contexto global do Banrisul
│   ├── hooks/               # Custom hooks (ex: mobile, toast)
│   ├── lib/                 # Funções auxiliares
│   ├── pages/               # Páginas da aplicação:
│   │   ├── Index.tsx              # Tela inicial
│   │   ├── CadastroConta.tsx      # Cadastro de nova conta
│   │   ├── Consentimentos.tsx     # Gerenciar consentimento
│   │   ├── Extrato.tsx            # Visualizar extrato bancário
│   │   ├── ListagemContas.tsx    # Lista de contas
│   │   ├── OfertasCredito.tsx    # Ofertas recomendadas
│   │   └── Transacoes.tsx        # Depositar / Sacar
│   └── services/           # Integração com API (banrisulApi.ts)
├── index.html              # Página principal HTML
├── tailwind.config.ts      # Configuração do TailwindCSS
├── vite.config.ts          # Configuração do Vite
📦 Dependências Principais
Algumas bibliotecas utilizadas:

react, react-dom, react-router-dom

tailwindcss, clsx, tailwind-merge, tailwindcss-animate

@radix-ui/* – Acessibilidade e interatividade visual

axios – Requisições HTTP

zod e react-hook-form – Validação e controle de formulários

@tanstack/react-query – Cache inteligente de requisições


🔄 Integração com API
A comunicação com o backend BanrisulBackEnd é feita via chamadas HTTP utilizando axios, com base nos seguintes endpoints:

POST /banrisul/contas – Criar conta

POST /banrisul/login – Autenticação

GET /banrisul/transacoes/:numeroConta – Extrato

POST /banrisul/transacoes – Transação (depósito/saque)

GET /banrisul/ofertas/recomendadas/:score – Ofertas de crédito

POST /banrisul/open-finance/consentimento – Gerar consentimento

GET /banrisul/open-finance/dados – Dados bancários com consentimento