/*
    quando clicar na seta avançar temos que esconder todas as imagens e mostrar a próxima imagem

        a imagem atual começa em 0, pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar +1 ao contador de imagens
        para mostrar a segunda imagem (indice 1)

            esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a próxima imagem
            

        parei 1:29
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

    esconderImagens();

    mostrarImagens();
})

setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();

    mostrarImagens();
})