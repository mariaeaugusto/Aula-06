//------------------------------
// NOSSA APPI DE CACHORROS 
//-----------------------------------------------------------
// Agora as fotos não são mais baixadas automaticamentes!
//-----------------------------------------------------------
//Elas DEVEM existir manualmente na pasta 
//Data/fotos
//-------------------------------------------------------------

//ROTAS:(Caminho)
//GET/API/CACHORROS/ALEATORIOS
//-------------------------------
//GET/API/CACHORROS/RACA:
//--------------------------------

//---------------------------------------------------------------------------------------
//importa o framework express para criar o servidor 
const express = require("express");
//importar o CORS para permitir requisições de outros dominios(ex: frotend)
const cors = require("cors");
//importa o modulo de arquivos do NODE
const fs = require("fs");
//importa a utilidades para trabalhar com caminhos e arquivos 
const path = require("path");
//Importa o arquivo de JSON que contem as raças e fotos 
const cachorros = require(".data/dogs.json")
//criar a alicação Express 
const app = express();
//definir a porta que o servidor vai funcionar 
const PORT = 3000;
//Habilitar o uso do CORS na aplicação
app.use(cors());

//--------------------------------------------------------------------------------------------

//-------------------------
//SERVI ARQUIVOS ESTÁTICOS
//--------------------------

//NÓS FALAMOS PARA O EXPRESS 
//"Tudo qe estiver na pasta data/fotos pode ser acessado pela URC /fotos"
//EX:
//http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") //caminho real da pasta do servidor
    )
)

//-------------------------
//FUNÇÃO AUXILIAR
//--------------------------

//-------------------------------------------------------------------------------------------
//função que recebe um array e retorna um item aleatorio dele 
function Sortear(array){
    //gera um numero aleatorio entre 0 e o tamanho da array 
    //array.length - conta quantos itens existem na lista 
    //math.random() -sorteia um nuumero decimal entre 0 e 1
    //math random() - array.lengt - multiplica o numero sorteado pela quantidade de itens 
    //math.floor() - tira a parte decimal, arredondando para baixo.
    //------------------------------------------------------------------------------------------
    const i =Math.floor(Math.random() * array.length)
    //retora o item sorteado
    return array [i];
}

//-------------------------
//ROTAS DA API
//-------------------------

//ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatório", (req, res) =>{
    //req- resquest(requesição)= é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro.
    //res - response(resposta) = é o que o servidor envia de volta, por exemplo endreço da foto do cachorro 

    //pegar todas as fotos de todas as racas
    //object.values pega os valores do objeto
    //flat trasforma tudo em um unico array
    const TodasAsFotos = Object.values(cachorros).flat();
})

//sorteia uma foto aleatória 
const item = sortear(TodasAsFotos)

//responder para o cliente em formato de JSON
res.json ({
    //status da resposta 
    status:"success",
    //URL da imagem que foi sorteada 
    message:`http://localhost:${PORT}/fotos/${item}`
});

//ROTA 2 - Cachorro por raça
//exemplo de acesso:
//http://localhost:3000/api/cachorros/husky

app.get("api/cachorros/:raca", (req, res) => {
    //pega o parametro da URL (ex:husky)
    const raca = req.params.raca.toLocaleLowerCase();
    //params = contem os parametros definidos na URL da rota 
    //.raca = acessa o parametro chamado raca.
    //.toLowerCase() = transforma todas as letras em minusculas.
    if (!cachorros[raca]){
        //cachoros[raca]: procurar a raça denntro do objeto *cachorros*
        //!: significa nãõ:Nesse caso, verifica se a raça nao existe ou se seu valor é falso. 
            //Se não existir, ele retornara o erro 404
            res.status(404).json({
                status: "error",
                message:`Raça "${raca}" não encontrada`
            });

            //encerra a execução da rota
            return;                 

    }

    //sorteia uma foto da raça solicitada 
    const item =sortear(cachorros[rca]);
    //retorna a resposta em JSON
    res.json({
        status:"success",
        message:`http://localhost:${PORT}/fotos/${item}`
    });
});

