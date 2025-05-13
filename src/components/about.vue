<template>
  <div class="about-page">
    <section class="about-header">
      <div class="container">
        <h1 class="page-title">О нас</h1>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-description">
          <p>
            <strong>TehnoDom</strong> – это современный маркетплейс мелкой бытовой техники для дома. 
            Мы специализируемся на продаже качественных чайников, кофемашин, мультиварок и других кухонных гаджетов. 
            В нашем ассортименте – только проверенные товары от надежных производителей.
          </p>
        </div>

        <div class="advantages-section">
          <h2 class="advantages-title">Наши преимущества:</h2>
          
          <div class="advantages-list">
            <div 
              v-for="advantage in advantages" 
              :key="advantage.title" 
              class="advantage-item"
            >
              <div class="advantage-icon">
                <i :class="advantage.icon"></i>
              </div>
              <div class="advantage-text">
                <h3>{{ advantage.title }}</h3>
                <p>{{ advantage.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mission-section">
          <p>
            Мы тщательно выбираем ассортимент, чтобы предложить вам лучшее сочетание цены, функциональности и дизайна. 
            <strong>TehnoDom</strong> – это умная техника, которая делает вашу жизнь удобнее, а приготовление еды и напитков – приятнее.
          </p>
          
          <p class="mission-statement">
            Наша цель – помочь вам создать уютный и технологичный дом без лишних хлопот. 
            Доверяйте экспертам – выбирайте <strong>TehnoDom</strong>!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const advantages = ref([
  {
    title: 'Надёжность',
    description: 'Вся техника сертифицирована и прошла строгий контроль.',
    icon: 'fas fa-shield-alt'
  },
  {
    title: 'Скорость',
    description: 'Быстрая доставка по всей России, от Москвы до Владивостока.',
    icon: 'fas fa-truck'
  },
  {
    title: 'Экспертиза',
    description: 'Поможем выбрать идеальный прибор под ваши задачи.',
    icon: 'fas fa-headset'
  }
])

onMounted(() => {
  document.title = 'О нас - TehnoDom'
})
</script>

<style scoped>
.about-page {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #000000;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-header {
  background-color: #f8f9fa;
  padding: 40px 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  color: #000000;
  margin: 0;
}

.about-content {
  padding: 50px 0;
}

.about-description {
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.advantages-section {
  margin: 50px 0;
}

.advantages-title {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 40px;
}

.advantages-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.advantage-item {
  flex: 1 1 300px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.advantage-icon {
  font-size: 2rem;
  color: #0c7da0;
  margin-top: 5px;
}

.advantage-text h3 {
  margin-top: 0;
  color: #000000;
  font-size: 1.3rem;
}

.mission-section {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  margin-top: 50px;
}

.mission-statement {
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 20px;
}

strong {
  color: #0c7da0;
  font-weight: 600;
  
}

@media (max-width: 768px) {
  .advantages-list {
    flex-direction: column;
  }
  
  .page-title {
    font-size: 2rem;
    text-align: center;
  }
}
</style>