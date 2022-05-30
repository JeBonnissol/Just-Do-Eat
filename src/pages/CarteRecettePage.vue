
<template>
    <div class="logo">
        <img alt="Menu-JDE" src="../assets/burger.png" >
        <router-link to="/"> <img alt="Logo-JDE" src="../assets/JDE.png"></router-link>
        <img alt="search-JDE" src="../assets/fa_search.png">
    </div>
    <section>
        <div class="imgBox">
            <h1>Découvrez de superbes recettes !</h1>
        </div>
        <div class="homepage">
                <CarteRecette 
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"/>
            
        </div>
    </section> 
</template>

<script>
import api from '@/plugins/axios'
import CarteRecette from '@/components/CarteRecette.vue'
export default {
    components: {
        CarteRecette,
    },
    data() {
        return {
            reciepes: []
        }
    },
    mounted () {
        api.get('reciepes?populate=*').then((response) => {
            this.reciepes = response.data.data
            console.log(this.reciepes)
        });
    },
}
</script>

<style scoped>
.homepage{
    display: flex;
    justify-content: center;
}

section{
    position: relative;
    display: block;
    height:75vh;
    width: 100%;
}

.imgBox{
    display: flex;
    position:relative;
    width: 100%;
    background: url("../assets/fond.png");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
}

.imgBox h1{
    color:white;
    font-family: Titillium;
    font-weight:600;
    font-size:60px;
}

@media screen and (max-width:1200px){
    .homepage{
        display:block;
        margin-left:auto;
        margin-right:auto;
    }
    
    .imgBox h1{
        text-align:center;
        font-size:35px;
    }
    .card:nth-child(2){
        margin-top:0;
    }
}
</style>