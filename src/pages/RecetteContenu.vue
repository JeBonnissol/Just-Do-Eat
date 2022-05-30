<template>
    <div class="logo">
        <img alt="Menu-JDE" src="../assets/burger.png" >
        <router-link to="/"> <img alt="Logo-JDE" src="../assets/JDE.png"></router-link>
        <img alt="search-JDE" src="../assets/fa_search.png">
    </div>
    <section>
        <div class="imgBox">
            <h1>{{ this.Name }}</h1>
            
        </div>
        <div class="homepage">
            <div class="products">
                <div class="inputBtn">
                        <input class="btn" type="button" value="Ingrédients">
                        <input class="choix" type="button" value="- 3 personnes + ">
                </div>
                <div class="ingredients">

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/oeufs.jpg" alt="">
                        </div>
                        <h3>{{this.Ingredient1}}</h3>
                        <p>{{this.Quantite1}}</p>
                    </div>

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/farine.png" alt="Logo JDE">
                        </div>
                        <h3>{{this.Ingredient2}}</h3>
                        <p>{{this.Quantite2}}</p>
                    </div>

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/beurre.png" alt="Logo JDE">
                        </div>
                        <h3>{{this.Ingredient3}}</h3>
                        <p>{{this.Quantite3}}</p>
                    </div>

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/chocolat.png" alt="Logo JDE">
                        </div>
                        <h3>{{this.Ingredient4}}</h3>
                        <p>{{this.Quantite4}}</p>
                    </div>

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/sucre.png" alt="Logo JDE">
                        </div>
                        <h3>{{this.Ingredient5}}</h3>
                        <p>{{this.Quantite5}}</p>
                    </div>

                    <div class="contenant">
                        <div class="image">
                            <img src="../assets/levure.png" alt="Logo JDE">
                        </div>
                        <h3>{{this.Ingredient6}}</h3>
                        <p>{{this.Quantite6}}</p>
                    </div>

                </div>
            </div>
            <div class="steps-section">
                <div class="infos">
                    <h2>Etapes</h2>
                    <h3 class="titres">Intermédiare</h3>
                    <div class="trait"></div>
                    <h3 class="titres">{{this.Duration/60}} Min</h3>
                </div>
                <div class="steps">
                    <h2 class="titres-etape">Etape 1</h2>
                    <p>{{this.Step1[0]}}</p>
                    <h2 class="titres-etape">Etape 2</h2>
                    <p>{{this.Step1[1]}}</p>
                    <h2 class="titres-etape">Etape 3</h2>
                    <p>{{this.Step1[2]}}</p>
                    <h2 class="titres-etape">Etape 4</h2>
                    <p>{{this.Step1[3]}}</p>
                    <h2 class="titres-etape">Etape 5</h2>
                    <p>{{this.Step1[4]}}</p>
                    <h2 class="titres-etape">Etape 6</h2>
                    <p>{{this.Step1[5]}}</p>
                </div>
            </div>
        </div>
        <div class="notation">
            <h1>Notez la recette</h1>
        </div>
        <div class="note">
            <svg width="3%" height="auto" viewBox="0 0 467 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M465.505 156.081C463.978 151.405 461.009 147.335 457.028 144.444C453.044 141.557 448.251 140.002 443.333 140.002H299.253L255.343 15.5724C253.187 9.46303 248.589 4.52542 242.648 1.93942C236.707 -0.646475 229.957 -0.646475 224.015 1.93942C218.074 4.52533 213.476 9.46283 211.32 15.5724L167.41 140.002H23.3303C16.7326 140.006 10.4433 142.799 6.0183 147.698C1.5964 152.596 -0.548095 159.136 0.119905 165.702C0.787875 172.264 4.2058 178.241 9.5222 182.147L123.112 265.456L71.3192 412.246C69.1004 418.558 69.6981 425.519 72.9559 431.363C76.2176 437.207 81.8309 441.371 88.3659 442.801C94.905 444.227 101.741 442.781 107.139 438.828L233.329 346.281L359.519 438.828C364.917 442.781 371.753 444.226 378.292 442.797C384.827 441.371 390.44 437.207 393.698 431.363C396.96 425.519 397.557 418.558 395.339 412.246L343.546 265.456L457.135 182.147C461.1 179.241 464.046 175.155 465.546 170.471C467.05 165.787 467.03 160.752 465.499 156.08L465.505 156.081Z" fill="rgba(255, 255, 255, 0.5)"/>
            </svg>
            <svg width="3%" height="auto" viewBox="0 0 467 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M465.505 156.081C463.978 151.405 461.009 147.335 457.028 144.444C453.044 141.557 448.251 140.002 443.333 140.002H299.253L255.343 15.5724C253.187 9.46303 248.589 4.52542 242.648 1.93942C236.707 -0.646475 229.957 -0.646475 224.015 1.93942C218.074 4.52533 213.476 9.46283 211.32 15.5724L167.41 140.002H23.3303C16.7326 140.006 10.4433 142.799 6.0183 147.698C1.5964 152.596 -0.548095 159.136 0.119905 165.702C0.787875 172.264 4.2058 178.241 9.5222 182.147L123.112 265.456L71.3192 412.246C69.1004 418.558 69.6981 425.519 72.9559 431.363C76.2176 437.207 81.8309 441.371 88.3659 442.801C94.905 444.227 101.741 442.781 107.139 438.828L233.329 346.281L359.519 438.828C364.917 442.781 371.753 444.226 378.292 442.797C384.827 441.371 390.44 437.207 393.698 431.363C396.96 425.519 397.557 418.558 395.339 412.246L343.546 265.456L457.135 182.147C461.1 179.241 464.046 175.155 465.546 170.471C467.05 165.787 467.03 160.752 465.499 156.08L465.505 156.081Z" fill="rgba(255, 255, 255, 0.5)"/>
            </svg>
            <svg width="3%" height="auto" viewBox="0 0 467 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M465.505 156.081C463.978 151.405 461.009 147.335 457.028 144.444C453.044 141.557 448.251 140.002 443.333 140.002H299.253L255.343 15.5724C253.187 9.46303 248.589 4.52542 242.648 1.93942C236.707 -0.646475 229.957 -0.646475 224.015 1.93942C218.074 4.52533 213.476 9.46283 211.32 15.5724L167.41 140.002H23.3303C16.7326 140.006 10.4433 142.799 6.0183 147.698C1.5964 152.596 -0.548095 159.136 0.119905 165.702C0.787875 172.264 4.2058 178.241 9.5222 182.147L123.112 265.456L71.3192 412.246C69.1004 418.558 69.6981 425.519 72.9559 431.363C76.2176 437.207 81.8309 441.371 88.3659 442.801C94.905 444.227 101.741 442.781 107.139 438.828L233.329 346.281L359.519 438.828C364.917 442.781 371.753 444.226 378.292 442.797C384.827 441.371 390.44 437.207 393.698 431.363C396.96 425.519 397.557 418.558 395.339 412.246L343.546 265.456L457.135 182.147C461.1 179.241 464.046 175.155 465.546 170.471C467.05 165.787 467.03 160.752 465.499 156.08L465.505 156.081Z" fill="rgba(255, 255, 255, 0.5)"/>
            </svg>
            <svg width="3%" height="auto" viewBox="0 0 467 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M465.505 156.081C463.978 151.405 461.009 147.335 457.028 144.444C453.044 141.557 448.251 140.002 443.333 140.002H299.253L255.343 15.5724C253.187 9.46303 248.589 4.52542 242.648 1.93942C236.707 -0.646475 229.957 -0.646475 224.015 1.93942C218.074 4.52533 213.476 9.46283 211.32 15.5724L167.41 140.002H23.3303C16.7326 140.006 10.4433 142.799 6.0183 147.698C1.5964 152.596 -0.548095 159.136 0.119905 165.702C0.787875 172.264 4.2058 178.241 9.5222 182.147L123.112 265.456L71.3192 412.246C69.1004 418.558 69.6981 425.519 72.9559 431.363C76.2176 437.207 81.8309 441.371 88.3659 442.801C94.905 444.227 101.741 442.781 107.139 438.828L233.329 346.281L359.519 438.828C364.917 442.781 371.753 444.226 378.292 442.797C384.827 441.371 390.44 437.207 393.698 431.363C396.96 425.519 397.557 418.558 395.339 412.246L343.546 265.456L457.135 182.147C461.1 179.241 464.046 175.155 465.546 170.471C467.05 165.787 467.03 160.752 465.499 156.08L465.505 156.081Z" fill="rgba(255, 255, 255, 0.5)"/>
            </svg>
            <svg width="3%" height="auto" viewBox="0 0 467 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M465.505 156.081C463.978 151.405 461.009 147.335 457.028 144.444C453.044 141.557 448.251 140.002 443.333 140.002H299.253L255.343 15.5724C253.187 9.46303 248.589 4.52542 242.648 1.93942C236.707 -0.646475 229.957 -0.646475 224.015 1.93942C218.074 4.52533 213.476 9.46283 211.32 15.5724L167.41 140.002H23.3303C16.7326 140.006 10.4433 142.799 6.0183 147.698C1.5964 152.596 -0.548095 159.136 0.119905 165.702C0.787875 172.264 4.2058 178.241 9.5222 182.147L123.112 265.456L71.3192 412.246C69.1004 418.558 69.6981 425.519 72.9559 431.363C76.2176 437.207 81.8309 441.371 88.3659 442.801C94.905 444.227 101.741 442.781 107.139 438.828L233.329 346.281L359.519 438.828C364.917 442.781 371.753 444.226 378.292 442.797C384.827 441.371 390.44 437.207 393.698 431.363C396.96 425.519 397.557 418.558 395.339 412.246L343.546 265.456L457.135 182.147C461.1 179.241 464.046 175.155 465.546 170.471C467.05 165.787 467.03 160.752 465.499 156.08L465.505 156.081Z" fill="rgba(255, 255, 255, 0.5)"/>
            </svg>
        </div>
        <div class="commentaire">
            <p>Laisse un commentaire :</p>
            <textarea class="msg_textarea" name="" id="" cols="30" rows="10"></textarea>
        </div>
    </section> 
