# Graph Report - CREDITO360  (2026-10-08)

## Corpus Check
- 332 files · ~55,836 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: (none) 8, .css 4, .lockb 2)

## Summary
- 2096 nodes · 3688 edges · 167 communities (98 shown, 69 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 64 edges (avg confidence: 0.85)
- Token cost: 208,264 input · 0 output

## Community Hubs (Navigation)
- Banrisul Frontend Páginas
- Credito360 Frontend Páginas
- Banrisul Frontend Pacotes
- Credito360 Frontend Pacotes
- Fluxo Open Finance (Docs)
- Credito360 Score e Bancos
- Credito360 UI Menus/Tabelas
- Banrisul Frontend Dependências
- Credito360 Frontend Dependências
- Banrisul UI Menus/Avatar
- Arquitetura e Docker Compose
- Banrisul UI Sidebar
- Credito360 UI Sidebar
- Banrisul Backend Pacotes
- Itaú Backend Pacotes
- MercadoPago Backend Pacotes
- Sicredi Backend Pacotes
- Credito360 Toast/Notificações
- Credito360 Backend Rotas Express
- Banrisul UI Primitivos Radix
- Formulários UI Compartilhados
- Credito360 UI Primitivos Radix
- Scripts Raiz npm-run-all
- Sicredi Consentimento e Contas
- Banrisul UI Diálogos/Paginação
- Credito360 UI Diálogos/Paginação
- Componentes de Gráfico UI
- Banrisul tsconfig App
- Credito360 tsconfig App
- MercadoPago Consentimento e Contas
- Banrisul Frontend DevDeps
- Credito360 Backend Pacote
- Credito360 Frontend DevDeps
- Banrisul shadcn components.json
- Credito360 shadcn components.json
- Credito360 UI Badges/Toggles
- Banrisul Modelos e Transações
- Banrisul tsconfig Node
- Credito360 tsconfig Node
- Itaú Modelos e Transações
- Servidor de Score IA
- Sicredi Ofertas
- Banrisul UI Carousel
- Sicredi Rotas Auth/Consentimento
- Banrisul UI Command
- Banrisul tsconfig Base
- Credito360 UI Command
- Credito360 tsconfig Base
- MercadoPago Transações
- Banrisul Autenticação
- Banrisul Consentimentos
- Banrisul Contas
- Banrisul Rotas Ofertas
- Seeds de Contas (Banrisul/MP)
- Credito360 Backend Dependências
- Credito360 UI Sheet
- Itaú Autenticação
- Itaú Consentimentos
- Itaú Contas
- Itaú Rotas Ofertas
- MercadoPago Autenticação
- MercadoPago Contas
- Sicredi Autenticação
- Sicredi Contas
- Banrisul App Express
- Itaú App Express
- MercadoPago App Express
- Sicredi App Express
- Seeds de Ofertas (Banrisul/MP)
- Banrisul UI Breadcrumb
- Banrisul UI Drawer
- Banrisul UI Sheet
- Banrisul UI Toggles
- Credito360 UI NavigationMenu
- Credito360 UI Select
- MercadoPago Ofertas
- Banrisul Ofertas
- Banrisul JWT Open Finance
- Banrisul UI NavigationMenu
- Credito360 UI Breadcrumb
- Credito360 UI Drawer
- Itaú Ofertas
- Banrisul Rotas Transações
- Credito360 Models Sequelize
- Itaú JWT Open Finance
- Itaú Rotas Transações
- MercadoPago JWT Open Finance
- MercadoPago Rotas Ofertas
- Sicredi Rotas Transações
- Banrisul Frontend Scripts
- Banrisul UI InputOTP
- Credito360 Backend Scripts
- Credito360 Autenticação
- Credito360 Clientes
- Credito360 Frontend Scripts
- MercadoPago Rotas Consentimento
- Banrisul UI Alert
- Banrisul UI Tabs
- Credito360 UI Avatar
- Credito360 UI InputOTP
- Itaú Seed Contas
- Sicredi Seed Contas
- Banrisul Seed Transações
- Banrisul UI Resizable
- Banrisul UI ScrollArea
- Itaú Seed Ofertas
- Itaú Seed Transações
- MercadoPago Seed Transações
- Sicredi Seed Ofertas
- Sicredi Seed Transações
- Config graphify
- Credito360 Backend DevDeps
- Banrisul Placeholder SVG
- Credito360 Placeholder SVG

## God Nodes (most connected - your core abstractions)
1. `cn()` - 226 edges
2. `cn()` - 226 edges
3. `Button` - 24 edges
4. `Button` - 22 edges
5. `OfertasCredito()` - 21 edges
6. `Credito360BackEnd API (Open Finance Credit Marketplace)` - 21 edges
7. `Consentimentos()` - 20 edges
8. `useToast()` - 19 edges
9. `ListagemContas()` - 19 edges
10. `compilerOptions` - 19 edges

## Surprising Connections (you probably didn't know these)
- `/Itau/ofertas/recomendadas/:score` --semantically_similar_to--> `GET /api/ofertas/recomendadas/:cpf`  [INFERRED] [semantically similar]
  Itau/ItauBackEnd/README.md → Credito360/Credito360BackEnd/README.md
- `/MercadoPago/ofertas/recomendadas/:score` --semantically_similar_to--> `GET /api/ofertas/recomendadas/:cpf`  [INFERRED] [semantically similar]
  MercadoPago/MercadoPagoBackEnd/README.md → Credito360/Credito360BackEnd/README.md
- `/Sicredi/ofertas/recomendadas/:score` --semantically_similar_to--> `GET /api/ofertas/recomendadas/:cpf`  [INFERRED] [semantically similar]
  Sicredi/SicrediBackEnd/README.md → Credito360/Credito360BackEnd/README.md
- `/banrisul/ofertas and recomendadas/:score endpoints` --semantically_similar_to--> `Personalized Credit Offer Recommendation`  [INFERRED] [semantically similar]
  Banrisul/BanrisulBackEnd/README.md → README.md
- `reset-todos (migrations + seeds for all banks)` --semantically_similar_to--> `Banrisul Sequelize CLI migrate/seed commands`  [INFERRED] [semantically similar]
  comandos.txt → Banrisul/BanrisulBackEnd/src/config/comandos.txt

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Simulated Open Finance Bank Backends** — readme_itaubackend, readme_sicredibackend, readme_mercadopagobackend, banrisul_banrisulbackend_readme_banrisulbackend [EXTRACTED 1.00]
- **Consent -> Data Collection -> AI Score -> Offer Recommendation pipeline** — readme_consent_flow, readme_ai_credit_score, readme_personalized_offers, readme_user_flow, banrisul_banrisulbackend_readme_open_finance_consent [INFERRED 0.85]
- **BanrisulFrontEnd to BanrisulBackEnd REST integration** — banrisul_banrisulfrontend_readme_api_integration, banrisul_banrisulbackend_readme_contas_endpoint, banrisul_banrisulbackend_readme_transacoes_endpoint, banrisul_banrisulbackend_readme_ofertas_endpoint, banrisul_banrisulbackend_readme_open_finance_consent [EXTRACTED 1.00]
- **Open Finance consent + data retrieval flow across simulated banks** — credito360_credito360backend_readme_post_connect_banco, credito360_credito360backend_readme_get_dados_banco, credito360_credito360backend_readme_consentimento, itau_itaubackend_readme_open_finance_consentimento, mercadopago_mercadopagobackend_readme_open_finance_consentimento, sicredi_sicredibackend_readme_open_finance_consentimento, itau_itaubackend_readme_open_finance_dados, mercadopago_mercadopagobackend_readme_open_finance_dados, sicredi_sicredibackend_readme_open_finance_dados [INFERRED 0.85]
- **Credit score computation and offer recommendation pipeline** — credito360_credito360backend_readme_post_atualizar_score, credito360_credito360backend_readme_scoreai, credito360_credito360backend_readme_scorecache, credito360_credito360backend_readme_get_score_cpf, credito360_credito360backend_readme_get_ofertas_recomendadas_cpf [INFERRED 0.85]
- **Simulated bank APIs implementing the same Open Finance contract** — itau_itaubackend_readme_itaubackend, mercadopago_mercadopagobackend_readme_mercadopagobackend, sicredi_sicredibackend_readme_sicredibackend, credito360_credito360backend_readme_open_finance [INFERRED 0.85]

## Communities (167 total, 69 thin omitted)

### Community 0 - "Banrisul Frontend Páginas"
Cohesion: 0.06
Nodes (87): App(), queryClient, Layout(), LayoutProps, Loading(), LoadingProps, Badge(), BadgeProps (+79 more)

### Community 1 - "Credito360 Frontend Páginas"
Cohesion: 0.08
Nodes (51): Toaster(), ToasterProps, App(), queryClient, Navigation(), ProtectedRoute(), ProtectedRouteProps, Button (+43 more)

### Community 2 - "Banrisul Frontend Pacotes"
Cohesion: 0.03
Nodes (72): autoprefixer, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, eslint (+64 more)

### Community 3 - "Credito360 Frontend Pacotes"
Cohesion: 0.03
Nodes (71): autoprefixer, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, eslint, @eslint/js (+63 more)

### Community 4 - "Fluxo Open Finance (Docs)"
Cohesion: 0.06
Nodes (55): Banco360 (project name referenced in commit guide), Banrisul (simulated bank), Credito360BackEnd API (Open Finance Credit Marketplace), GET /api/dados/:banco, GET /api/ofertas/recomendadas/:cpf, GET /api/score/:cpf, JWT Authentication (bcrypt + jsonwebtoken), Open Finance (+47 more)

### Community 5 - "Credito360 Score e Bancos"
Cohesion: 0.05
Nodes (35): atualizarScore(), banrisulService, conexoesCliente, itauService, mercadoPagoService, normalizarNomeBanco(), { scoreTransactions }, servicos (+27 more)

### Community 6 - "Credito360 UI Menus/Tabelas"
Cohesion: 0.07
Nodes (48): AccordionContent, AccordionItem, AccordionTrigger, CardDescription, CardFooter, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem (+40 more)

### Community 7 - "Banrisul Frontend Dependências"
Cohesion: 0.04
Nodes (51): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+43 more)

