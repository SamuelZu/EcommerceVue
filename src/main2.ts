import { createApp } from "vue";
//import { createPinia } from "pinia";

import Contador from "./Contador.vue";
//import "./assets/main.css";

//const app = createApp(Contador);

app.use(createPinia());

app.mount("#app");
