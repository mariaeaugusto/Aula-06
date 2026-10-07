// JSON significa javascript object notation e é um formato de representação e troca de dados.

JSON é como ficha de cadastro.

FICHA FÍSICA:                JSON:                        
Nome: joão                 "nome": "Joao"
idade: 25                  "idade": 25
cidade: SP                 "cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (Qualquer linguagem)


<!-- ================================================================================>
{
    "Cachorro":{
        "nome": "Rex" ,
        "idade": 3 ,
        "raca": "Labrador",
        "vacinado" : true, 
        "peso":25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "Joao",
            "telefone": "119999999967"
        }

    }
}
<!-- ================================================================================>
Explicação 
<!-- ================================================================================>
//string (texto) - sempre com aspas
"nome": "Rex"

//NUMBER (numero) - sem aspas 
"idade": 3,
"peso":25.5,

//BOOLEAN (true/false)
"vacinado" : true, 

//ARRAY (lista) - com colchetes
"brinquedos": ["bola", "osso", "frisbee"],

//OBJECT (objeto) - com chaves
"dono": {
            "nome": "Joao",
            "telefone": "119999999967"
        }

    //NULL (Vazio)    
 "datadefalecimento": NULL
 