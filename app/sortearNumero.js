const maiorValor = 1000;
const menorValor = 0;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
      return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}

const numeroSecreto = gerarNumeroAleatorio();
console.log('Número secreto: ', numeroSecreto);