</template>

<script>
import api from '@/plugins/axios'
    export default {
    computed: {
        currentItem () {
            return this.$route.params.id
        },
    },
        data() {
            return {
                reciepes: [],
                Name:"",
                Duration:"",
                Step1:[],
                Ingredient1:[],
                Quantite1:[],
                Ingredient2:[],
                Quantite2:[],
                Ingredient3:[],
                Quantite3:[],
                Ingredient4:[],
                Quantite4:[],
                Ingredient5:[],
                Quantite5:[],
                Ingredient6:[],
                Quantite6:[],
            }
        },
        mounted () {
        api.get('reciepes/'+this.$route.params.id).then((response) => {
            this.reciepes = response.data.data
            this.Name = response.data.data.attributes.Name
            this.Duration = response.data.data.attributes.Duration
            this.Step1 = response.data.data.attributes.Steps
            this.Ingredient1 = response.data.data.attributes.Ingredients[0].name
            this.Quantite1 = response.data.data.attributes.Ingredients[0].quantity
            this.Ingredient2 = response.data.data.attributes.Ingredients[1].name
            this.Quantite2 = response.data.data.attributes.Ingredients[1].quantity
            this.Ingredient3 = response.data.data.attributes.Ingredients[2].name
            this.Quantite3 = response.data.data.attributes.Ingredients[2].quantity
            this.Ingredient4 = response.data.data.attributes.Ingredients[3].name
            this.Quantite4 = response.data.data.attributes.Ingredients[3].quantity
            this.Ingredient5 = response.data.data.attributes.Ingredients[4].name
            this.Quantite5 = response.data.data.attributes.Ingredients[4].quantity
            this.Ingredient6 = response.data.data.attributes.Ingredients[5].name
            this.Quantite6 = response.data.data.attributes.Ingredients[5].quantity
            console.log(this.reciepes)
        });
    },
    }
