<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';

const mainbull = reactive({
  mod1: false
});

function pon() {
  mainbull.mod1 = false;
}

onMounted(() => {
  setTimeout(() => {
    mainbull.mod1 = true;
  }, 3000);
});
</script>

<template>
  <div class="box">
    <header>
      <div class="header-top">
        <RouterLink class="RouterLink logo-link" :to="{ name: 'main' }">
          <div class="logo-container">
            <img class="logo" src="./assets/free-icon-dvr-3825653.png" alt="TEHNODOM" />
            <h1 class="animated-logo">TEHNODOM</h1>
          </div>
        </RouterLink>
        <div class="user-actions">
          <RouterLink class="RouterLink basket-link" :to="{ name: 'basket' }">
            <img class="imgbascet" src="./assets/korzina.png" alt="Корзина" />
          </RouterLink>
          <RouterLink class="RouterLink account-btn" :to="{ name: 'account' }">Личный кабинет</RouterLink>
        </div>
      </div>

      <nav class="nav-header">
        <RouterLink class="RouterLink" :to="{ name: 'main' }">Главная</RouterLink>
        <RouterLink class="RouterLink" :to="{ name: 'catalog' }">Каталог</RouterLink>
        <RouterLink class="RouterLink" :to="{ name: 'contact' }">Контакты</RouterLink>
        <RouterLink class="RouterLink" :to="{ name: 'about' }">О нас</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <RouterLink class="RouterLink" :to="{ name: 'main' }">
            <img src="./assets/free-icon-dvr-3825653.png" alt="TEHNODOM" class="footer-logo-img" />
            TEHNODOM
          </RouterLink>
        </div>
        <div class="footer-divider"></div>

        <div class="footer-content">
          <nav class="footer-nav">
            <RouterLink class="RouterLink" :to="{ name: 'main' }">Главная</RouterLink>
            <RouterLink class="RouterLink" :to="{ name: 'catalog' }">Каталог</RouterLink>
            <RouterLink class="RouterLink" :to="{ name: 'contact' }">Контакты</RouterLink>
            <RouterLink class="RouterLink" :to="{ name: 'basket' }">Корзина</RouterLink>
            <RouterLink class="RouterLink" :to="{ name: 'account' }">Личный кабинет</RouterLink>
            <RouterLink class="RouterLink" :to="{ name: 'about' }">О нас</RouterLink>
          </nav>

          <div class="footer-info">
            <div class="copyright">© 2025 TEHNODOM. Все права защищены.</div>
          </div>
        </div>

        <div class="footer-social">
          <a href="https://vk.com/zeragbl" target="_blank" rel="noopener">
            <img src="./assets/vk.png" alt="Вконтакте" />
          </a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noopener">
            <img src="./assets/telegram.png" alt="Телеграм" />
          </a>
        </div>
      </div>
    </footer>

  
  </div>
</template>

<style scoped>
.RouterLink {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, box-shadow 0.3s ease;
}

header {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: "Oswald", sans-serif;
  border-bottom: 1px solid #eaeaea;
  padding: 0.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  width: 44px;
  height: 44px;
}

.animated-logo {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #0c7da0;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    color: #0a9fd8;
  }
  100% {
    transform: scale(1);
  }
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.basket-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: box-shadow 0.3s ease;
}

.basket-link:hover {
  box-shadow: 0 4px 8px rgba(12, 125, 160, 0.4);
}

.imgbascet {
  width: 24px;
  height: 24px;
}

.account-btn {
  background-color: #000;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: none;
}

.account-btn:hover {
  background-color: #0c7da0;
  box-shadow: 0 4px 12px rgba(12, 125, 160, 0.6);
}

.nav-header {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-header a {
  color: #0c7da0;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: none;
  transition: box-shadow 0.3s ease, color 0.3s ease;
}

.nav-header a:hover,
.nav-header a.router-link-exact-active {
  color: #095a7a;
  box-shadow: 0 4px 8px rgba(12, 125, 160, 0.4);
}

footer {
  background: #0c7da0;
  padding: 24px 0;
  border-top: 1px solid #e0e0e0;
  font-family: "Oswald", sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}

.footer-logo img.footer-logo-img {
  width: 32px;
  height: 32px;
}

.footer-divider {
  width: 1px;
  height: 40px;
  background-color: #d1d1d1;
  flex-shrink: 0;
}

.footer-content {
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-nav {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #a8d0e6;
}

.footer-info {
  font-size: 12px;
  color: #d1d1d1;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
  cursor: pointer;
}

.footer-social img:hover {
  filter: brightness(0.7) invert(1);
}

.box {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
