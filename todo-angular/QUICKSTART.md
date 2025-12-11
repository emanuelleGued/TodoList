# Guia Rápido - TodoMaster Angular

## 🚀 Como Executar

### 1. Backend (Spring Boot)

Primeiro, inicie o backend Spring Boot:

```bash
cd TODO
./mvnw spring-boot:run
```

O backend estará disponível em: `http://localhost:8080`

### 2. Frontend Angular

Em outro terminal, inicie o frontend Angular:

```bash
cd todo-angular
npm install  # Primeira vez apenas
npm start
```

O frontend estará disponível em: `http://localhost:4200`

## 📝 Características

### Componentes Criados:

- **Header Component** - Navegação superior
- **Footer Component** - Rodapé da aplicação
- **Home Component** - Página inicial com apresentação
- **Todos Component** - Página principal de gerenciamento de tarefas
- **TodoForm Component** - Formulário para criar tarefas
- **TodoList Component** - Lista com filtros e estatísticas
- **TodoItem Component** - Item individual de tarefa

### Serviços:

- **TodoService** - Serviço para comunicação com API REST

### Modelos:

- **Todo Model** - Interface TypeScript para tarefas

## 🎯 Funcionalidades Implementadas

✅ Criar tarefas
✅ Listar tarefas
✅ Editar tarefas (com modal)
✅ Marcar como concluída/pendente
✅ Excluir tarefas
✅ Filtros (Todas, Pendentes, Concluídas)
✅ Estatísticas em tempo real
✅ Design responsivo com Bootstrap 5
✅ Ícones do Bootstrap Icons
✅ Animações suaves

## 🔌 API Endpoints Utilizados

- `GET /api/todos` - Listar todas as tarefas
- `POST /api/todos` - Criar nova tarefa
- `PUT /api/todos/{id}` - Atualizar tarefa
- `PATCH /api/todos/{id}/toggle` - Alternar status
- `DELETE /api/todos/{id}` - Excluir tarefa

## 🎨 Estilização

- Bootstrap 5.3.8
- Bootstrap Icons 1.13.1
- CSS customizado com gradientes e animações
- Design moderno e responsivo

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona em:
- Desktop
- Tablets
- Smartphones

## 🔧 Configuração

A URL da API pode ser alterada em:
```
src/environments/environment.ts
```

O proxy de desenvolvimento está configurado em:
```
proxy.conf.json
```

## 📦 Build de Produção

Para gerar uma versão de produção:

```bash
npm run build
```

Os arquivos serão gerados em `dist/todo-angular/`

---

**Desenvolvido com Angular 18, TypeScript, Bootstrap 5 e Spring Boot**

