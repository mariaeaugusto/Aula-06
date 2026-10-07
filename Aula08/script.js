// ================================
// API DE CACHORROS 
// ================================

// URL base da API
const API_URL = 'https://dog.ceo/api/breeds/image/random';

// Endereço da API que vamos utilizar para buscar imagens de cachorros 

// Pegando os elementos do HTML

// - Imagem pelo seu ID 
const fotoCachorro = document.getElementById('foto-cachorro');
// - Botão pelo seu ID
const botaoCachorro = document.getElementById('botao-cachorro');


// ================================
// FUNÇÃO PARA CRIAR UMA NOVA FOTO 
// ================================
async function buscarfotos() {
// FAZER UMA REQUISIÇÃO PARA A API DE CACHORROS   
   const resposta = await fetch(API_URL); // Corrigido: mudou de 'url' para 'API_URL'
// PEGAR O JSON DA RESPOSTA
   const dados = await resposta.json();
// IMPRIMIR NO CONSOLE O JSON RETORNADO PELA API
   console.log(dados);
// PEGAR A URL DA IMAGEM E ATRIBUIR AO ELEMENTO IMG 
   fotoCachorro.src = dados.message;    
}

// ================================
// BOTÃO  
// ================================
// Quando o botão for clicado, chamar a função buscarfotos
// Vamos executar a função buscarfotos quando o botão for clicado
botaoCachorro.addEventListener('click', buscarfotos); // Corrigido: mudou de 'btnNovafoto' para 'botaoCachorro'

// Quando a página for carregada, buscar uma foto de cachorro 
// Já Buscando uma foto de cachorro quando a página for carregada 
buscarfotos();