// 1- Crie uma função que receba um número e retorne o dobro.  
function calcularDobro(numero){
    return ( numero * 2)
}
console.log(calcularDobro(10))

// 2- Crie uma função que receba um número e retorne o triplo.  
function calcularTriplo(numero){
    return ( numero * 3)
}
console.log(calcularTriplo(20))

// 3- Crie uma função que receba dois números e retorne a soma.  

function somar (a,b){
    return a + b;
}
somar(15,40);
console.log(somar(15,40));

//4- Crie uma função que receba dois números e retorne a multiplicação.  
function mutiplicacao (a,b){
    return a * b;
}
mutiplicacao(8,9);
console.log(mutiplicacao(8,9));

// 5- Crie uma função que receba um valor em real e converta para dólar.  
function realParaDolar (valor01){
    return valor01 * 5,28;
}
console.log(realParaDolar(20))

// 6- Crie uma função que receba um valor em dólar e converta para real.  
function dolarParaReal (valor02){
    return valor02 / 5,18;
}
console.log(dolarParaReal(20))

//  7- Crie uma função que receba um salário e calcule aumento de 10%.  
function calcularAumento(salario){
    return salario + (salario * 0.10)
}
console.log(calcularAumento(4000))

//8- Crie uma função que retorne se o número é par.  
function parImpar (a){
    if (a % 2 === 0){
        return "O número é par"
    }
    else{
        return "O número é impar"

    }
}
console.log(parImpar(49))

// 9- Crie uma função que imprima números de 1 até 10.
function contarr (){
for (let i=1; i <= 10; i++ ){
    console.log(i)
   }
}
contarr ();

// 10- Crie uma função que receba um limite e imprima até ele.  
function limiteContar (a){
    for (let i=1; i <= a; i++ ){
    console.log(i)
   }
}
contar (100);


//  11- Crie uma função que some todos os números até 10.  
function somarNumeros() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += i;
  }
  return soma;
}

console.log(somarNumeros()); // Resultado: 55

// 12- Crie uma função que conte quantos pares existem até 10.
function contagemPares (){
for (let i=1; i <= 10; i++ ){
    if (i % 2===0){
        contador ++
   }
 } 
    return contador
}
console.log(contagemPares())

//  13- Crie uma função que exiba a tabuada de um número.  
function contar (a){
for (let i=1; i <= 10; i++ ){
    console.log(a * i)
   }
}
contar (2);

// 14- Crie uma função que faça contagem regressiva.  
function contagemRegresiva(){
    for (let i=10; i >= 0; i--){
    console.log(i)
}
}
contagemRegresiva()

// 15- Crie uma função que encontre o número 27.  
function exibirNumero(){
    for (let i=1; i <= 27; i++){
        if(i ===== 27){
    console.log(i)
}
}
exibirNumero()

// 16- Crie uma função que some números pares até um limite.  
function limiteContar (a){
   for (let i=1; i <= a; i++ ){
    if (i % 2===0)
    console.log(i)
   }
}
limiteContar(30);

// 17- Crie uma função que conte números ímpares.  
function impar(a){
for (let i=1; i <= a; i++ ){
    if (i % 2===1)
    console.log(i)
   }
}
impar(20);

// 18 - Crie uma função que retorne a média de dois números.  
function media (a,b){
    let resultado = (a+b)/2;
    return resultado
}
console.log(media(20,50));

//   19- Crie uma função que retorne o quadrado de um número.  
function medi(a){
    return a * a
}

console.log(medi(2))


