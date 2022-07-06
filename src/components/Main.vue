<template>
    <header class="head">
        <div class="row">
            <div class="col-md-4">
                <img alt="Vue logo" class="logo" src="https://res.cloudinary.com/dsdsfs/image/upload/v1657057075/Asoproba/frijol_zxslev.png"/>
            </div>
            <div class="col-md-4">
                <div class="row contact">
                    <img alt="Vue logo" class="movil" src="https://res.cloudinary.com/dsdsfs/image/upload/v1657057922/Asoproba/telefono-movil_fvmloh.png"/>
                    <div class="col-md-6">
                        <h6>Télefono: <span class="number">{{telefono}}</span></h6>
                        <span>{{correo}}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row location">
                    <img alt="Vue logo" class="ubi" src="https://res.cloudinary.com/dsdsfs/image/upload/v1657057924/Asoproba/marcador-de-posicion_dkpopk.png"/>
                    <div class="col-md-6 ">
                        <h6>Ubicación: <span class="number">{{lugar}}</span></h6>
                        <span>{{privPais}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light nav">
        <div class="container-fluid">
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav navbuttons">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                <a v-for="but in buttons" v-bind:key="but" class="nav-link" href="#">{{but}}</a>
            </div>
            </div>
        </div>
    </nav>
    <Contactanos/>
    
</template>

<script>

import Contactanos from '../components/Contactanos.vue';

export default {
    data() {
        return{
            telefono: '(506)8888-8888',
            correo: 'info@asoproba.com',
            lugar: 'Colinas, Buenas Aires,',
            privPais: 'Pérez Zeledón, Costa Rica.',
            buttons: ['¿Quiénes somos?','¿Dónde comprar?','Contáctenos']
        }
    },
    components:{
        Contactanos
    }
}
</script>

<style scoped>
    .head{
        width: 100%;
        background-color: rgb(255, 255, 255);
        height: 130px;
        display: flex;
    }

    .test{
        background-color: blueviolet;
        border: 1px solid black;
    }

    .logo{
        width: 18%;
        float: right;
        margin-right: 10%;
        margin-top: 1%;
        margin-bottom: 1%;
        display: flex;
    }

    .movil{
        width: 13%;
    }

    .ubi{
        width: 12%;
    }

    .number{
        font-weight: normal;
    }

    .contact{
        margin-top: 7%;
        margin-left: 20%;
    }

    .location{
        margin-top: 7%;
        float: left;
    }

    .direccion{
        margin-right: 30%;
    }

    .nav{
        background-color: #1EB82D;
    }

    .navbuttons{
        margin-left: 24%;
    }
</style>