### Community 8 - "Credito360 Frontend Dependências"
Cohesion: 0.04
Nodes (50): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers, input-otp (+42 more)

### Community 9 - "Banrisul UI Menus/Avatar"
Cohesion: 0.07
Nodes (42): Avatar, AvatarFallback, AvatarImage, CardFooter, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel (+34 more)

### Community 10 - "Arquitetura e Docker Compose"
Cohesion: 0.07
Nodes (41): BanrisulBackEnd Simulated Open Finance API, /banrisul/contas and /banrisul/login endpoints, /banrisul/ofertas and recomendadas/:score endpoints, /banrisul/open-finance consentimento and dados, /banrisul/transacoes endpoints, Banrisul Sequelize CLI migrate/seed commands, Banrisul360 index.html (Lovable generated), robots.txt (allow all crawlers) (+33 more)

### Community 11 - "Banrisul UI Sidebar"
Cohesion: 0.06
Nodes (30): Separator, Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent (+22 more)

### Community 12 - "Credito360 UI Sidebar"
Cohesion: 0.07
Nodes (29): Separator, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel (+21 more)

### Community 13 - "Banrisul Backend Pacotes"
Cohesion: 0.06
Nodes (32): dependencies, bcrypt, cors, dotenv, express, jsonwebtoken, pg, pg-hstore (+24 more)

