import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/reset.css'



// import Swiper from 'swiper';
// import { Navigation, Pagination, Mousewheel, Grid  } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/grid';

const app = createApp(App)

app.use(router)

app.mount('#app')