</script>

<style scoped>
.homepage{
    margin-bottom:10vh;
    margin-top:10vh;
    display: flex;
    justify-content: center;
    width: 80vw;
    height: auto;
    margin-left:auto;
    margin-right:auto;
}

.homepage .products{
    margin-left:50px;
    margin-right:50px;
    width: 50%;
    height: auto;
}

.homepage .steps-section{
    margin-left:50px;
    margin-right:50px;
    width: 50%;
    height: auto;
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
    background:url("../assets/cake-marbre-au-chocolat.jpg");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
}

.imgBox h1{
    color:white;
    font-family: Titillium;
    font-weight:bold;
    font-size:80px;
}

.notation h1{
    color:white;
    font-family: Titillium;
    font-weight:bold;
    font-size:80px;
}

.notation{
    margin-top:10vh;
    display: flex;
    position:relative;
    width: 100%;
    height: 400px;
    background: url("../assets/note.png");
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
}

.note{
    background-color: #e83e5d;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width:100%;
}

svg{
    margin-left:15px;
    margin-right:15px;
    margin-bottom:50px;
}

path:hover{
    fill:white;
}

.msg_textarea {
	width: 100%;
	height: 170px;
	border: none;
	box-sizing: border-box;
	padding: 10px 0;
	line-height: 40px;
	overflow: hidden;
	resize: none;
	background-image: linear-gradient(
		0deg,
		#5f5f5f 2.38%,
		transparent 2.38%,
		transparent 50%,
		#5f5f5f 50%,
		#5f5f5f 52.38%,
		transparent 52.38%,
		transparent 100%
	);
	background-size: 80px 80px;
}