### Community 14 - "Itaú Backend Pacotes"
Cohesion: 0.06
Nodes (32): dependencies, bcrypt, cors, dotenv, express, jsonwebtoken, pg, pg-hstore (+24 more)

### Community 15 - "MercadoPago Backend Pacotes"
Cohesion: 0.06
Nodes (32): dependencies, bcrypt, cors, dotenv, express, jsonwebtoken, pg, pg-hstore (+24 more)

### Community 16 - "Sicredi Backend Pacotes"
Cohesion: 0.06
Nodes (32): dependencies, bcrypt, cors, dotenv, express, jsonwebtoken, pg, pg-hstore (+24 more)

### Community 17 - "Credito360 Toast/Notificações"
Cohesion: 0.13
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 18 - "Credito360 Backend Rotas Express"
Cohesion: 0.09
Nodes (19): app, authRoutes, clienteRoutes, conexaoBancariaRoutes, cors, express, scoreRoutes, jwt (+11 more)

### Community 19 - "Banrisul UI Primitivos Radix"
Cohesion: 0.08
Nodes (9): AccordionContent, AccordionItem, AccordionTrigger, Checkbox, HoverCardContent, PopoverContent, Progress, Slider (+1 more)

### Community 20 - "Formulários UI Compartilhados"
Cohesion: 0.10
Nodes (20): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+12 more)

