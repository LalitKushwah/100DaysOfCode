import App from './App.vue'
import { createApp } from 'vue';
import { VueBootstrap } from 'bootstrap-vue';

const app = createApp(App);

app.use(VueBootstrap);

app.mount('#app');
