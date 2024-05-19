

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute // transformando a string em número inteiro
    if (chuteForInvalido(numero)){
        console.log('Valor inválido')
    }
    if(numeroForMaiorOuMenorQUeOValorPermitido(numero)) {
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQUeOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}
