<script>

import Navbar from '../components/Navbar.vue';

export default {
    data() {
        return{

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
        <div class="col-6 col-text">
            <div class="row row-text">
                <h1>¿Quiénes Somos?</h1>
                <p class="description">Somos un grupo de pequeños productores dedicados a la producción y comercialización principalmente de maíz y frijol de alta 
                    calidad y 100% Costarricenses. Estamos ubicados en el distrito de Pejibaye que es considerado como parte 
                    de la denominada zona granera y sus productores cuentan con amplio arraigo en el cultivo de granos básicos.
                </p>
                <img src="https://res.cloudinary.com/dsdsfs/image/upload/v1666229402/Asoproba/logofrase-removebg-prev_jma1vg.png" class="d-block w-50 img-1" alt="...">
            </div>
        </div>
        <div class="col-6 right">    
        </div>
    </div>
    </div>

    <!-- <div class="container-fluid ">
        <div class="row background">
            <div class="col-6">
                <div class="row row-text">
                    <div class="col-6 col-text">
                        <div class="text-center">
                            <h1>¿Quiénes Somos?</h1>
                            <p>Somos un grupo de pequeños productores dedicados a la producción y comercialización principalmente de maíz y frijol de alta calidad y 100% Costarricenses. Estamos ubicados en el distrito de Pejibaye 
                                que es considerado como parte de la denominada zona granera y sus productores cuentan con amplio arraigo en el cultivo de granos básicos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <img src="https://res.cloudinary.com/dsdsfs/image/upload/v1666208261/Asoproba/wepik-photo-mode-2022919-133732_wcxscz.png" class="d-block w-100" alt="...">
            </div>
        </div>
    </div> -->
</template>

<style scoped>
@import '../assets/css/quienessomos.css';
</style>