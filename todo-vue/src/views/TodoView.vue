<template>
  <div class="todo-view">
    <!-- Header -->
    <div class="row mb-4 align-items-center">
      <div class="col-md-8">
        <h1 class="fw-bold mb-2">
          <i class="bi bi-list-check text-primary me-2"></i>
          Minhas Tarefas
        </h1>
        <p class="text-muted mb-0">
          Organize suas atividades e aumente sua produtividade
        </p>
      </div>
      <div class="col-md-4">
        <div class="stats-card card border-0">
          <div class="card-body p-3">
            <div class="row text-center">
              <div class="col-4">
                <div class="fw-bold fs-4">{{ stats.total }}</div>
                <small class="text-muted">Total</small>
              </div>
              <div class="col-4">
                <div class="fw-bold fs-4 text-success">{{ stats.completed }}</div>
                <small class="text-muted">Concluídas</small>
              </div>
              <div class="col-4">
                <div class="fw-bold fs-4 text-warning">{{ stats.pending }}</div>
                <small class="text-muted">Pendentes</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulário -->
    <div class="card add-todo-card mb-4 border-0">
      <div class="card-body p-4">
        <h5 class="card-title fw-bold mb-3">
          <i class="bi bi-plus-circle text-primary me-2"></i>
          Nova Tarefa
        </h5>
        <form @submit.prevent="addTodo">
          <div class="row g-3">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text bg-light border-0">
                  <i class="bi bi-pencil-square text-muted"></i>
                </span>
                <input 
                  type="text" 
                  v-model="newTodo.title"
                  class="form-control border-0"
                  placeholder="O que precisa ser feito?"
                  required
                >
              </div>
            </div>
            <div class="col-md-4">
              <button 
                type="submit" 
                class="btn btn-primary w-100 py-3 fw-bold"
                :disabled="loading"
              >
                <i class="bi bi-plus-lg me-1"></i>
                {{ loading ? 'Adicionando...' : 'Adicionar' }}
              </button>
            </div>
          </div>
          <div class="mt-3">
            <textarea 
              v-model="newTodo.description"
              class="form-control border-0 bg-light"
              rows="2"
              placeholder="Descrição detalhada (opcional)"
              style="resize: none;"
            ></textarea>
          </div>
        </form>
      </div>
    </div>

    <!-- Filtros -->
    <div class="filters mb-4">
      <div class="btn-group" role="group">
        <button 
          class="btn"
          :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('all')"
        >
          <i class="bi bi-list-ul me-1"></i>Todas
        </button>
        <button 
          class="btn"
          :class="filter === 'pending' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('pending')"
        >
          <i class="bi bi-clock me-1"></i>Pendentes
        </button>
        <button 
          class="btn"
          :class="filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setFilter('completed')"
        >
          <i class="bi bi-check2-all me-1"></i>Concluídas
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading && todos.length === 0" class="text-center py-5">
      <div class="spinner-border text-primary mb-3" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Carregando...</span>
      </div>
      <p class="text-muted">Carregando suas tarefas...</p>
    </div>

    <!-- Lista vazia -->
    <div v-else-if="filteredTodos.length === 0" class="empty-state text-center py-5">
      <i class="bi bi-inbox display-1 text-muted mb-3"></i>
      <h4 class="fw-bold mb-2">
        {{ filter === 'completed' ? 'Nenhuma tarefa concluída ainda' : 'Nenhuma tarefa encontrada' }}
      </h4>
      <p class="text-muted mb-4">
        {{ filter === 'all' ? 'Comece criando sua primeira tarefa!' : 
           filter === 'pending' ? 'Todas as tarefas estão concluídas!' : 
           'Complete algumas tarefas para vê-las aqui.' }}
      </p>
      <button v-if="filter !== 'all'" @click="setFilter('all')" class="btn btn-outline-primary">
        <i class="bi bi-eye me-1"></i>Ver todas as tarefas
      </button>
    </div>

    <!-- Lista de tarefas -->
    <div v-else class="todo-list">
      <div 
        v-for="todo in filteredTodos" 
        :key="todo.id"
        class="todo-item card mb-3 fade-in"
        :class="{ 'completed': todo.completed }"
      >
        <div class="card-body">
          <div class="d-flex align-items-start">
            <!-- Checkbox -->
            <div class="me-3">
              <div 
                class="custom-checkbox"
                @click="toggleTodo(todo)"
                :class="{ 'completed': todo.completed }"
              >
                <i 
                  class="bi"
                  :class="todo.completed ? 'bi-check-circle-fill text-success' : 'bi-circle text-muted'"
                  style="font-size: 1.5rem;"
                ></i>
              </div>
            </div>

            <!-- Conteúdo -->
            <div class="flex-grow-1">
              <h5 
                class="mb-1"
                :class="{ 'text-decoration-line-through text-muted': todo.completed }"
              >
                {{ todo.title }}
              </h5>
              
              <p 
                v-if="todo.description" 
                class="text-muted mb-2"
                :class="{ 'text-decoration-line-through': todo.completed }"
              >
                {{ todo.description }}
              </p>

              <!-- Metadata -->
              <div class="small text-muted d-flex align-items-center">
                <i class="bi bi-calendar me-1"></i>
                <span v-if="todo.createdAt">
                  Criada em {{ formatDate(todo.createdAt) }}
                </span>
                <span v-else>Data não disponível</span>
              </div>
            </div>

            <!-- Ações -->
            <div class="btn-group ms-3" role="group">
              <button 
                @click="editTodo(todo)"
                class="btn btn-sm btn-outline-primary"
                title="Editar"
              >
                <i class="bi bi-pencil"></i>
              </button>
              <button 
                @click="deleteTodo(todo.id)"
                class="btn btn-sm btn-outline-danger"
                title="Excluir"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de edição -->
    <div v-if="editingTodo" class="modal-overlay" @click="cancelEdit">
      <div class="modal-content" @click.stop>
        <div class="modal-header border-0">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-pencil-square text-primary me-2"></i>
            Editar Tarefa
          </h5>
          <button @click="cancelEdit" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Título</label>
            <input 
              type="text" 
              v-model="editingTodo.title"
              class="form-control"
              required
            >
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Descrição</label>
            <textarea 
              v-model="editingTodo.description"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer border-0">
          <button @click="cancelEdit" class="btn btn-outline-secondary">
            Cancelar
          </button>
          <button @click="saveEdit" class="btn btn-primary">
            <i class="bi bi-save me-1"></i>
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoView',
  data() {
    return {
      todos: [],
      newTodo: {
        title: '',
        description: '',
        completed: false
      },
      editingTodo: null,
      loading: false,
      error: null,
      filter: 'all'
    }
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(todo => todo.completed)
        case 'pending':
          return this.todos.filter(todo => !todo.completed)
        default:
          return this.todos
      }
    },
    stats() {
      const total = this.todos.length
      const completed = this.todos.filter(todo => todo.completed).length
      const pending = total - completed
      
      return { total, completed, pending }
    }
  },
  mounted() {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      this.loading = true
      try {
        const response = await axios.get('/api/todos')
        this.todos = response.data
        this.error = null
      } catch (err) {
        this.error = 'Erro ao carregar tarefas'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    
    async addTodo() {
      if (!this.newTodo.title.trim()) return
      
      this.loading = true
      try {
        const response = await axios.post('/api/todos', this.newTodo)
        this.todos.unshift(response.data)
        this.newTodo = { title: '', description: '', completed: false }
        this.error = null
      } catch (err) {
        this.error = 'Erro ao criar tarefa'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    
    async toggleTodo(todo) {
      try {
        const response = await axios.patch(`/api/todos/${todo.id}/toggle`)
        const updatedTodo = response.data
        const index = this.todos.findIndex(t => t.id === updatedTodo.id)
        if (index !== -1) {
          this.todos.splice(index, 1, updatedTodo)
        }
      } catch (err) {
        console.error(err)
      }
    },
    
    editTodo(todo) {
      this.editingTodo = { ...todo }
    },
    
    async saveEdit() {
      try {
        const response = await axios.put(`/api/todos/${this.editingTodo.id}`, this.editingTodo)
        const updatedTodo = response.data
        const index = this.todos.findIndex(t => t.id === updatedTodo.id)
        if (index !== -1) {
          this.todos.splice(index, 1, updatedTodo)
        }
        this.editingTodo = null
      } catch (err) {
        console.error(err)
      }
    },
    
    cancelEdit() {
      this.editingTodo = null
    },
    
    async deleteTodo(id) {
      if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return
      
      try {
        await axios.delete(`/api/todos/${id}`)
        this.todos = this.todos.filter(todo => todo.id !== id)
      } catch (err) {
        this.error = 'Erro ao excluir tarefa'
        console.error(err)
      }
    },
    
    setFilter(filter) {
      this.filter = filter
    },
    
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    }
  }
}
</script>

<style scoped>
.todo-view {
  min-height: 70vh;
}

.stats-card {
  background: linear-gradient(45deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.05));
}

.add-todo-card {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95));
  box-shadow: 0 8px 32px rgba(67, 97, 238, 0.1);
}

.custom-checkbox {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.custom-checkbox:hover {
  transform: scale(1.1);
}

.empty-state {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9));
  border-radius: 15px;
  border: 2px dashed #dee2e6;
}

.todo-item.completed {
  opacity: 0.7;
  background: linear-gradient(45deg, rgba(76, 201, 240, 0.05), rgba(76, 201, 240, 0.02));
}

.todo-item.completed .card-body {
  background: transparent;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.filters .btn {
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
}
</style>