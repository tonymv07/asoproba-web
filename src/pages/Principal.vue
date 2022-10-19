<script>

import Inicio from './Inicio.vue';
import QuienesSomos from './QuienesSomos.vue';
import PuntosVenta from './PuntosVenta.vue';
import Contactanos from './Contactanos.vue';
import Navbar from '../components/Navbar.vue';

export default {
    data() {
        return{
        }
    },
    components:{
        Navbar,
        Inicio,
        QuienesSomos,
        PuntosVenta,
        Contactanos
    }
}
</script>

<template>
    <Navbar/>
    <Inicio/>
    <QuienesSomos/>
    <PuntosVenta/>
    <Contactanos/>

</template>