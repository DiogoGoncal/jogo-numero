let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate: 1.2});

}
function textoInicial(){

    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Escolha um numero entre 1 e 10");

}

textoInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {

        exibirTextoTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? " tentativas!" : " tentativa!"
        let mensagemTentativas = "Você descobriu o número secreto com "+ tentativas + palavraTentativa;
        exibirTextoTela("p", mensagemTentativas); 
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else {
        if(chute > numeroSecreto){
            exibirTextoTela("p", "O número secreto é menor");
        }else{
            exibirTextoTela("p", "O número secreto é maior")
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;
    if (quantidadeElementosLista == numeroLimite){
        listaNumeroSorteados = [];
    } 

    if(listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}
