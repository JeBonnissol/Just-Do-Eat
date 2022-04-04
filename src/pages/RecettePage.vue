<template>
    <img alt="Logo-JDE" src="../assets/JDE.png">
    <div class="hero-image">
        <h1>Découvrez de superbes recettes !</h1>
    </div>
    <div class="recette">
            <img src="../assets/pizza.png" alt="">
            <h2>Nom de la recette</h2>
            <div class="infos">
                <p>25 Minutes</p>
                <p>Intermédiaire</p>
                <h4>695 Kcal</h4>
            </div>
    </div>
</template>
<style>
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

    .recette{
        border-radius:60px;
        box-shadow: 0px 0px 15px rgba(0, 0, 255, 0.15);
        padding:15px;
        width: 300px;
        height: 430px;
        margin:auto;
    }


</style>