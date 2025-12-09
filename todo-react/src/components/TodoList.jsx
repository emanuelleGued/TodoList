import TodoItem from './TodoItem'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function TodoList({ 
  todos, 
  filter, 
  onFilterChange, 
  onToggleTodo, 
  onEditTodo, 
  onDeleteTodo,
  stats 
}) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  return (
    <div className="todo-list">
      {/* Filtros */}
      <div className="filters mb-4">
        <div className="btn-group" role="group">
          <Button
            variant={filter === 'all' ? 'primary' : 'outline-primary'}
            onClick={() => onFilterChange('all')}
            className="rounded"
          >
            <i className="bi bi-list-ul me-1"></i>
            Todas ({stats.total})
          </Button>
          <Button
            variant={filter === 'pending' ? 'primary' : 'outline-primary'}
            onClick={() => onFilterChange('pending')}
            className="rounded mx-2"
          >
            <i className="bi bi-clock me-1"></i>
            Pendentes ({stats.pending})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'outline-primary'}
            onClick={() => onFilterChange('completed')}
            className="rounded"
          >
            <i className="bi bi-check2-all me-1"></i>
            Concluídas ({stats.completed})
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <Card className="mb-4 border-0" style={{
        background: 'linear-gradient(45deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.05))'
      }}>
        <Card.Body className="p-3">
          <div className="row text-center">
            <div className="col-4">
              <div className="fw-bold fs-4">{stats.total}</div>
              <small className="text-muted">Total</small>
            </div>
            <div className="col-4">
              <div className="fw-bold fs-4 text-success">{stats.completed}</div>
              <small className="text-muted">Concluídas</small>
            </div>
            <div className="col-4">
              <div className="fw-bold fs-4 text-warning">{stats.pending}</div>
              <small className="text-muted">Pendentes</small>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Lista vazia */}
      {filteredTodos.length === 0 && (
        <div className="empty-state text-center py-5">
          <i className="bi bi-inbox display-1 text-muted mb-3"></i>
          <h4 className="fw-bold mb-2">
            {filter === 'completed' ? 'Nenhuma tarefa concluída ainda' : 'Nenhuma tarefa encontrada'}
          </h4>
          <p className="text-muted mb-4">
            {filter === 'all' ? 'Comece criando sua primeira tarefa!' : 
             filter === 'pending' ? 'Todas as tarefas estão concluídas!' : 
             'Complete algumas tarefas para vê-las aqui.'}
          </p>
          {filter !== 'all' && (
            <Button 
              variant="outline-primary"
              onClick={() => onFilterChange('all')}
            >
              <i className="bi bi-eye me-1"></i>
              Ver todas as tarefas
            </Button>
          )}
        </div>
      )}

      {/* Lista de tarefas */}
      {filteredTodos.map((todo, index) => (
        <div key={todo.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <TodoItem
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onEdit={() => onEditTodo(todo)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList