import { computed, reactive, watch, ref } from "vue";

const basketproducts = ref([]);
try {
    if (localStorage.getItem("basketproducts") === null) {
        basketproducts.value = [
            
        ]
    }
    else {
        basketproducts.value = JSON.parse(localStorage.getItem("basketproducts"))
    }
}

catch (error) {
    basketproducts.value = [
       
    ]
}

watch(
    basketproducts,
    (newValue) => {
        localStorage.setItem("basketproducts", JSON.stringify(newValue))
    },
    {deep: true}
)

function addProductbasket(productId, authorizationpolzovatelId) { 
    basketproducts.value.push ({
        productId: productId,
        authorizationpolzovatelId: authorizationpolzovatelId,
        countproduct: 1,
    })
}

function deleteProductbasket(productId) {
    const index = basketproducts.value.findIndex(
        item => item.productId === productId
    );
    if (index !== -1) {
        basketproducts.value.splice(index, 1);
        return true; 
    }
    
    return false; 
}




export default function useBasket() {
    return { basketproducts, addProductbasket, deleteProductbasket};
}




// localStorage.clear()