### Community 21 - "Credito360 UI Primitivos Radix"
Cohesion: 0.08
Nodes (14): Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup, RadioGroupItem, ResizableHandle(), ResizablePanelGroup() (+6 more)

### Community 22 - "Scripts Raiz npm-run-all"
Cohesion: 0.08
Nodes (24): devDependencies, npm-run-all, open, open, name, private, scripts, reset:banrisul (+16 more)

### Community 23 - "Sicredi Consentimento e Contas"
Cohesion: 0.11
Nodes (14): { Consentimento, Conta }, { v4: uuidv4 }, { Conta, Transacao }, { Conta, Transacao }, { v4: uuidv4 }, { Consentimento }, { Op }, { Conta } (+6 more)

### Community 24 - "Banrisul UI Diálogos/Paginação"
Cohesion: 0.11
Nodes (20): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+12 more)

### Community 25 - "Credito360 UI Diálogos/Paginação"
Cohesion: 0.11
Nodes (20): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+12 more)

### Community 26 - "Componentes de Gráfico UI"
Cohesion: 0.13
Nodes (20): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent, getPayloadConfigFromPayload() (+12 more)

### Community 27 - "Banrisul tsconfig App"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+12 more)

### Community 28 - "Credito360 tsconfig App"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+12 more)

### Community 29 - "MercadoPago Consentimento e Contas"
Cohesion: 0.14
Nodes (11): { Consentimento, Conta }, { v4: uuidv4 }, { Conta, Transacao }, { Consentimento }, { Op }, { Conta }, Consentimento, Conta (+3 more)

### Community 30 - "Banrisul Frontend DevDeps"
Cohesion: 0.11
Nodes (19): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, lovable-tagger (+11 more)

### Community 31 - "Credito360 Backend Pacote"
Cohesion: 0.11
Nodes (18): author, description, axios, bcrypt, cors, dotenv, express, jsonwebtoken (+10 more)

### Community 32 - "Credito360 Frontend DevDeps"
Cohesion: 0.11
Nodes (19): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, lovable-tagger (+11 more)

### Community 33 - "Banrisul shadcn components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 34 - "Credito360 shadcn components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 35 - "Credito360 UI Badges/Toggles"
Cohesion: 0.16
Nodes (12): Alert, AlertDescription, AlertTitle, alertVariants, Badge(), BadgeProps, badgeVariants, ToggleGroup (+4 more)

### Community 36 - "Banrisul Modelos e Transações"
Cohesion: 0.17
Nodes (9): { Conta, Transacao }, { Conta, Transacao }, { v4: uuidv4 }, { Conta }, Conta, Oferta, sequelize, { Sequelize, DataTypes } (+1 more)

