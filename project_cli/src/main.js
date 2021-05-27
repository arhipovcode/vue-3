import { createApp } from 'vue'
// Подключение стилей
import './style.css'
import App from './App.vue'
import Header from './Header'

const app = createApp(App)


// Глобальная регистрация компонента
app.component('header', Header)

app.mount('#app')
