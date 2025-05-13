<script setup>
import { RouterLink } from 'vue-router';
import useProducts from '../composables/useProducts';
import { reactive } from 'vue';
import { computed } from 'vue';

const { products } = useProducts();

const filters = reactive({
    filtercategory: null,
})

const local = reactive({
    mass: products,
})

const filtersproducts = computed(() => {
    let massresult = []
    local.mass.forEach(tovar => {
        const categoryPassed = filters.filtercategory === null ||
            tovar.category === filters.filtercategory;

        if (categoryPassed) {
            massresult.push(tovar);
        }
    });
    return massresult
});
</script>

<template>
    <div class="page-container">
        <div class="filtersbox">
            <div class="filterflex">
                <h2 class="filter-title">Фильтры</h2>
                <form class="form">
                    <div class="radio-group">
                        <input type="radio" id="filter5" v-model="filters.filtercategory" :value="null">
                        <label for="filter5">Все товары</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="filter6" v-model="filters.filtercategory" value="Чайники">
                        <label for="filter6">Чайники</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="filter7" v-model="filters.filtercategory" value="Мультиварки">
                        <label for="filter7">Мультиварки</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="filter8" v-model="filters.filtercategory" value="Кофемашины">
                        <label for="filter8">Кофемашины</label>
                    </div>
                </form>
            </div>
        </div>
        <div class="cards">
            <div class="grid">
                <RouterLink class="card" :to="{ name: 'pageproduct', params: { id: product.id.toString() } }"
                    v-for="product in filtersproducts" :key="product.id">
                    <div class="img-container">
                        <img :src="product.imgproduct" :alt="product.title" class="imgtovar">
                    </div>
                    <div class="card-content">
                        <h3 class="product-title">{{ product.title }}</h3>
                        <p class="product-price">{{ product.price }} ₽</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f8fafc;
}

.filtersbox {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin: 20px auto;
    width: 90%;
    max-width: 1200px;
}

.filterflex {
    display: flex;
    align-items: flex-start;
    gap: 40px;
}

.filter-title {
    color: #0c7da0;
    font-size: 1.5rem;
    margin-bottom: 0;
    min-width: 100px;
}

.form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 5px;
}

.radio-group {
    display: flex;
    align-items: center;
    gap: 8px;
}

.radio-group input[type="radio"] {
    accent-color: #0c7da0;
    width: 16px;
    height: 16px;
}

.radio-group label {
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.2s;
}

.radio-group label:hover {
    color: #0c7da0;
}

.cards {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 40px;
    padding: 0 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(12, 125, 160, 0.15);
}

.img-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    background-color: #f9f9f9;
}

.imgtovar {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.card:hover .imgtovar {
    transform: scale(1.05);
}

.card-content {
    padding: 15px 20px 20px;
    border-top: 1px solid #eee;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.product-title {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #222;
    flex-grow: 1;
}

.product-price {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #0c7da0;
}


.card {
    animation: fadeInUp 0.5s ease forwards;
    opacity: 0;
    transform: translateY(10px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
.card:nth-child(5) { animation-delay: 0.5s; }
.card:nth-child(6) { animation-delay: 0.6s; }
.card:nth-child(7) { animation-delay: 0.7s; }
.card:nth-child(8) { animation-delay: 0.8s; }
.card:nth-child(9) { animation-delay: 0.9s; }

@media (max-width: 768px) {
    .filterflex {
        flex-direction: column;
        gap: 15px;
    }
    
    .form {
        gap: 15px;
    }
    
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
}
</style>