.commentaire{
    width:60vw;
    margin-left:auto;
    margin-right:auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color:white;
    padding:50px;
    border-radius:10px;
    margin-top:-10vh;
}

.inputBtn{
    margin-bottom:10vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.inputBtn input{
    width: 45%;
    font-family: Titillium;
    font-weight:bold;
    font-size:25px;
    border:0;
    border-radius:10px;
    outline:none;
    padding-bottom:10px;
    padding-top:10px;
}

.inputBtn .btn{
    background-color:#E83E5D;
    color:white;
}

.inputBtn .choix{
    background-color:#69696979;
    color:#4E4C4C;
}

.ingredients{
    margin-top:5vh;
    display:grid;
    grid-template-columns: auto auto auto;
    column-gap:2vw;
    row-gap:2vh;
}

.contenant{
    display: block;
}

.contenant .image{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding-left:1vw;
    padding-right:1vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:10px;
}

.contenant .image img{
    width: 150px;
}

.contenant .image:hover{
    background-color:#69696936;
}


.contenant h3{
    margin-top:20px;
    text-align: center;
    font-family:titillium;
    font-weight:bold;
}

.contenant p{
    text-align: center;
    margin-top:0;
    padding:0;
}

.infos{
    margin-bottom:10vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
}

h2{
    font-size:35px;
    color: #E83E5D;
    border-bottom:4px solid #E83E5D;
    margin-top:0;
}

.titres{
    font-family: titillium;
    font-size: 25px;
    font-weight: semi-bold;
    text-align: center;
}

.trait{
    background-color: #E83E5D;
    border:1.5px solid #E83E5D;
    height: 50px;
}

.steps{
    padding-left:25px;
    margin-top:5vh;
    border-left:3px solid #4E4C4C;
}

.etapes{
    font-family: titillium;
    font-size: 25px;
    font-weight: semi-bold;
}

.titres-etape{
    font-family: titillium;
    font-size: 25px;
    font-weight: semi-bold;
    color:#4E4C4C;
    border:none;
}

@media screen and (max-width:1200px){
.logo{
    justify-content: space-around;
}

.homepage{
    margin-top:5vh;
    margin-bottom:5vh;
    display:block;
    width:90vw
}

    .homepage .products{
        width:100%;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:5vh;
    }

    .contenant .image img{
    width: 100px;
}


    .homepage .steps-section{
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }

    .imgBox h1{
        font-size:35px;
    }

    .notation h1{
        font-size:35px;
    }

    .notation{
        margin-top:5vh;
        height: 200px;
    }

    .note{
        height: 250px;
    }

    svg{
        width:7%;
        margin-left: 10px;
        margin-right:10px;
    }

    .commentaire{
        width: 80vw;
        padding: 25px;
    }

    .contenant .image{
        height:115px;
    }

    .ingredients{
        column-gap: 4vw;
    }

    .infos{
        margin-bottom:0;
    }

.infos h2{
    background-color: #E83E5D;
    color: white;
    font-size: 17px;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-bottom: 10px;
    padding-top: 10px;
    width:30%;
    text-align:center;
    }

    .titres{
        font-size:15px;
        font-weight:400;
    }

    .trait{
        height: 25px;
    }

    .inputBtn{
        margin-bottom:0;
    }

    .inputBtn input{
        font-size:17px;
    }
    .contenant h3{
        font-family:titillium;
        font-size:16px;
        font-weight:bold;
        margin-top:10px;
    }

    .contenant p{
        font-size:12px;
        margin-top:0;
        padding:0;
    }
}
</style>