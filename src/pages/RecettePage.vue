<template>
    <div class="logo">
    <img alt="Logo-JDE" src="../assets/JDE.png">
    </div>
    <div class="imgBox">
            <h1>Just Do Eat</h1>
    </div>
    <div class="hero-image">
        <h1>Découvrez de superbes recettes !</h1>
    </div>
    <div class="recette">
            <img src="../assets/pizza.png" alt="">
            <h2>Nom de la recette</h2>
            <div class="infos">
                <p>25 Minutes</p>
                <p class="line">Intermédiaire</p>
            </div>
            <h4>1075 Kcal</h4>
    </div>
        <div class="recette">
            <img src="../assets/steaks.png" alt="">
            <h2>Nom de la recette</h2>
            <div class="infos">
                <p>35 Minutes</p>
                <p class="line">Débutant</p>
            </div>
            <h4>875 Kcal</h4>
    </div>
            <div class="recette">
            <img src="../assets/pates.png" alt="">
            <h2>Nom de la recette</h2>
            <div class="infos">
                <p>20 Minutes</p>
                <p class="line">Débutant</p>
            </div>
            <h4>725 Kcal</h4>
    </div>
    
</template>
<style>
    h1{
        color:white;
        font-family: Titillium;
        font-weight:600;
        font-size:30px;
    }
    .hero-image{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 250px;
        background-image: url("../assets/hero-image-login.jpg");
        background-repeat: no-repeat;
        background-size: 100vw;
}
.imgBox{
        display:flex;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:50%;
    }

    .recette{
        background-color: white;
        z-index:9;
        transform: translateY(-80px);
        border-radius:60px;
        box-shadow: 0px 0px 15px rgba(0, 0, 255, 0.15);
        padding:15px;
        width: 300px;
        height: 430px;
        margin: 35px auto auto;
        text-align: center;
    }

    .infos{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2{
        font-family: Titillium, Helvetica;
        font-size: 20px;
        font-weight: bold;
        margin-top:15px;
    }

    p{
        font-family: Titillium, Helvetica;
        font-size: 15px;
        font-weight: 400;
        padding: 12px;
        margin-top:15px;
}
    h4{
        font-family: Titillium, Helvetica;
        font-size: 20px;
        font-weight: bold;
        margin-top:15px;
        background-color: #E83E5D;
        border-radius:10px;
        padding: 12px;
        color:white;
        display: inline-block;
        justify-content: center;
        align-items: center;
    }
    .line{
        border-left:3px solid #E83E5D;
    }
</style>