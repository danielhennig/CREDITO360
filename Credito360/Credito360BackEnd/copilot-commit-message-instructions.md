# Instruções para geração de mensagens de commit

Use estas instruções para criar mensagens de commit claras, organizadas e consistentes, com base na convenção **Conventional Commits**. Isso ajudará a manter o histórico do projeto Banco360 mais compreensível e rastreável.

## 📌 Estrutura da mensagem

```
<tipo>(escopo): descrição curta
```

- **tipo**: classifica a mudança. Ex: `feat`, `fix`, `refactor`, etc.
- **escopo**: módulo ou parte alterada. Ex: `conta`, `usuario`, `routes`, `docker`, `config`.
- **descrição curta**: descreva de forma objetiva o que foi feito (máx. 60 caracteres).

### 🔍 Tipos mais comuns

- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: apenas alterações na documentação
- `style`: mudanças de formatação, sem alteração de código
- `refactor`: refatorações que não alteram o comportamento
- `perf`: melhorias de desempenho
- `test`: adição ou ajuste de testes
- `chore`: tarefas auxiliares (scripts, dependências, configs)
- `ci`: mudanças em configurações de CI/CD (ex: GitHub Actions)
- `build`: mudanças em dependências, docker, ou processo de build

## ✅ Exemplos

```
feat(conta): adiciona criação automática com usuário
fix(usuario): impede cadastro com cpf duplicado
refactor(routes): move regras para controller
docs(readme): adiciona instruções do docker-compose
chore(seeds): popula base com 5 transações por conta
```

## 🧠 Dicas adicionais

- Divida os commits por contexto. Não misture `feat` e `fix`.
- Prefira múltiplos commits pequenos a um commit genérico e grande.
- Use marcadores no corpo para descrever múltiplas ações, se necessário.

### 💡 Exemplo com corpo detalhado:

```
feat(oferta): implementa score mínimo para oferta de crédito

- Adiciona campo scoreMinimo à model e migration de Oferta
- Valida score da conta antes de permitir oferta
- Atualiza seed com ofertas de teste
```

## 🌐 Idioma

Use o idioma **português** para manter consistência com o restante do repositório e facilitar o entendimento pela equipe.

---

Copilot, siga esse padrão para gerar mensagens de commit a partir das mudanças feitas.