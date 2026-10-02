//============================================
//SELECIONANDO ELEMENTOS DO DOM
//============================================

//selecionando por ID
//Console.log(document.getElementById("titulo"));
//para visualização na console.

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");


//selecionando por classe
let caixas = document.getElementsByClassName("box");

//Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ===================================
//função para alterar o conteudo
// ===================================

function alterar() {
    titulo.innerText = "Luan Santana "
    subtitulo.innerText = "O melhor cantor"
    paragrafo.innerText = "o texto do paragrafo foi modificado"

    //Alterando elemento da classe 
    caixas[0].innerText = "Primeiro paragrafo alterado"
    caixas[0].innerText = "Segundo paragrafo alterado"

    //alterando imagem 
    imagem.src = "https://cdn.testonoticias.com.br/wp-content/uploads/2023/12/Snapinsta.app_397255344_18427083232039668_2161744662552070273_n_1080-696x868.jpg"
}
