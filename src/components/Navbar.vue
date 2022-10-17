<script>
export default {
    data(){
        return{
            options: [
                {title: 'Inicio', path:'#'},
                {title: '¿Quiénes somos?', path:'#'},
                {title: 'Puntos de venta', path:'#'},
                {title: 'Contáctenos', path:'#'}
            ]
        }
    }
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbar-center">
                <li class="nav-item navbar-item" v-for="it in options" v-bind:key="it">
                <a class="nav-link active" :href="it.path">{{it.title}}</a>
               
                </li>
            </ul>
            </div>
    </div>
    </nav>
</template>

<style scoped>
@import '../assets/css/navbar.css';
</style>