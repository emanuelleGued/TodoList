<template>
  <div class="home">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6">
        <h1 class="display-4 fw-bold mb-4">
          Organize sua vida
          <span class="text-primary d-block">com simplicidade</span>
        </h1>
        <p class="lead mb-4">
          A ferramenta perfeita para gerenciar suas tarefas diárias. 
          Mantenha-se organizado, produtivo e no controle do seu tempo.
        </p>
        <router-link to="/todos" class="btn btn-primary btn-lg px-4 py-3">
          <i class="bi bi-play-circle me-2"></i> Começar Agora
        </router-link>
      </div>
      <div class="col-lg-6 text-center">
        <div class="position-relative">
          <div class="hero-illustration">
            <i class="bi bi-check2-all display-1 text-primary"></i>
            <div class="floating-icon" style="top: 20px; right: 40px;">
              <i class="bi bi-list-task fs-1 text-success"></i>
            </div>
            <div class="floating-icon" style="bottom: 40px; left: 30px;">
              <i class="bi bi-calendar-check fs-1 text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center mb-5 fw-bold">Por que escolher TodoMaster?</h2>
    
    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="card h-100 border-0 text-center p-4">
          <div class="card-icon mb-3">
            <i class="bi bi-lightning-charge fs-1 text-primary"></i>
          </div>
          <h5 class="fw-bold">Rápido e Intuitivo</h5>
          <p class="text-muted">Interface limpa e fácil de usar para máxima produtividade.</p>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card h-100 border-0 text-center p-4">
          <div class="card-icon mb-3">
            <i class="bi bi-cloud-arrow-up fs-1 text-success"></i>
          </div>
          <h5 class="fw-bold">Sempre Disponível</h5>
          <p class="text-muted">Acesse suas tarefas de qualquer lugar, a qualquer hora.</p>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card h-100 border-0 text-center p-4">
          <div class="card-icon mb-3">
            <i class="bi bi-graph-up fs-1 text-warning"></i>
          </div>
          <h5 class="fw-bold">Acompanhe Progresso</h5>
          <p class="text-muted">Visualize seu desempenho e mantenha-se motivado.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero-illustration {
  position: relative;
  display: inline-block;
}

.hero-illustration .display-1 {
  font-size: 8rem;
  opacity: 0.9;
}

.floating-icon {
  position: absolute;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(45deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.05));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>