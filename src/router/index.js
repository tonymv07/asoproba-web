import {createRouter , createWebHashHistory} from 'vue-router';

import Principal from '../pages/Principal.vue';
import Inicio from '../pages/Inicio.vue';
import QuienesSomos from '../pages/QuienesSomos.vue';
import PuntosVenta from '../pages/PuntosVenta.vue';
import Contactanos from '../pages/Contactanos.vue';

const routes = [
    {path: '/', component: Inicio},
    {path: '/quienes-somos', component: QuienesSomos},
    {path: '/puntos-de-venta', component: PuntosVenta},
    {path: '/contactenos', component: Contactanos},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

