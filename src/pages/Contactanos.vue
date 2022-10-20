<script>
import Navbar from '../components/Navbar.vue';


export default {
    data() {
        return{
            nombre: '',
            numero: '',
            correo: '',
            msg: ''
        }
        
    },
    methods: {
        clickSend(){
            console.log(this.nombre)
            console.log(this.numero)
            console.log(this.correo)
            console.log(this.msg)
        }
    },
    components:{
        Navbar,
    }
}
</script>

<template>
    <Navbar/>
    <div class="row form">
        <div class="col-md-6">
            <div class="form-outline mb-4">
            <input type="text" id="form4Example1" class="form-control" v-model="nombre"/>
            <label class="form-label" for="form4Example1">Nombre</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-outline mb-4">
            <input type="text" id="form4Example1" class="form-control" v-model="numero"/>
            <label class="form-label" for="form4Example1">Número</label>
            </div>
        </div>
        <div class="form-outline mb-4">
            <input type="email" id="form4Example2" class="form-control" v-model="correo"/>
            <label class="form-label" for="form4Example2">Direccíon de correo</label>
        </div>
        <div class="form-outline mb-4">
            <textarea class="form-control" id="form4Example3" rows="4" v-model="msg"></textarea>
            <label class="form-label" for="form4Example3">Mensaje</label>
        </div>
        <button class="btn btn-primary btn-send" v-on:click="clickSend()">Enviar</button>
    </div>

</template>



<style scoped>
    .form{
        margin-top: 2%;
        margin-left: 15%;
        margin-right: 15%;
        display: flex;
        justify-content:center;
    }

    .btn-send{
        margin-top: 3%;
        margin-bottom: 15%;
        width: 10%;
       
    }

</style>