### Community 37 - "Banrisul tsconfig Node"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 38 - "Credito360 tsconfig Node"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 39 - "Itaú Modelos e Transações"
Cohesion: 0.17
Nodes (9): { Conta, Transacao }, { Conta, Transacao }, { v4: uuidv4 }, { Conta }, Conta, Oferta, sequelize, { Sequelize, DataTypes } (+1 more)

### Community 40 - "Servidor de Score IA"
Cohesion: 0.25
Nodes (14): computeFeaturesForClient(), consolidateFeatures(), cors, daysBetween(), express, generateSyntheticScore(), generateSyntheticTransactions(), normalizeFeaturesRaw() (+6 more)

### Community 41 - "Sicredi Ofertas"
Cohesion: 0.13
Nodes (8): { Oferta }, { v4: uuidv4 }, authMiddleware, express, ofertaController, router, validarCampos, validarConsentimento

### Community 42 - "Banrisul UI Carousel"
Cohesion: 0.19
Nodes (13): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+5 more)

### Community 43 - "Sicredi Rotas Auth/Consentimento"
Cohesion: 0.15
Nodes (10): jwt, authMiddleware, controller, express, router, validarCampos, authMiddleware, controller (+2 more)

### Community 44 - "Banrisul UI Command"
Cohesion: 0.18
Nodes (10): Command, CommandDialog(), CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList (+2 more)

### Community 45 - "Banrisul tsconfig Base"
Cohesion: 0.17
Nodes (11): compilerOptions, allowJs, baseUrl, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck (+3 more)

### Community 46 - "Credito360 UI Command"
Cohesion: 0.18
Nodes (10): Command, CommandDialog(), CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList (+2 more)

### Community 47 - "Credito360 tsconfig Base"
Cohesion: 0.17
Nodes (11): compilerOptions, allowJs, baseUrl, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck (+3 more)

### Community 48 - "MercadoPago Transações"
Cohesion: 0.17
Nodes (8): { Conta, Transacao }, { v4: uuidv4 }, authMiddleware, express, router, transacaoController, validarCampos, verificarNumeroContaExiste

### Community 49 - "Banrisul Autenticação"
Cohesion: 0.18
Nodes (7): bcrypt, { Conta }, jwt, authController, express, router, validarCampos

### Community 50 - "Banrisul Consentimentos"
Cohesion: 0.18
Nodes (7): { Consentimento, Conta }, { v4: uuidv4 }, authMiddleware, controller, express, router, validarCampos

### Community 51 - "Banrisul Contas"
Cohesion: 0.20
Nodes (8): bcrypt, { Conta }, criarConta(), gerarNumeroConta(), { v4: uuidv4 }, contaController, express, router

### Community 52 - "Banrisul Rotas Ofertas"
Cohesion: 0.18
Nodes (9): { Consentimento }, { Op }, Consentimento, authMiddleware, express, ofertaController, router, validarCampos (+1 more)

### Community 53 - "Seeds de Contas (Banrisul/MP)"
Cohesion: 0.18
Nodes (4): bcrypt, { v4: uuidv4 }, bcrypt, { v4: uuidv4 }

### Community 54 - "Credito360 Backend Dependências"
Cohesion: 0.18
Nodes (11): dependencies, axios, bcrypt, cors, dotenv, express, jsonwebtoken, pg (+3 more)

### Community 55 - "Credito360 UI Sheet"
Cohesion: 0.22
Nodes (9): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants (+1 more)

### Community 56 - "Itaú Autenticação"
Cohesion: 0.18
Nodes (7): bcrypt, { Conta }, jwt, authController, express, router, validarCampos

### Community 57 - "Itaú Consentimentos"
Cohesion: 0.18
Nodes (7): { Consentimento, Conta }, { v4: uuidv4 }, authMiddleware, controller, express, router, validarCampos

### Community 58 - "Itaú Contas"
Cohesion: 0.20
Nodes (8): bcrypt, { Conta }, criarConta(), gerarNumeroConta(), { v4: uuidv4 }, contaController, express, router

