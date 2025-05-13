<script setup>
import { reactive, ref, computed, watch } from "vue";
import useUsers from "../composables/useUsers";
import { RouterLink, useRouter, RouterView } from 'vue-router';
import useOrders from "../composables/useOrders";


const users = useUsers();
const authorizationpolzovatel = users.authorizationpolzovatel;
const currentUser = computed(() => users.findUser(authorizationpolzovatel.value));
const userId = computed(() => authorizationpolzovatel.value);
const orders = useOrders().orders;

const router = useRouter();

const bulls = reactive({
  bull1: computed(() => isNaN(userId.value)),
  bull2: computed(() => !isNaN(userId.value)),
});

const showUnauthMessage = ref(isNaN(userId.value));

watch(authorizationpolzovatel, (newVal) => {
  showUnauthMessage.value = isNaN(newVal);
});

const userOrders = computed(() => {
  if (!orders.value || !userId.value) return [];
  return orders.value.filter(order => order.authorizationpolzovatelId === userId.value);
});

const mainbull = reactive({
  mod1: false,
});

function exit() {
  authorizationpolzovatel.value = NaN;
  showUnauthMessage.value = true;
  router.push({ name: 'authorization' });
}

async function udluser() {
  if (currentUser.value?.id === 0) {
    mainbull.mod1 = true;
  } else {
    users.deleteUser(userId.value);
    authorizationpolzovatel.value = NaN;
    showUnauthMessage.value = true;
    router.push({ name: 'authorization' });
  }
}

function pon() {
  mainbull.mod1 = false;
}

const today = ref(new Date());
</script>

<template>
  <div>
    <div class="modal2" v-if="mainbull.mod1">
      <div class="modal-main2">
        <h2 class="modal2h2">У вас недостаточно прав</h2>
        <button class="modal2btn" @click="pon">Окей</button>
      </div>
      <div class="modal-back2"></div>
    </div>

    <div v-if="showUnauthMessage" class="unauth-container">
      <div class="unauth-box">
        <h2>Вы не авторизованы</h2>
        <p>Вам нужно <RouterLink :to="{ name: 'authorization' }">авторизоваться</RouterLink></p>
        <p>Если вы не были зарегистрированы на нашем сайте, то просим вас 
          <RouterLink :to="{ name: 'regestration' }">зарегистрироваться</RouterLink>
        </p>
      </div>
      <RouterView />
    </div>

    <div v-if="bulls.bull2 && currentUser" class="account-container">
      <div class="profile-section">
        <div class="profile-header">
          <img src="../assets/useravatar.png" alt="avatar" class="avatar" />
          <div class="profile-info">
            <h2>{{ currentUser.name }}</h2>
            <p class="email">{{ currentUser.email }}</p>
          </div>
          <div class="profile-actions">
            <button class="btn-delete" @click="udluser">Удалить аккаунт</button>
            <button class="btn-logout" @click="exit">Выйти</button>
          </div>
        </div>
      </div>

      <div class="orders-section">
        <h2 class="section-title">Ваши заказы</h2>
        <div v-if="userOrders.length > 0" class="orders-list">
          <div v-for="order in userOrders" :key="order.id" class="order-card">
            <img src="../assets/imgorder.png" class="order-icon" alt="order" />
            <div class="order-details">
              <h3>Заказ от {{ today.toLocaleDateString() }}</h3>
              <p>Номер заказа: <span class="order-number">{{ order.numer }}</span></p>
            </div>
          </div>
        </div>
        <div v-else class="no-orders">
          <p>У вас пока нет заказов</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile-section {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-bottom: 30px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 30px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0c7da0;
}

.profile-info {
  flex-grow: 1;
}

.profile-info h2 {
  margin: 0 0 5px 0;
  color: #333;
}

.email {
  margin: 0;
  color: #666;
}

.profile-actions {
  display: flex;
  gap: 15px;
}

.btn-delete, .btn-logout {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-delete {
  background-color: #f8f8f8;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.btn-delete:hover {
  background-color: #ffecec;
}

.btn-logout {
  background-color: #0c7da0;
  color: white;
}

.btn-logout:hover {
  background-color: #0a6d8c;
}

.orders-section {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.section-title {
  color: #0c7da0;
  margin-top: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  transition: all 0.3s;
}

.order-card:hover {
  background: #f0f0f0;
  transform: translateX(5px);
}

.order-icon {
  width: 60px;
  height: 60px;
}

.order-details h3 {
  margin: 0 0 5px 0;
  color: #333;
}

.order-number {
  color: #0c7da0;
  font-weight: 600;
}

.modal2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-main2 {
  background: white;
  border-radius: 10px;
  padding: 30px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  z-index: 1001;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.modal-back2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal2h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.modal2btn {
  padding: 10px 25px;
  background: #0c7da0;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.modal2btn:hover {
  background: #0a6d8c;
}

.unauth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.unauth-box {
  background: white;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  width: 90%;
}

.unauth-box h2 {
  color: #333;
  margin-bottom: 20px;
}

.unauth-box a {
  color: #0c7da0;
  text-decoration: none;
  font-weight: 600;
}

.unauth-box a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .order-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>