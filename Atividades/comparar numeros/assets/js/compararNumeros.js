window.alert("Sintaxe e Operadores")

const number1 = prompt ("Digite o primeiro numero: ");
const number2 = prompt ("Digite o segundo numero: ")

var n1 = parseInt(number1);
var n2 = parseInt(number2);

function mostra (frase) {
    document.write(frase)
}

function comparaNumeros(n1, n2) {
	if(!n1 || !n2) return "Você não inserio os numeros corretamente. </br> Tente novamente."
	const primeiraFrase = criaPrimeiraFrase(n1, n2);
	const segundaFrase = criaSegundaFrase(n1, n2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(n1, n2) {
	var primeiraFrase = `Os números ${n1} e ${n2}`;
	var simNao = 'não';

	if (n1 === n2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(n1, n2) {
	const soma = n1 + n2;
	var comparaDez = 'menor';
	var comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

var resultado = (comparaNumeros(n1, n2));
console.log(resultado);
mostra(resultado);