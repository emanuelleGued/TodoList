<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background: linear-gradient(45deg, #4361ee, #3a0ca3);">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <i class="bi bi-check2-all fs-3 me-2"></i>
          <span class="fw-bold">{{ appTitle }}</span>
        </router-link>
        
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">
            <i class="bi bi-house-door me-1"></i> Home
          </router-link>
          <router-link class="nav-link" to="/todos">
            <i class="bi bi-list-check me-1"></i> Minhas Tarefas
          </router-link>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <router-view />
    </main>

    <footer class="mt-5 py-4 text-white" style="background: linear-gradient(45deg, #3a0ca3, #4361ee);">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="fw-bold mb-3">
              <i class="bi bi-lightning-charge me-2"></i>TodoMaster
            </h5>
            <p class="mb-0">Gerencie suas tarefas de forma inteligente e produtiva.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0">
              <i class="bi bi-c-circle me-1"></i> {{ currentYear }} TodoMaster
            </p>
            <small class="text-light opacity-75">
              Desenvolvido com Vue.js 3 e Spring Boot
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE || 'Todo List'
    },
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  padding: 8px 16px !important;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.9) !important;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  color: white !important;
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
  color: white !important;
}

main {
  flex: 1;
}
</style>
