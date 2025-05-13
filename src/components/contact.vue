<script setup>
import { ref, reactive } from 'vue';

const comment = ref("");
const error = ref("");

function otprav() {
  if (comment.value.trim() === "") {
    error.value = "Нельзя отправить пустое сообщение";
  } else {
    mainbull.mod1 = true;
    comment.value = "";
    error.value = "";
  }
}

const mainbull = reactive({
  mod1: false,
});

function pon() {
  mainbull.mod1 = false;
}
</script>

<template>
  <div class="modal1" v-if="mainbull.mod1">
    <div class="modal-back" @click="pon"></div>
    <div class="modal-main" @click.stop>
      <h2 class="modal1h2">Комментарий успешно отправлен</h2>
      <button class="modal1btn" @click="pon">Понял</button>
    </div>
  </div>

  <div class="container">
    <section class="contact-section">
      <h3 class="section-title">Контакты</h3>
      <div class="contact-item">
        <p>Телефон: +7 (999) 999-99-99</p>
      </div>
      <div class="contact-item">
        <p>Адрес: г. Санкт-Петербург, ул. Мартынова, 35</p>
      </div>
      <div class="contact-item">
        <p>Почта: TEHNODOM@mail.ru</p>
      </div>
      <div class="social-links">
        <p>Наши соцсети:</p>
        <div class="social-icons">
          <a href="https://vk.com/zeragbl" target="_blank" rel="noopener">
            <img src="../assets/vk.png" alt="Вконтакте" class="social-icon" />
          </a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noopener">
            <img src="../assets/telegram.png" alt="Телеграм" class="social-icon" />
          </a>
        </div>
      </div>
    </section>

    <section class="feedback-section">
      <h2 class="section-title">Обратная связь</h2>
      <input
        class="comment"
        type="text"
        placeholder="Ваш комментарий..."
        v-model="comment"
        @keydown.enter.prevent="otprav"
        aria-label="Комментарий"
      />
      <p class="er" v-if="error">{{ error }}</p>
      <button class="btnotprav" @click="otprav">Отправить</button>
    </section>
  </div>
</template>

<style scoped>
/* Контейнер с вертикальным расположением */
.container {
  max-width: 600px;
  margin: 50px auto;
  background: white;
  padding: 30px 40px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Заголовки секций */
.section-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0c7da0;
  border-bottom: 3px solid #0c7da0;
  padding-bottom: 6px;
  text-align: center;
}

/* Секция контактов */
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #333;
  font-size: 16px;
  text-align: center;
}

.contact-item p {
  margin: 0;
}

/* Социальные ссылки */
.social-links {
  margin-top: 15px;
}

.social-links p {
  font-weight: 600;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  width: 36px;
  height: 36px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.social-icon:hover {
  transform: scale(1.15);
}

/* Секция обратной связи */
.feedback-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.comment {
  width: 100%;
  max-width: 480px;
  padding: 12px 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  outline-offset: 2px;
}

.comment:focus {
  border-color: #0c7da0;
  outline: none;
}

.er {
  color: #0c7da0;
  font-weight: 600;
  margin: 0;
  height: 20px;
}

/* Кнопка отправки */
.btnotprav {
  width: 160px;
  height: 45px;
  background-color: #0c7da0;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  user-select: none;
}

.btnotprav:hover {
  background-color: #095a7a;
}

/* Модальное окно */
.modal1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1001;
  cursor: pointer;
}

.modal-main {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 12px;
  width: 400px;
  padding: 30px 20px;
  box-shadow: 0 6px 20px rgba(12, 125, 160, 0.3);
  text-align: center;
  z-index: 1002;
}

.modal1h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #0c7da0;
}

.modal1btn {
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #0c7da0;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

.modal1btn:hover {
  background-color: #095a7a;
}
</style>
