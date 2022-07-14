
import '../bootstrap';
import {axios} from 'axios'
import {createApp} from "vue";
import App from './App.vue'
import router from "./Router/router";



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


    createApp(App)
    .use(router)
    .use(axios)
    .mount('#app')

