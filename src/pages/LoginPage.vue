<template>
    <div class="logo">
        <img alt="Logo-JDE" src="../assets/JDE.png">
    </div>
    <section>
        <div class="imgBox">
            <h1>Just Do Eat</h1>
        </div>
        <div class="contentBox">
            <div class="formBox">
                <h2>Connectez Vous</h2>
                <form action="#">
                    <div class="inputBx">
                        <input type="text" placeholder="Adresse email ou pseudo">
                    </div>
                    <div class="inputBx">
                        <input type="password" placeholder="Votre mot de passe">
                    </div>
                    <div class="remember">
                        <label><input type="checkbox">Se souvenir de moi</label>
                    </div>
                    <div class="inputBx">
                        <router-link to="/recettes">
                            <input type="submit" value="Se Connecter">
                        </router-link>
                    </div>
                    <div class="inputBx">
                        <p>Vous n'avez pas de compte <a href="#">S'inscrire</a></p>
                    </div>
                    <div class="inputBx">
                            <input type="button" value="Connexion avec Google">
                            <input type="button" value="Connexion avec Facebook">
                            <input type="button" value="Connexion avec Twitter">
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Titilium;
}

.logo{
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding-top:30px;
    padding-bottom:30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

section{
    position: relative;
    display: flex;
    height: 90vh;
    width: 100%;
}

section .imgBox{
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
    background: url("../assets/hero-image-recette.jpg");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
}


section .imgBox h1{
    color:white;
    font-family: Titillium;
    font-weight:600;
    font-size:60px;
}

section .contentBox{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    margin-left:20px;
}

section .contentBox .formBox{
    width:390px;
}

section .contentBox .formBox h2{
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom:3px solid #E83E5D;
    display:inline-block;
}

.inputBx{
    margin-bottom:20px;
}

.inputBx input{
    width: 100%;
    border-bottom:3px solid #E83E5D;
    font-family: Titillium;
    font-weight:400;
    font-size:18px;
    border-top:0;
    border-left:0;
    border-right:0;
    outline:none;
    padding-bottom:5px;
    padding-top:10px;
}

.inputBx input[type="submit"]{
    background-color:#E83E5D;
    border-radius:10px;
    color:rgba(255, 255, 255, 0.75);
    cursor:pointer;
}

.inputBx input[type="submit"]:hover{
    color:white;
}

.inputBx input[type="button"]:hover{
    color:white;
}

.inputBx input[type="button"]{
    background-color:#E83E5D;
    border-radius:10px;
    color:rgba(255, 255, 255, 0.75);
    margin-bottom:35px;
    cursor:pointer;
}

label{
    font-family: Titillium;
    font-weight: 400;
    text-transform: uppercase;
}

.remember{
    margin-bottom:20px;
}

.inputBx p{
    text-align:center;
    font-size:18px;
}

.inputBx p a{
    color:#E83E5D;
    padding-left:5px;
    font-family: Titillium;
    font-weight:600;
    text-decoration: none;
}

/* Responsive */
@media screen and (max-width:768px){
    section .imgBox{
        display:flex;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:50%;
    }
    section .contentBox{
        display:flex;
        width:100%;
        z-index:1;
        margin-left: 0;
        margin-top:40vh;
        padding-left:5vh;
        padding-right:5vh;
    }
    section .contentBox .formBox{
    width:auto;
}
}
</style>