### Community 59 - "Itaú Rotas Ofertas"
Cohesion: 0.18
Nodes (9): { Consentimento }, { Op }, Consentimento, authMiddleware, express, ofertaController, router, validarCampos (+1 more)

### Community 60 - "MercadoPago Autenticação"
Cohesion: 0.18
Nodes (7): bcrypt, { Conta }, jwt, authController, express, router, validarCampos

### Community 61 - "MercadoPago Contas"
Cohesion: 0.20
Nodes (8): bcrypt, { Conta }, criarConta(), gerarNumeroConta(), { v4: uuidv4 }, contaController, express, router

### Community 62 - "Sicredi Autenticação"
Cohesion: 0.18
Nodes (7): bcrypt, { Conta }, jwt, authController, express, router, validarCampos

### Community 63 - "Sicredi Contas"
Cohesion: 0.20
Nodes (8): bcrypt, { Conta }, criarConta(), gerarNumeroConta(), { v4: uuidv4 }, contaController, express, router

### Community 64 - "Banrisul App Express"
Cohesion: 0.20
Nodes (9): app, authRoutes, consentimentoRoutes, contaRoutes, cors, express, ofertaRoutes, openFinanceRoutes (+1 more)

### Community 65 - "Itaú App Express"
Cohesion: 0.20
Nodes (9): app, authRoutes, consentimentoRoutes, contaRoutes, cors, express, ofertaRoutes, openFinanceRoutes (+1 more)

### Community 66 - "MercadoPago App Express"
Cohesion: 0.20
Nodes (9): app, authRoutes, consentimentoRoutes, contaRoutes, cors, express, ofertaRoutes, openFinanceRoutes (+1 more)

### Community 67 - "Sicredi App Express"
Cohesion: 0.20
Nodes (9): app, authRoutes, consentimentoRoutes, contaRoutes, cors, express, ofertaRoutes, openFinanceRoutes (+1 more)

### Community 69 - "Banrisul UI Breadcrumb"
Cohesion: 0.22
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 70 - "Banrisul UI Drawer"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 71 - "Banrisul UI Sheet"
Cohesion: 0.28
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 72 - "Banrisul UI Toggles"
Cohesion: 0.31
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 73 - "Credito360 UI NavigationMenu"
Cohesion: 0.28
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 74 - "Credito360 UI Select"
Cohesion: 0.28
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 75 - "MercadoPago Ofertas"
Cohesion: 0.22
Nodes (3): { Oferta }, { v4: uuidv4 }, Oferta

### Community 77 - "Banrisul JWT Open Finance"
Cohesion: 0.25
Nodes (5): jwt, authMiddleware, controller, express, router

### Community 78 - "Banrisul UI NavigationMenu"
Cohesion: 0.32
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 79 - "Credito360 UI Breadcrumb"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 80 - "Credito360 UI Drawer"
Cohesion: 0.29
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 82 - "Banrisul Rotas Transações"
Cohesion: 0.29
Nodes (6): authMiddleware, express, router, transacaoController, validarCampos, verificarNumeroContaExiste

### Community 84 - "Credito360 Models Sequelize"
Cohesion: 0.29
Nodes (5): basename, db, fs, path, Sequelize

### Community 85 - "Itaú JWT Open Finance"
Cohesion: 0.29
Nodes (5): jwt, authMiddleware, controller, express, router

### Community 86 - "Itaú Rotas Transações"
Cohesion: 0.29
Nodes (6): authMiddleware, express, router, transacaoController, validarCampos, verificarNumeroContaExiste

### Community 87 - "MercadoPago JWT Open Finance"
Cohesion: 0.29
Nodes (5): jwt, authMiddleware, controller, express, router

### Community 88 - "MercadoPago Rotas Ofertas"
Cohesion: 0.29
Nodes (6): authMiddleware, express, ofertaController, router, validarCampos, validarConsentimento

