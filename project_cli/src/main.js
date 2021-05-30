import { createApp } from 'vue'
// Подключение стилей
import './style.css'
import App from './App.vue'
import Header from './TheHeader'
import TheHeader from "./TheHeader";

const app = createApp(App)


// Глобальная регистрация компонента
app.component('the-header', TheHeader)

app.mount('#app')
