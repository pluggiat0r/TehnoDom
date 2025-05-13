<script setup>
import { computed, reactive, ref, watch } from 'vue';
import useBasket from '../composables/useBasket';
import useUsers from '../composables/useUsers';
import useProducts from '../composables/useProducts';
import useOrders from '../composables/useOrders';

const { authorizationpolzovatel } = useUsers();
const { basketproducts, deleteProductbasket } = useBasket();
const { findProduct } = useProducts();
const { orders, addOrders } = useOrders();

const massiv = computed(() => {
  return basketproducts.value
    .filter(bp => bp.authorizationpolzovatelId === authorizationpolzovatel.value)
    .map(bp => {
      const product = findProduct(bp.productId);
      return product ? { ...product } : undefined;
    })
    .filter(p => p !== undefined);
});

const counts = reactive({});
watch(massiv, (newVal) => {
  newVal.forEach(product => {
    if (!counts[product.id]) {
      counts[product.id] = 1;
    }
  });
}, { immediate: true });

const bulls = reactive({
  bull1: computed(() => isNaN(authorizationpolzovatel.value)),
  bull2: computed(() => authorizationpolzovatel.value >= 0),
  bull3: computed(() => massiv.value.length === 0),
  bull4: computed(() => massiv.value.length > 0),
});

function udltovar(productId) {
  deleteProductbasket(productId);
  delete counts[productId];
}

const mainbull = reactive({
  mod1: false,
});

function pon() {
  mainbull.mod1 = false;
}

function oform() {
  mainbull.mod1 = true;
}

function udlvsetovar() {
  basketproducts.value.forEach(bp => {
    if (bp.authorizationpolzovatelId === authorizationpolzovatel.value) {
      deleteProductbasket(bp.productId);
      delete counts[bp.productId];
    }
  });
}

const orderNumber = ref('');
const regularnumcard = /^\d{16}$/;
const numcard = ref('');
const error = ref('');

function oformzakaz() {
  if (!numcard.value) {
    error.value = 'Поле не может быть пустым';
    return;
  }
  if (!regularnumcard.test(numcard.value)) {
    error.value = 'Номер карты должен состоять из 16 цифр!';
    return;
  }
  error.value = '';
  orderNumber.value = 'TehnoDomOrder-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  addOrders(authorizationpolzovatel.value, orderNumber.value);
  numcard.value = '';
  mainbull.mod1 = false;
}

function decreaseCount(productId) {
  if (counts[productId] > 1) {
    counts[productId]--;
  }
}

function increaseCount(productId) {
  counts[productId]++;
}
</script>

<template>
  <div class="modal1" v-if="mainbull.mod1">
    <div class="modal-back" @click="pon()"></div>
    <div class="modal-main" @click.stop>
      <div class="boxvvod">
        <div class="vod">
          <label for="numcard">Код карты</label>
          <input
            title="Номер карты должен состоять из 16 цифр."
            v-model="numcard"
            type="text"
            id="numcard"
            maxlength="16"
            inputmode="numeric"
          />
        </div>
        <p class="er">{{ error }}</p>
      </div>
      <div class="btnsflex">
        <button class="modal1btn" @click="pon()">Отмена</button>
        <button class="modal1btn" @click="oformzakaz()">Оформить</button>
      </div>
    </div>
  </div>

  <div v-if="bulls.bull1">
    <p class="note">Для доступа к корзине необходимо авторизоваться</p>
  </div>

  <div v-if="bulls.bull2">
    <div v-if="bulls.bull3">
      <p class="corsinapusta">Корзина пуста</p>
    </div>

    <div v-if="bulls.bull4">
      <button class="oform" @click="oform()">Оформить заказ</button>
      <ul>
        <li v-for="product in massiv" :key="product.id" class="product-item">
          <img class="imgproduct" :src="product.imgproduct" :alt="product.title" />
          <div class="datatovar">
            <p>Название товара: {{ product.title }}</p>
            <p>Цена товара: {{ (product.price * counts[product.id]) || product.price }} руб</p>
            <div class="MP">
              <button class="btnsMP" @click="decreaseCount(product.id)">-</button>
              <span>{{ counts[product.id] }}</span>
              <button class="btnsMP" @click="increaseCount(product.id)">+</button>
            </div>
          </div>
          <button class="btnudlcorsina" @click="udltovar(product.id)">Удалить из корзины</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f9fc;
  color: #333;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li.product-item {
  margin-bottom: 15px;
  padding: 15px 20px;
  background-color: #ffffff;
  border: 2px solid #0c7da0;
  border-radius: 10px;
  height: 120px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 2px 8px rgb(12 125 160 / 0.15);
  transition: box-shadow 0.3s ease;
}

li.product-item:hover {
  box-shadow: 0 4px 16px rgb(12 125 160 / 0.3);
}

.imgproduct {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #0c7da0;
  background-color: #e6f0f8;
}

.datatovar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.datatovar p {
  margin: 4px 0;
  font-weight: 600;
  color: #0c7da0;
  font-size: 1rem;
}

.MP {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}

.btnsMP {
  width: 36px;
  height: 36px;
  background-color: #0c7da0;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  user-select: none;
  transition: background-color 0.3s ease;
}

.btnsMP:hover {
  background-color: #095a7a;
}

.btnudlcorsina {
  height: 36px;
  width: 180px;
  background-color: #0c7da0;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s ease;
}

.btnudlcorsina:hover {
  background-color: #095a7a;
}

.oform {
  width: 220px;
  height: 40px;
  background-color: #0c7da0;
  border: none;
  color: white;
  font-weight: 700;
  margin-top: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.oform:hover {
  background-color: #095a7a;
}

.corsinapusta,
.note {
  margin-top: 250px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #0c7da0;
}

/* Модальное окно и фон */
.modal1 {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-back {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(12, 125, 160, 0.15);
  z-index: 1001;
}

.modal-main {
  position: fixed;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 12px;
  height: 280px;
  width: 520px;
  padding: 30px 40px;
  box-shadow: 0 6px 20px rgba(12, 125, 160, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1002;
}

.boxvvod {
  height: auto;
}

.vod label {
  font-weight: 700;
  color: #0c7da0;
  font-size: 1rem;
}

#numcard {
  margin-left: 20px;
  padding: 8px 12px;
  font-size: 1rem;
  border: 2px solid #0c7da0;
  border-radius: 8px;
  width: 250px;
  outline: none;
  transition: border-color 0.3s ease;
}

#numcard:focus {
  border-color: #095a7a;
}

.er {
  color: #d93025;
  margin-left: 120px;
  margin-top: 8px;
  font-weight: 600;
}

.btnsflex {
  display: flex;
  gap: 25px;
  justify-content: center;
}

.modal1btn {
  width: 120px;
  height: 45px;
  border-radius: 12px;
  background-color: #0c7da0;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.modal1btn:hover {
  background-color: #095a7a;
}
</style>
