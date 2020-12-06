/*
O prompt 1 pedirá o valor do título. 
O prompt 2 pedirá o percentual de multa. 
No prompt 3 terá que ser mostrado o resultado do cálculo: 
(TÍTULO * MULTA) + TÍTULO.
*/

var num1;
var num2;
var multa;
var resultado;

num1 = Number(prompt('Título (R$)'));
console.log('Título (R$)');
console.log(num1)

num2 = Number(prompt('Multa (%)'));
console.log('Multa (%)');
console.log(num2);

multa = (num1 * num2) / 100;

alert(multa);

resultado = Number(prompt('Valor do Título (R$)'));
console.log('Valor do Título (R$)');
console.log(resultado);

resultado = (multa + num1);

alert(resultado);

console.log('Valor da multa (R$):');
console.log(multa);

console.log('Valor à pagar (R$):');
console.log(resultado);