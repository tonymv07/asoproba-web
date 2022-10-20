<script>
export default {
    data(){
        return{
            options: [
                {title: 'Inicio', path:'/'},
                {title: '¿Quiénes somos?', path:'/quienes-somos'},
                {title: 'Puntos de venta', path:'/puntos-de-venta'},
                {title: 'Contáctenos', path:'/contactenos'}
            ]
        }
    }
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark bg-navbar">
        <div class="container-fluid">
            <img src="https://res.cloudinary.com/dsdsfs/image/upload/v1666210414/Asoproba/logosinfrijol_oyfa7z.png" class="navbar-brand logo-navbar" alt="...">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbar-center">
                <li class="nav-item navbar-item" v-for="it in options" v-bind:key="it">
                <router-link class="nav-link options" :to="it.path">{{it.title}}</router-link>
                </li>
            </ul>
            </div>
    </div>
    </nav>
</template>

<style scoped>
@import '../assets/css/navbar.css';
</style>