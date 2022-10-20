<script>

import Navbar from '../components/Navbar.vue';

export default {
    data() {
        return{
            puntos:["Coopeatenas R.L.","Coopepalmares R.L.","Coopronaranjo R.L.","Coopeagri R.L.","Coopeasa R.L.","Apacoop R.L."]

        }
    },
    components:{
        Navbar,
    }
}
</script>


<template>
    <Navbar/>
        <div class="container-fluid">
        <div class="row background">
        <div class="col-6 right">    
        </div>
        <div class="col-6 col-text">
            <div class="row row-text">
                <h1>Puntos de Venta</h1>
                <ul class="description">
                <li v-for="it in puntos" v-bind:key="it" class="list-group-item">{{it}}</li>
                </ul>
                <img src="https://res.cloudinary.com/dsdsfs/image/upload/v1666229402/Asoproba/logofrase-removebg-prev_jma1vg.png" class="d-block w-50 img-1" alt="...">
            </div>
        </div>
 
    </div>
    </div>
</template>

<style scoped>
@import '../assets/css/puntosventa.css';
</style>