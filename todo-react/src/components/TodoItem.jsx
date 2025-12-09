import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR') + ' ' + 
           date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <Card className={`mb-3 todo-item ${todo.completed ? 'completed' : ''}`}>
      <Card.Body>
        <div className="d-flex align-items-start">
          {/* Checkbox */}
          <div className="me-3">
            <div 
              className="custom-checkbox"
              onClick={onToggle}
              style={{ cursor: 'pointer' }}
            >
              <i 
                className="bi"
                style={{ fontSize: '1.5rem' }}
                class={todo.completed ? 'bi-check-circle-fill text-success' : 'bi-circle text-muted'}
              ></i>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-grow-1">
            <h5 
              className={`mb-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
            >
              {todo.title}
            </h5>
            
            {todo.description && (
              <p 
                className={`text-muted mb-2 ${todo.completed ? 'text-decoration-line-through' : ''}`}
              >
                {todo.description}
              </p>
            )}

            {/* Metadata */}
            <div className="small text-muted d-flex align-items-center">
              <i className="bi bi-calendar me-1"></i>
              <span>
                Criada em {formatDate(todo.createdAt)}
              </span>
            </div>
          </div>

          {/* Ações */}
          <ButtonGroup className="ms-3">
            <Button 
              variant="outline-primary" 
              size="sm"
              onClick={onEdit}
              title="Editar"
            >
              <i className="bi bi-pencil"></i>
            </Button>
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={onDelete}
              title="Excluir"
            >
              <i className="bi bi-trash"></i>
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TodoItem