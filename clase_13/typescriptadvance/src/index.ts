import * as operaciones from './lib/operaciones'

const mensaje:string = 'Hola Coders!';
console.log(mensaje);

let num1:number = 15, num2:number = 6;

console.log(`la suma de ${num1} más ${num2} es ${operaciones.sumar(num1,num2)}`);
console.log(`la resta de ${num1} menos ${num2} es ${operaciones.restar(num1,num2)}`);
console.log(`la multiplicacion de ${num1} por ${num2} es ${operaciones.multiplicar(num1,num2)}`);
console.log(`la division de ${num1} divido ${num2} es ${operaciones.dividir(num1,num2)}`);
