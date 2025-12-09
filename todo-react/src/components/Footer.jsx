import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <footer className="mt-5 py-4 text-white" style={{
      background: 'linear-gradient(45deg, #3a0ca3, #4361ee)'
    }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="fw-bold mb-3">
              <i className="bi bi-lightning-charge me-2"></i>
              TodoMaster
            </h5>
            <p className="mb-0">
              Gerencie suas tarefas de forma inteligente e produtiva.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              <i className="bi bi-c-circle me-1"></i>
              {new Date().getFullYear()} TodoMaster. Todos os direitos reservados.
            </p>
            <small className="text-light opacity-75">
              Desenvolvido com React e Spring Boot
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer