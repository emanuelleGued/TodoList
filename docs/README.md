# TodoList - Guia de Execução

Este projeto contém um backend Spring Boot e três frontends (Angular, React e Vue) para gerenciamento de tarefas.

## Pré-requisitos

- **Backend**: Java 17+ e Maven
- **Frontend Angular**: Node.js 18+ e npm
- **Frontend React**: Node.js 18+ e npm
- **Frontend Vue**: Node.js 18+ e npm

---

## Backend (Spring Boot)

### Localização
```
TODO/
```

### Como executar

1. Entre na pasta do backend:
```bash
cd TODO
```

2. Execute o projeto:
```bash
./mvnw spring-boot:run
```

**Porta**: `http://localhost:8080`

**API**: `http://localhost:8080/api/todos`

**Console H2**: `http://localhost:8080/h2-console`

---

## 🅰️ Frontend Angular

### Localização
```
todo-angular/
```

### Como executar

1. Entre na pasta:
```bash
cd todo-angular
```

2. Instale as dependências (primeira vez):
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

**Porta**: `http://localhost:4200`

---

## ⚛️ Frontend React

### Localização
```
todo-react/
```

### Como executar

1. Entre na pasta:
```bash
cd todo-react
```

2. Instale as dependências (primeira vez):
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

**Porta**: `http://localhost:3000`

---

## 💚 Frontend Vue

### Localização
```
todo-vue/
```

### Como executar

1. Entre na pasta:
```bash
cd todo-vue
```

2. Instale as dependências (primeira vez):
```bash
npm install
```

3. Execute o projeto:
```bash
npm run serve
```

**Porta**: `http://localhost:3000`

---

## ⚠️ Importante

- **Execute sempre o backend primeiro** antes de iniciar qualquer frontend
- Os frontends estão configurados para fazer proxy das requisições `/api` para `http://localhost:8080`
- React e Vue usam a mesma porta (3000), então execute apenas um por vez
- Angular usa a porta 4200, então pode rodar em paralelo com React ou Vue

---

## Banco de Dados

O projeto usa H2 Database em memória para desenvolvimento. Os dados são perdidos quando a aplicação é encerrada.

Para acessar o console H2:
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:tododb`
- Username: `sa`
- Password: (deixe em branco)

