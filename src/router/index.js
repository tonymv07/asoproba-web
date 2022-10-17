import {createRouter , createWebHashHistory} from 'vue-router';

import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';

const routes = [
    {path: '/', component: Navbar},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

