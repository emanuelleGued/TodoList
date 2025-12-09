import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import api from '../services/api'

function Todos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [editingTodo, setEditingTodo] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  // Carregar tarefas
  const fetchTodos = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.get('/todos')
      setTodos(response.data)
    } catch (err) {
      setError('Erro ao carregar tarefas')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // Adicionar tarefa
  const handleAddTodo = async (todoData) => {
    setLoading(true)
    try {
      const response = await api.post('/todos', todoData)
      setTodos(prev => [response.data, ...prev])
    } catch (err) {
      setError('Erro ao criar tarefa')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Alternar status
  const handleToggleTodo = async (id) => {
    try {
      const response = await api.patch(`/todos/${id}/toggle`)
      setTodos(prev => prev.map(todo => 
        todo.id === id ? response.data : todo
      ))
    } catch (err) {
      console.error(err)
    }
  }

  // Editar tarefa
  const handleEditTodo = (todo) => {
    setEditingTodo({ ...todo })
    setShowEditModal(true)
  }

  const handleSaveEdit = async () => {
    try {
      const response = await api.put(`/todos/${editingTodo.id}`, editingTodo)
      setTodos(prev => prev.map(todo => 
        todo.id === editingTodo.id ? response.data : todo
      ))
      setShowEditModal(false)
      setEditingTodo(null)
    } catch (err) {
      console.error(err)
    }
  }

  // Excluir tarefa
  const handleDeleteTodo = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta tarefa?')) return
    
    try {
      await api.delete(`/todos/${id}`)
      setTodos(prev => prev.filter(todo => todo.id !== id))
    } catch (err) {
      setError('Erro ao excluir tarefa')
      console.error(err)
    }
  }

  // Estatísticas
  const stats = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length
  }

  if (loading && todos.length === 0) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" className="mb-3" />
        <p className="text-muted">Carregando suas tarefas...</p>
      </Container>
    )
  }

  return (
    <Container>
      <div className="todo-view">
        {/* Header */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <h1 className="fw-bold mb-2">
              <i className="bi bi-list-check text-primary me-2"></i>
              Minhas Tarefas
            </h1>
            <p className="text-muted mb-0">
              Organize suas atividades e aumente sua produtividade
            </p>
          </div>
        </div>

        {/* Formulário */}
        <TodoForm onAddTodo={handleAddTodo} loading={loading} />

        {/* Lista */}
        <TodoList
          todos={todos}
          filter={filter}
          onFilterChange={setFilter}
          onToggleTodo={handleToggleTodo}
          onEditTodo={handleEditTodo}
          onDeleteTodo={handleDeleteTodo}
          stats={stats}
        />

        {/* Modal de edição */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi bi-pencil-square text-primary me-2"></i>
              Editar Tarefa
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editingTodo && (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    value={editingTodo.title}
                    onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={editingTodo.description}
                    onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              <i className="bi bi-save me-1"></i>
              Salvar Alterações
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  )
}

export default Todos