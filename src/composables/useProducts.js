import { computed, reactive, watch, ref } from "vue";

import img0 from "../assets/img0.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img9 from "../assets/img9.png"




const products = ref([]);
try {
    if (localStorage.getItem("products") === null) {
        products.value = [
            {id: 0, title: "Чайник для дома", description: "Не ломается", imgproduct: img0, price: "2000", category: "Чайники"},
            {id: 1, title: "Чайник PHILIPS", description: "Качество прямиком из Нидерландов", imgproduct: img1, price: "4000", category: "Чайники"},
            {id: 2, title: "Чайник для дачи", description: "Бабуле многое не надо", imgproduct: img2, price: "800", category: "Чайники"},
            {id: 3, title: "Мультиварка для дома", description: "А студенту более и не надо", imgproduct: img3, price: "1850", category: "Мультиварки"},
            {id: 4, title: "Мультиварка Toyota", description: "Варит так-же как едет", imgproduct: img4, price: "4000", category: "Мультиварки"},
            {id: 5, title: "Мультиварка Ebebeb", description: "Если вы професснионал, то это вариант для вас", imgproduct: img5, price: "10000", category: "Мультиварки"},
            {id: 6, title: "Кофемашина Эльбрус", description: "Устройство для профессоналов/кофеен", imgproduct: img6, price: "80000", category: "Кофемашины"},
            {id: 7, title: "Кофемашина Node", description: "Хорошо подходит для новичков в кофеварении", imgproduct: img7, price: "30000", category: "Кофемашины"},
            {id: 9, title: "Кофемашина Gang", description: "Бюджетый вариант", imgproduct: img9, price: "19999", category: "Кофемашины"},
        ]
    }
    else {
        products.value = JSON.parse(localStorage.getItem("products"))
    }
}

catch (error) {
    products.value = [
        {id: 0, title: "Кожаные чехлы на автомобильные сиденья для Kia Sportage", description: "идеальное решение для защиты вашего устройства! Этот чехол выполнен из высококачественного материала, который обеспечивает прочность и долговечность, сохраняя при этом элегантный внешний вид.", imgproduct: img0, price: "1500", category: "Чехлы"},
        {id: 1, title: "Чехлы для сидений для автомобиля hyundai KONA", description: "Превратите салон своего авто в уютное и аккуратное пространство с этим удобным и практичным чехлом синего цвета. Идеальное решение для защиты обивки от грязи, износа и повседневных повреждений.", imgproduct: img1, price: "1600", category: "Чехлы"},
        {id: 2, title: "Кожаные чехлы для сидений автомобиля Buick Enclave Envision Encore Verano", description: "Преобразите салон своего автомобиля с этими эксклюзивными чехлами из натуральной кожи золотого оттенка – идеальное сочетание безупречного стиля, комфорта и долговечности.", imgproduct: img2, price: "1700", category: "Чехлы"},
        {id: 3, title: "Классические черные коврики", description: "Создайте идеальный порядок в салоне вашего авто с этими универсальными черными ковриками. Они не только защитят оригинальное покрытие от грязи, влаги и износа, но и добавят интерьеру аккуратный и солидный вид.", imgproduct: img3, price: "1500", category: "Коврики"},
        {id: 4, title: "Коврики Lexus NX", description: "Превратите салон своего Lexus NX в образец аккуратности и уюта с этими авторскими ковриками, разработанными специально для вашей модели. Идеальная посадка, премиальные материалы и стильный дизайн – все, что достойно настоящего Lexus.", imgproduct: img4, price: "1600", category: "Коврики"},
        {id: 5, title: "Кожанные коврики Infinity qx70", description: "Подчеркните статус своего INFINITI QX70 с этими эксклюзивными кожаными ковриками, созданными для истинных ценителей премиального качества. Идеальная посадка, натуральные материалы и изысканный дизайн – каждая деталь продумана для вашего комфорта.", imgproduct: img5, price: "1700", category: "Коврики"},
        {id: 6, title: "R300 wideorejestrator navitel gps + карта 32gb", description: "Обеспечьте себе максимальную безопасность и уверенность за рулем с R300 Wideorejestrator Navitel GPS – современным гаджетом, который сочетает функции Full HD-регистратора и точного GPS-навигатора. В комплекте – карта памяти 32 ГБ, чтобы вы могли сразу начать пользоваться устройством.", imgproduct: img6, price: "1500", category: "Видеорегистраторы"},
        {id: 7, title: "Видеорегистратор Navitel R500 GPS", description: "Повысьте уровень безопасности и комфорта за рулём с видеорегистратором Navitel R500 GPS — современным устройством, сочетающим сверхчёткую запись в 2K-разрешении, встроенный GPS-навигатор и умные системы предупреждения.", imgproduct: img7, price: "1600", category: "Видеорегистраторы"},

        {id: 9, title: "Видеорегистратор AZDOME 2A297-LS01D M300", description: "Видеорегистратор AZDOME M300 (2A297-LS01D) — мощное 4K UHD-устройство с 170° обзором, ночным видением Starvis 2.0, системой ADAS и GPS, обеспечивающее кристально четкую запись и интеллектуальную безопасность на дороге.", imgproduct: img9, price: "1800", category: "Видеорегистраторы"},
    ]
}

watch(
    products,
    (newValue) => {
        localStorage.setItem("products", JSON.stringify(newValue))
    },
    {deep: true}
)


function findProduct(productId) { 
    return products.value.find((product)=>product.id === productId)  
}


export default function useProducts () {
    return {products, findProduct}
}