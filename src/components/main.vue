<script setup></script>
<template>
    <div class="flex">
        <div class="company-info">
            <p class="logo">TEHNODOM</p>
            <p class="slogan">Интернет-магазин мелкой бытовой техники</p>

        </div>
        
    </div>
    <main>
    <RouterView />

    <section class="info-block" style="margin: 2rem auto; padding: 5px; max-width: 900px; font-family: 'Oswald', sans-serif; color: #222;">
        <h2 style="font-size: 1.8rem; margin-bottom: 1rem; color: #000; text-align: center; color: #0c7da0;">Немного о наших товарах</h2>
        <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: space-between; color: #0c7da0;">
            <article style="flex: 1 1 280px; background: #f9f9f9; padding: 1rem; border: solid; border-radius: 6px; box-shadow: 0 0 8px rgba(0,0,0,0.1);">
                <h3 style="margin-top: 0; color: #000; text-align: center; color: #0c7da0;">Чайники</h3>
                <p style="text-align: center;">Чайники быстро и удобно кипятят воду. В нашем ассортименте есть классические и электрические модели разных дизайнов.</p>
            </article>
            <article style="flex: 1 1 280px; background: #f9f9f9; padding: 1rem; border: solid; border-radius: 6px; box-shadow: 0 0 8px rgba(0,0,0,0.1);">
                <h3 style="margin-top: 0; color: #000; text-align: center; color: #0c7da0;">Кофемашины</h3>
                <p style="text-align: center;">Современные кофемашины для дома и офиса с множеством функций для приготовления ароматного кофе.</p>
            </article>
            <article style="flex: 1 1 280px; background: #f9f9f9; padding: 1rem; border: solid; border-radius: 6px; box-shadow: 0 0 8px rgba(0,0,0,0.1);">
                <h3 style="margin-top: 0; color: #000; text-align: center; color: #0c7da0;">Мультиварки</h3>
                <p style="text-align: center;">Универсальные мультиварки, которые помогут быстро и просто приготовить разнообразные блюда.</p>
            </article>
        </div>
    </section>
</main>

</template>


<style scoped>
.opisanie {
    width: 800px;
    margin-left: 300px;
    margin-top: 40px;
    margin-bottom: 80px;
}

.about {
    margin-left: 650px;
    margin-top: 40px;
}

hr {
    margin-left: 20px;
}

.flex {
    display: flex;
    gap: 100px;
    justify-content: center;
}

.flexbox {
    display: flex;
    gap: 20px;
}

.viravn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col1 {
    background-color: rgb(31, 32, 37);
}

.col2 {
    background-color: rgb(31, 32, 37);
}

.col3 {
    background-color: rgb(31, 32, 37);
}

.box {
    margin-top: 20px;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    font-weight: 300;
}







.company-info {
    width: 300px;
    padding: 89px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 200px;
    margin-top: 20px;
}

.logo {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    color: #0c7da0;
}

.slogan {
    font-size: 16px;
    color: #0c7da0;
    margin-bottom: 20px;
    line-height: 1.4;
}

.products-title {
    font-size: 18px;
    font-weight: 600;
    color: #222;
    margin-bottom: 10px;
    text-align: center;
}

.products-list {
    list-style-type: none;
    padding-left: 0;
}

.product-item {
    padding: 8px 15px;
    margin-bottom: 8px;
    background-color: black;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 16px;
    color: white;
    text-align: center;
}

.product-item:hover {
    background-color: #0c7da0;
    color: white;
    transform: translateX(5px);
}




.about-section {
    width: 800px;
    margin-left: 250px;
    margin-bottom: 80px;
    margin-top: 80px;
}

.about-title {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    margin-top: 40px;
    margin-left: 360px;
}


.about-description {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    text-align: justify;
}

.about-features {
    margin: 20px 0;
    padding-left: 20px;
}
</style>