import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-4">
            Organize sua vida
            <span className="text-primary d-block">com simplicidade</span>
          </h1>
          <p className="lead mb-4">
            A ferramenta perfeita para gerenciar suas tarefas diárias. 
            Mantenha-se organizado, produtivo e no controle do seu tempo.
          </p>
          <Button 
            as={Link} 
            to="/todos" 
            variant="primary" 
            size="lg"
            className="px-4 py-3"
          >
            <i className="bi bi-play-circle me-2"></i>
            Começar Agora
          </Button>
        </Col>
        <Col lg={6} className="text-center">
          <div className="position-relative">
            <div className="hero-illustration">
              <i className="bi bi-check2-all display-1 text-primary"></i>
              <div className="floating-icon" style={{ top: '20px', right: '40px' }}>
                <i className="bi bi-list-task fs-1 text-success"></i>
              </div>
              <div className="floating-icon" style={{ bottom: '40px', left: '30px' }}>
                <i className="bi bi-calendar-check fs-1 text-warning"></i>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Features */}
      <h2 className="text-center mb-5 fw-bold">Por que escolher TodoMaster?</h2>
      
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 border-0 text-center p-4">
            <div className="card-icon mb-3">
              <i className="bi bi-lightning-charge fs-1 text-primary"></i>
            </div>
            <Card.Title className="fw-bold">Rápido e Intuitivo</Card.Title>
            <Card.Text className="text-muted">
              Interface limpa e fácil de usar para máxima produtividade.
            </Card.Text>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 border-0 text-center p-4">
            <div className="card-icon mb-3">
              <i className="bi bi-cloud-arrow-up fs-1 text-success"></i>
            </div>
            <Card.Title className="fw-bold">Sempre Disponível</Card.Title>
            <Card.Text className="text-muted">
              Acesse suas tarefas de qualquer lugar, a qualquer hora.
            </Card.Text>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 border-0 text-center p-4">
            <div className="card-icon mb-3">
              <i className="bi bi-graph-up fs-1 text-warning"></i>
            </div>
            <Card.Title className="fw-bold">Acompanhe Progresso</Card.Title>
            <Card.Text className="text-muted">
              Visualize seu desempenho e mantenha-se motivado.
            </Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Stats */}
      <Card className="mb-5">
        <Card.Body>
          <Row className="text-center">
            <Col md={3}>
              <div className="stat-number display-6 fw-bold text-primary">100+</div>
              <div className="stat-label text-muted">Tarefas Gerenciadas</div>
            </Col>
            <Col md={3}>
              <div className="stat-number display-6 fw-bold text-success">95%</div>
              <div className="stat-label text-muted">Taxa de Conclusão</div>
            </Col>
            <Col md={3}>
              <div className="stat-number display-6 fw-bold text-warning">24/7</div>
              <div className="stat-label text-muted">Disponibilidade</div>
            </Col>
            <Col md={3}>
              <div className="stat-number display-6 fw-bold text-danger">0</div>
              <div className="stat-label text-muted">Anúncios</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home