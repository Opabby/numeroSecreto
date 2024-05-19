const sorteio = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    const maiorValor = 1000;
    const menorValor = 0;

    const elementoMenorValor = document.getElementById('menor-valor');
    elementoMenorValor.innerHTML = menorValor;

    const elementoMaiorValor = document.getElementById('maior-valor');
    elementoMaiorValor.innerHTML = maiorValor;

    
    return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}

console.log('Número secreto: ', sorteio);
