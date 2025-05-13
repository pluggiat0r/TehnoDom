<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import useUsers from "../composables/useUsers"
import { RouterLink } from 'vue-router';

const users = useUsers().users

const authorizationpolzovatel = useUsers().authorizationpolzovatel
const router = useRouter();

const znachpolauth = reactive({
    nameauth: null,
    passwordauth: null,
    emailauth: null,
})

const errorsauth = reactive({
    ernameauth: '',
    erpasswordauth: '',
    ertemailauth: '',
    ernotpolzovatel: '',
})

function avtoriz() {

    if (znachpolauth.nameauth == null) {
        errorsauth.ernameauth = "Ошибка. Введено пустое поле"
    }
    else {
        errorsauth.ernameauth = ''
    }

    if (znachpolauth.passwordauth == null) {
        errorsauth.erpasswordauth = "Ошибка. Введено пустое поле"
    }
    else {
        errorsauth.erpasswordauth = ''
    }

    if (znachpolauth.emailauth == null) {
        errorsauth.ernotpolzovatel = "Ошибка. Введено пустое поле"
    }
    else {
        errorsauth.ernotpolzovatel = ''
    }


    if ((znachpolauth.nameauth != null) && (znachpolauth.passwordauth != null) && (znachpolauth.emailauth != null)) {
        // Ищем пользователя
        const foundUser = users.value.find(user =>
            znachpolauth.nameauth == user.name &&
            znachpolauth.passwordauth == user.password && znachpolauth.emailauth == user.email
        );

        if (foundUser) {
            useUsers().setAuthorizedUser(foundUser)
            router.push('/account')
            znachpolauth.nameauth = null
            znachpolauth.passwordauth = null
            znachpolauth.emailauth = null
        } else {
            errorsauth.ernotpolzovatel = "Пользователь не зарегестрирован!"
        }
    }

}


</script>

<template>
    <form>
        <p class="size">Авторизация пользователя</p>
        <label for="inp3">Имя</label><input type="text" id="inp3" placeholder="Введите имя"
            v-model="znachpolauth.nameauth">
        <p class="osh">{{ errorsauth.ernameauth }}</p>
        <label for="inp4">Пароль</label><input type="text" id="inp4" placeholder="Введите пароль"
            v-model="znachpolauth.passwordauth">
        <p class="osh">{{ errorsauth.erpasswordauth }}</p><br>
        <label for="inp5">Почта</label><input type="text" id="inp5" placeholder="Введите почту"
            v-model="znachpolauth.emailauth">
        <p class="osh">{{ errorsauth.ertemailauth }}</p>
        <p class="osh">{{ errorsauth.ernotpolzovatel }}</p>
        <button id="inp-authorization" @click.prevent="avtoriz()">Авторизоваться</button>
        <p>Вы не авторизованы? <RouterLink :to="{ name: 'regestration' }" title="Личный кабинет">
                Зарегестрируйтесь</RouterLink>
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

#inp3,
#inp4,
#inp5 {
    height: 20px;
    width: 200px;
}


#inp4 {
    margin-top: 20px;
}

#inp-authorization {
    margin-top: 20px;
    background-color: black;
    color: white;
    width: 150px;
    height: 40px;
    font-weight: bold;
    border: none;
    transition: transform 0.3s ease;
}

#inp-authorization:hover {
    background-color: #0c7da0;
}

.osh {
    color: #0c7da0;
}
</style>