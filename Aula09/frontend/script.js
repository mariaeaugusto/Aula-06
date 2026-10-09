//*-----------------------------------
//FRONT-END -Consome nossa API local
//*-----------------------------------

//Este arquivo roda no navegador.
//ele faz requisições para nossa API node.js e mostra os dados na tela.  

//---------------------
//ELEMENTOS DO HTML
//---------------------
//foto do cachorro
const dogImag = document.getElementById("dogImage");
//nome raça
const breedName = document.getElementById("breedName");
//cachorro aleatório
const randomBnt = document.getElementById("randomBnt");
//Boão que busca o cachorro por raça
const searchBnt = document.getElementById("searchBnt")
//campode texto onde o usuario digita a raça
const breedInput = document.getElementById("breedInput");
//area onde fica a imagem do cachorro 
//usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area");

//----------------
//URL DA API
//----------------

const API = "http://localhost:3000/api/cachorros;"

//-------------------
//FUNÇÃO PRINCIPAL
//-------------------

async function buscarCachorro(url){
    //"adiciona a classe "loading"
    //normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");

    try{
        const response = await fetch(url);
        //converte a resposta para JSON
        const data = await response.json();
        //mostra no controle a resposta da API
        console.log("Resposta da API:", data)

        //vamos veriicar se a API retornou erro
        if (data.status === "error"){
            //mostra a mensagem de erro na tela
            //breedName - Elemneto HTML
            //.textContent - Propiedade que define o texto do elemento
            //data - objeto com os dados recebido da API
            //.message - Propiedade que contém a menssagem ou URL
            breedName.textContent = data.message;
            //remove a  imagem
            dogImage.src = "";
            //execução da função
            return; 
        }

        //COLOCA A IMAGEM DO CACHORRO NA TELA
        //o src define qual imagem será exibida
        dogImage.src = data.message;

        //extrai o nome da raça da URL da imagem
        //exemplo da URL:
        //http://localhost:3000/fotos/husky/1.jpg

        //separa a URL em partes usando "/"
        const partes = data.message.split("/")

        //pega a posição 5 do array
        // que corresponde ao nome da raça
        const raca = partes[5]

        //coloca a primeira letra maiúscula
        //ex: husky --> Husky
        breedName.textContent =

        //raca.charAT(0) - pega a primeira letra
        //.toUpperCase() - transforma em maiuscula
        //raca.slice(1) - pega o texto a partir da segunda letra
           raca.charAT(0).toUpperCase() + raca.slice(1);

    } catch (erro){
        //caso o servidor esteja desligado
        //ou aconteça algum erro na requisição

        console.error(erro);

        //mostra mensagem na tela 
        breedName.textContent =
            "📴 servidor offline - rode: node serve.js"

            //remove mensagem na tela
            dogImage.src = ""; 
    } finally {
            //remove a classe de carregamento
            //independente do erro ou sucesso.
            dogArea.classList.remove("loading")

    }
    
}

