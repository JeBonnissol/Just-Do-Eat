<template>
    <img alt="Logo-JDE" src="../assets/JDE.png">
    <div class="hero-image">
        <h1>Just Do Eat</h1>
    </div>
    <div class="connexion">
        <input type="text" class="txt" placeholder="Adresse mail ou pseudo">
        <input type="password" class="txt" placeholder="Mot de passe">
        <router-link to="/recette">
            <input type="button" class="btn" value="SE CONNECTER">
        </router-link>
        <p>ou</p>
        <input type="button" class="social btn" value="Connexion avec Google">
        <input type="button" class="social btn" value="Connexion avec Facebook">
        <input type="button" class="social btn" value="Connexion avec Twitter">
    </div>
</template>
<style>
*{
    margin:0;
    padding:0;
}

h1{
    font-family: Titillium, Helvetica;
    font-size: 35px;
    font-weight: bold;
    color: white;

}

p{
    font-family: Titillium, Helvetica;
    font-size: 15px;
    font-weight: bold;
}

.hero-image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 300px;
    background-image: url("../assets/hero-image-login.jpg");
    background-repeat: no-repeat;
    background-size: 100vw;
}

.txt{
    margin-top:20px;
    margin-left:50px;
    margin-right:50px;
    margin-top:25px;
    padding-bottom:5px;
    width:250px;
    border:none;
    border-bottom: solid 3px #E83E5D;
}

.btn{
    border:none;
    margin-top:33px;
    margin-left:50px;
    margin-right:50px;
    padding-bottom:5px;
    width:250px;
    background-color:#E83E5D;
    border-radius: 10px;
    height:35px;
    text-align: center;
    color: white;
    font-family: Titillium, Helvetica;
    font-size: 15px;
    font-weight: 600;
}

.connexion{
    margin-top:30px;
}

.social{
    box-sizing: border-box;
    padding-left:12px;
    height: 35px;
    text-align: left;
    color:rgba(255, 255, 255, 0.75);
}

::placeholder{
    font-family: Titillium, Helvetica;
    font-size: 15px;
    font-weight: semi-bold;
    color: rgba(0,0,0,0.5);
}


@media screen and (min-width:700px){
    input{
        display: block;
    }
    .connexion{
        margin:auto;
        width: 100vw;
    }
    .hero-image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50vh;
    background-image: url("../assets/hero-image-login.jpg");
    background-repeat: no-repeat;
    background-size: 100vw;
}
}
</style>