### Community 89 - "Sicredi Rotas Transações"
Cohesion: 0.29
Nodes (6): authMiddleware, express, router, transacaoController, validarCampos, verificarNumeroContaExiste

### Community 90 - "Banrisul Frontend Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, build:dev, dev, lint, preview

### Community 91 - "Banrisul UI InputOTP"
Cohesion: 0.33
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 93 - "Credito360 Backend Scripts"
Cohesion: 0.33
Nodes (6): scripts, dev, migrate, seed, serve, start

### Community 94 - "Credito360 Autenticação"
Cohesion: 0.33
Nodes (3): bcrypt, { Cliente }, jwt

### Community 95 - "Credito360 Clientes"
Cohesion: 0.33
Nodes (3): bcrypt, { Cliente }, { v4: uuidv4 }

### Community 96 - "Credito360 Frontend Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, build:dev, dev, lint, preview

### Community 97 - "MercadoPago Rotas Consentimento"
Cohesion: 0.33
Nodes (5): authMiddleware, controller, express, router, validarCampos

### Community 98 - "Banrisul UI Alert"
Cohesion: 0.50
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 99 - "Banrisul UI Tabs"
Cohesion: 0.40
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 100 - "Credito360 UI Avatar"
Cohesion: 0.40
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 101 - "Credito360 UI InputOTP"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 117 - "Credito360 Backend DevDeps"
Cohesion: 0.67
Nodes (3): devDependencies, nodemon, sequelize-cli

## Ambiguous Edges - Review These
- `Credito360BackEnd API (Open Finance Credit Marketplace)` → `Banco360 (project name referenced in commit guide)`  [AMBIGUOUS]
  Credito360/Credito360BackEnd/copilot-commit-message-instructions.md · relation: conceptually_related_to

## Knowledge Gaps
- **987 isolated node(s):** `express`, `cors`, `app`, `contaRoutes`, `transacaoRoutes` (+982 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1151 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **69 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Credito360BackEnd API (Open Finance Credit Marketplace)` and `Banco360 (project name referenced in commit guide)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `cn()` connect `Banrisul UI Menus/Avatar` to `Banrisul Frontend Páginas`, `Banrisul UI Alert`, `Banrisul UI Tabs`, `Banrisul UI Breadcrumb`, `Banrisul UI Drawer`, `Banrisul UI Sheet`, `Banrisul UI Toggles`, `Banrisul UI Resizable`, `Banrisul UI Carousel`, `Banrisul UI ScrollArea`, `Banrisul UI Command`, `Banrisul UI Sidebar`, `Banrisul UI NavigationMenu`, `Banrisul UI Primitivos Radix`, `Formulários UI Compartilhados`, `Banrisul UI Diálogos/Paginação`, `Componentes de Gráfico UI`, `Banrisul UI InputOTP`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `express`, `cors`, `app` to the rest of the system?**
  _987 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Banrisul Frontend Páginas` be split into smaller, more focused modules?**
  _Cohesion score 0.059008654602675056 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Credito360 UI Menus/Tabelas` to `Credito360 Frontend Páginas`, `Credito360 UI Badges/Toggles`, `Credito360 UI Avatar`, `Credito360 UI InputOTP`, `Credito360 UI NavigationMenu`, `Credito360 UI Select`, `Credito360 UI Sidebar`, `Credito360 UI Command`, `Credito360 UI Breadcrumb`, `Credito360 UI Drawer`, `Credito360 Toast/Notificações`, `Formulários UI Compartilhados`, `Credito360 UI Primitivos Radix`, `Credito360 UI Sheet`, `Credito360 UI Diálogos/Paginação`, `Componentes de Gráfico UI`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `Credito360 Frontend Páginas` be split into smaller, more focused modules?**
  _Cohesion score 0.08449367088607596 - nodes in this community are weakly interconnected._
- **Why does `@tensorflow/tfjs` connect `Servidor de Score IA` to `Credito360 Backend Pacote`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._