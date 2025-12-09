import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function TodoForm({ onAddTodo, loading }) {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    completed: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.title.trim()) {
      onAddTodo(todo)
      setTodo({ title: '', description: '', completed: false })
    }
  }

  return (
    <Card className="mb-4 border-0 shadow">
      <Card.Body className="p-4">
        <Card.Title className="fw-bold mb-3">
          <i className="bi bi-plus-circle text-primary me-2"></i>
          Nova Tarefa
        </Card.Title>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text className="bg-light border-0">
              <i className="bi bi-pencil-square text-muted"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="O que precisa ser feito?"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              required
              className="border-0"
            />
          </InputGroup>
          
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Descrição detalhada (opcional)"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            className="mb-3 bg-light border-0"
            style={{ resize: 'none' }}
          />
          
          <div className="d-grid">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              disabled={loading}
              className="fw-bold py-3"
            >
              <i className="bi bi-plus-lg me-1"></i>
              {loading ? 'Adicionando...' : 'Adicionar Tarefa'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default TodoForm