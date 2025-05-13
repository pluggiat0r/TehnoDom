<script setup>
import { reactive, ref } from 'vue';
import useUsers from "../composables/useUsers"
import { RouterLink } from 'vue-router';


const users = useUsers().users

const authorizationpolzovatel = useUsers().authorizationpolzovatel



const znachpol = reactive({
    name: null,
    password: null,
    email: null,
})

const regular = reactive({
    reg1: /^[А-ЯЁA-Z][А-Яа-яЁёA-Za-z]{3,9}$/,
    reg2: /^[а-яА-ЯёЁa-zA-Z0-9!?]{4,10}$/,
    reg3: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
})



const errors = reactive({
    ername: '',
    erpassword: '',
    eremail: '',
})

function zareg() {

    if (!znachpol.name) {
        errors.ername = 'Введите имя!';
    } else if (!regular.reg1.test(znachpol.name)) {
        errors.ername = 'Имя должно быть от 4 до 10 символов, начинаться с заглавной буквы и содержать только кириллицу или латиницу!.';
    } else {
        errors.ername = '';
    }


    if (!znachpol.password) {
        errors.erpassword = 'Введите пароль!';
    } else if (!regular.reg2.test(znachpol.password)) {
        errors.erpassword = 'Пароль должен содержать от 4 до 10 символов: буквы - кириллицу/латиницу, цифры, ! или ?';
    } else {
        errors.erpassword = '';
    }


    if (!znachpol.email) {
        errors.eremail = 'Введите адрес электронной почты';
    } else if (!regular.reg3.test(znachpol.email)) {
        errors.eremail = "Данного почтового ящика несуществует!"
    } else {
        errors.eremail = '';
    }

    users.value.forEach(user => {
        if (znachpol.name == user.name) {
            errors.ername = "Пользователь с данным именем уже зарегистрирован";
        }
    });

    users.value.forEach(user => {
        if (znachpol.email == user.email) {
            errors.eremail = "Пользователь с данной почтой уже зарегистрирован";
        }
    });



    if (!errors.ername && !errors.erpassword && !errors.eremail) {
        useUsers().addUser(znachpol.name, znachpol.password, znachpol.email)
        mainbull.mod1 = true
        znachpol.name = null
        znachpol.password = null
        znachpol.email = null
    }

}

const mainbull = reactive({
    mod1: false,
})

function pon() {
    mainbull.mod1 = false
}

</script>
<template>
    <div class="modal1" v-if="mainbull.mod1">
        <div class="modal-main">
            <h2 class="modal1h2">Аккаунт зарегестрирован</h2>
            <button class="modal1btn" @click="pon()">Понял</button>
        </div>
        <div class="modal-back"></div>
    </div>
    <form>
        <p class="size">Регистрация пользователя</p>
        <label for="inp1">Имя</label><input type="text" id="inp1" placeholder="Введите имя" v-model="znachpol.name"
            title="Имя должно быть от 4 до 10 символов, начинаться с заглавной буквы и содержать только буквы (русские или английские)."><br>
        <p class="osh">{{ errors.ername }}</p>
        <label for="inp2">Пароль</label><input type="text" id="inp2" placeholder="Введите пароль"
            v-model="znachpol.password"
            title="Пароль должен содержать от 4 до 10 символов: буквы (русские/английские), цифры, ! или ?"><br>
        <p class="osh">{{ errors.erpassword }}</p><br>
        <label for="inp3">Почта</label><input type="text" id="inp3" placeholder="Введите почту"
            v-model="znachpol.email"><br>
        <p class="osh">{{ errors.eremail }}</p>
        <button id="inp-regestration" @click.prevent="zareg()">Зарегестрироваться</button>
        <p>Вы уже Зарегестрированы? <RouterLink :to="{ name: 'authorization' }" title="Личный кабинет">
                Авторизуйтесь</RouterLink>
        </p>
    </form>


</template>
<style scoped>
input {
    margin-left: 20px;
}

.size {
    font-size: 24px;
}

form {
    margin-left: 520px;
    margin-top: 40px;
    width: 400px;
    border: solid black;
    text-align: center;
}

#inp1,
#inp2,
#inp3 {
    height: 20px;
    width: 200px;
}



#inp2 {
    margin-top: 20px;
}

#inp-regestration {
    margin-top: 20px;
    background-color: black;
    color: white;
    width: 150px;
    height: 40px;
    border-radius: 3px;
    font-weight: bold;
    border: none;
}

#inp-regestration:hover {
    background-color: #0c7da0;
}

.osh {
    color: #0c7da0;
}


.modal1 {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
}

.modal-main {
    background-color: white;
    border: 1px solid black;
    height: 250px;
    width: 500px;
}

.modal-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: white;
    opacity: 0.5;

}

.modal1h2 {
    position: relative;
    z-index: 1001;
    margin-left: 80px;
}

.modal1btn {
    position: relative;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    z-index: 1002;
    background-color: black;
    color: white;
    font-weight: bold;
    border: none;
    margin-left: 200px;
    margin-top: 40px;
}

.modal1btn:hover {
    background-color: #0c7da0;
}
</style>