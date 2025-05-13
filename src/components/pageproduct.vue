<script setup>

import { RouterLink, useRoute, useRouter } from 'vue-router';
import useProducts from '../composables/useProducts';
import { computed, reactive, ref } from 'vue';
import useUsers from '../composables/useUsers';
import useBasket from '../composables/useBasket';

const basketproducts = useBasket().basketproducts
const route = useRoute()
const products = useProducts().products;
const authorizationpolzovatel = useUsers().authorizationpolzovatel
const localproduct = computed(() => useProducts().findProduct(Number(route.params.id)))

const statusproductbasket = ref()

function dobavincorsina(productId, authorizationpolzovatel) {
    statusproductbasket.value = "";
    if (authorizationpolzovatel >= 0) {
        basketproducts.value.forEach(basketproduct => {
            if ((basketproduct.productId == productId) && (basketproduct.authorizationpolzovatelId == authorizationpolzovatel)) {
                statusproductbasket.value = "Товар уже добавлен в корзину";
            }
        });
        if (!statusproductbasket.value) {
            useBasket().addProductbasket(productId, authorizationpolzovatel);
        }
    } else {
        alert("Нет авторизованного пользователя");
    }
}




</script>

<template>

    <section>
        <div class="card-product">
            <img :src=localproduct.imgproduct alt="" class="imgtovar">
            <div class="datatovar">
                <p class="title">{{ localproduct.title }}</p>
                <p>{{ localproduct.description }}</p>
                <p class="pricetop">Цена:{{ localproduct.price }}</p>
                <p class="uzedobav">{{ statusproductbasket }}</p>
                <button class="btncorsina" @click="dobavincorsina(localproduct.id, authorizationpolzovatel)">
                    В Корзину
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.uzedobav {
    color: #0c7da0;
}

.title {
    font-size: 22px;
}

.btncorsina {
    width: 100px;
    height: 30px;
    background-color: black;
    color: white;
    border: none;
    font-family: 600;
}

.btncorsina:hover {
    background-color: #0c7da0;
}

.pricetop {
    margin-top: 20px;
}

.card-product {
    display: flex;
    gap: 120px;
    margin-top: 100px;
    margin-left: 100px;
    margin-bottom: 40px;

}

.imgtovar {
    width: 300px;
    height: 300px;
    margin-left: 25px;
}

.datatovar {
    width: 550px;
    padding: 20px;
    background-color: white;
}


.titlearticul {
    height: 100px;
}

.flexprice {
    display: flex;
    gap: 20px;
    margin-top: 280px;
}

.discountbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    background-color: #0c7da0;
    border-radius: 10px;
}

.discountflex {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btnpagetovar {
    display: flex;
    gap: 10px;
}

.inbasket {
    background-color: black;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    width: 100px;
    border: none;
}

.inbasket:hover {
    background-color: #0c7da0;
}
</style>