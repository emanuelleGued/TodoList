# TodoMaster - Angular

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com Angular e Spring Boot.

## 🚀 Tecnologias

- **Angular 18** - Framework web
- **TypeScript** - Linguagem de programação
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Ícones
- **RxJS** - Programação reativa
- **Spring Boot** - Backend API

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Java 17+ (para o backend)

## 🔧 Instalação

1. Clone o repositório e navegue até a pasta do projeto:

```bash
cd todo-angular
```

2. Instale as dependências:

```bash
npm install
```

## 🏃 Executando a aplicação

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200/`

### Build de produção

Para criar uma versão de produção:

```bash
npm run build
```

Os arquivos de build serão gerados no diretório `dist/`.

## 🎯 Funcionalidades

- ✅ Criar novas tarefas
- ✅ Listar todas as tarefas
- ✅ Editar tarefas existentes
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas
- ✅ Filtrar tarefas (Todas, Pendentes, Concluídas)
- ✅ Estatísticas de tarefas
- ✅ Interface responsiva e moderna

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header/
│   │   ├── footer/
│   │   ├── todo-form/
│   │   ├── todo-item/
│   │   └── todo-list/
│   ├── pages/             # Páginas da aplicação
│   │   ├── home/
│   │   └── todos/
│   ├── services/          # Serviços
│   │   └── todo.service.ts
│   ├── models/            # Modelos de dados
│   │   └── todo.model.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
├── environments/          # Configurações de ambiente
├── assets/               # Arquivos estáticos
└── styles.scss          # Estilos globais
```

## 🔌 API Backend

A aplicação se conecta a uma API REST Spring Boot. Configure a URL da API em:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/todos'
};
```

## 📝 Endpoints da API

- `GET /api/todos` - Lista todas as tarefas
- `POST /api/todos` - Cria uma nova tarefa
- `PUT /api/todos/{id}` - Atualiza uma tarefa
- `PATCH /api/todos/{id}/toggle` - Alterna o status de conclusão
- `DELETE /api/todos/{id}` - Exclui uma tarefa

## 🎨 Customização

Os estilos podem ser customizados editando:
- `src/styles.scss` - Estilos globais
- Variáveis CSS em `:root` para cores primárias

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👨‍💻 Desenvolvido com

- Angular CLI
- Bootstrap 5
- TypeScript
- RxJS

---

⭐ Desenvolvido com Angular e Spring Boot

