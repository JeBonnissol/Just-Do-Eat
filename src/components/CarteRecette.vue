<template>
<router-link :to="'/page-recette/'+reciepe.id">
    <div class="card">
        <div class="image">
            <img :src="reciepe.attributes.Image.data.attributes.url">
        </div>
        <h2>{{ reciepe.attributes.Name }}</h2>
        <div class="infos">
            <p class="min"> DÉBUTANT</p>
            <div class="trait"></div>
            <p class="sec">{{ reciepe.attributes.Duration/60 }} Min</p>
        </div>
        
            <div class="cal">
                <p>{{ reciepe.attributes.Energy }} cal</p>
            </div>
    </div>
</router-link>
</template>

<script>
    export default {
        props: {
            reciepe: {
                type: Object
            }
        },
        
    }
</script>

<style scoped>
@media screen and (max-width:981px){
    .card{
        display:block;
    }
}

a{
    text-decoration:none;
}

.card{
    color: #3F3F3F;
    width: auto;
    background: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 500px;
    margin: 35px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:60px;
    padding:15px;
}

a:nth-child(2){
    position: relative;
    margin-top:-100px;
}

.card .infos{
    display: flex;
    justify-content: center;
}

.card .cal{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .cal p{
    background-color:#E83E5D;
    border-radius:10px;
    color:white;
    font-weight: bold;
}

.card p{
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 5px 15px;
}
.card h2{
    font-family:Titillium;
    font-weight: 100;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 5px 15px;
    text-align: center;
}
.card .image > img{
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius:60px;
}

.trait{
    background-color: #E83E5D;
    border:1.5px solid #E83E5D;
    height: 40px;
}
</style>