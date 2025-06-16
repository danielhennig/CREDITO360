
# 🌐 Crédito360FrontEnd – Dashboard Open Finance & Marketplace de Crédito

Interface web do **Crédito360**, plataforma que agrega dados bancários de múltiplos bancos simulados
(Itaú, Sicredi, Banrisul, Mercado Pago) e recomenda ofertas de crédito personalizadas.

> **Stack:** React 18 · TypeScript · Vite · TailwindCSS · Radix UI · TanStack React Query

---

## ⚙️ Fluxo de Interação

```text
Usuário → Login/Cadastro → Token JWT salvo (localStorage)
       └─► Dashboard
            ├── Conectar Bancos      (chama /connect/:banco no backend)
            ├── Atualizar Score      (POST /atualizar-score)
            ├── Listar Ofertas       (GET /ofertas/recomendadas/:cpf)
            └── Extratos & Transações (GET /dados/:banco)
```

---

## ✨ Funcionalidades Principais

- **Landing Page** com apresentação do Crédito360  
- **Cadastro** e **Login** (JWT)  
- **Dashboard** consolidado:
  - Conectar / desconectar bancos (até 4 instituições)
  - Visualizar saldo e transações em tempo‑real
  - Forçar atualização de score
  - Listar ofertas de crédito recomendadas
- **Toasts** e **validadores** para feedback imediato de ações
- **Tema responsivo** (mobile‑first) com TailwindCSS + Radix UI

---

## 🛠️ Principais Tecnologias & Bibliotecas

| Categoria          | Pacotes chave                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| **UI**             | `react`, `react-dom`, `tailwindcss`, `lucide-react`, `@radix-ui/*`                                        |
| **Roteamento**     | `react-router-dom`                                                                                        |
| **Formulários**    | `react-hook-form`, `@hookform/resolvers`, `zod`                                                          |
| **Data‑Fetching**  | `@tanstack/react-query`                                                                                  |
| **Gráficos**       | `recharts`                                                                                               |
| **Utilitários**    | `class-variance-authority`, `tailwind-merge`, `sonner` (toasts)                                          |

---

## 📁 Estrutura de Pastas

```
Credito360FrontEnd/
├── public/                 # assets estáticos
├── src/
│   ├── components/         # componentes reutilizáveis (UI, layout, gráficos)
│   ├── contexts/           # contexto global (auth, banco conectado)
│   ├── hooks/              # hooks customizados
│   ├── lib/                # funções utilitárias
│   ├── pages/              # páginas: Landing, Dashboard, ConectarBancos, Ofertas...
│   └── services/           # chamadas REST para o backend (fetch/React Query)
├── tailwind.config.ts
├── vite.config.ts
└── index.html
```

---


## 🔌 Integração com Backend

| Ação no Frontend          | Método / Rota Backend                              |
| ------------------------- | -------------------------------------------------- |
| Login                     | `POST /login`                                      |
| Cadastro                  | `POST /register`                                   |
| Conectar Banco            | `POST /connect/:banco`                             |
| Obter Dados Bancários     | `GET /dados/:banco?numeroConta=...&senha=...`       |
| Atualizar Score           | `POST /atualizar-score`                            |
| Ofertas Recomendadas      | `GET /ofertas/recomendadas/:cpf`                   |

Tokens JWT são enviados no header `Authorization: Bearer <token>`.

---

