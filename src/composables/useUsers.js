import { computed, reactive, watch, ref } from "vue";

const authorizationpolzovatel = ref()

function setAuthorizedUser(user) {
    authorizationpolzovatel.value = user.id;
}

const users = ref([]);

try {
    if (localStorage.getItem("users") === null) {
        users.value = [{id: 0, name: "AlexGrachev",password: "1234", email: "alex1234@email.ru"}]
    }
    else {
        users.value = JSON.parse(localStorage.getItem("users"))
    }
}

catch (error) {
    users.value = [{id: 0, name: "AlexGrachev",password: "1234", email: "alex1234@email.ru"}]
}

watch(
    users,
    (newValue) => {
        localStorage.setItem("users", JSON.stringify(newValue))
    },
    {deep: true}
)

if (localStorage.getItem("authorizationpolzovatel")) {
    authorizationpolzovatel.value = Number(localStorage.getItem("authorizationpolzovatel"));
}else{
    authorizationpolzovatel.value = NaN
}
  

watch(
    authorizationpolzovatel,
    (newValue) => {
        localStorage.setItem("authorizationpolzovatel", newValue);
    }
);








function addUser(userName, userPassword, userEmail) { 

    const newUserId = users.value[users.value.length-1].id +1
    
    users.value.push ({
        
        id: newUserId,
        name: userName,
        password: userPassword,
        email: userEmail,
    })
}




function findUser(userId) { 
    return users.value.find((user)=>user.id === userId)  
}


function deleteUser(deletedUserId) {
    const deletedUserPos = users.value.indexOf(findUser(deletedUserId))
    users.value.splice(deletedUserPos,1)
}

export default function useUsers () {
    return {users, authorizationpolzovatel, addUser, findUser, deleteUser, setAuthorizedUser}
}


console.log(users.value)