/*
practica1.ts
Describir las diferencias de let, const y var y sus respectivos alcances
 */

const W = "w"; // constante. No se puede redeclarar y no se puede cambiar su valor. Su valor será el mismo dentro de todos los bloques de código.
var a = "a"; // Declaracion inicial

//bloque
if (true) {
  console.log(a); // imprime a
  var a = "b"; // redeclaracion
  console.log(a); // imprime b
}
console.log(a); // imprime b. Es decir que la variable es la "misma" dentro y fuera del bloque

var b = "b";

//bloque
if (true) {
  let b = "c";
  console.log(b); // imprime c.
  //let b = "r"; // error. No se puede redeclarar una variable usando let dentro del mismo bloque en el que fue declarada o redeclarada
}

console.log(b);// imprime b. Es decir que al redeclarar una variable con let solo se vera afectada dentro del bloque en donde fue redeclarada.

let c = "c";

if (true) {
  console.log(c); // imprime c
}

//bloque
if (true) {
  //console.log(c); // error, la variable no ha sido declarada en este punto
  let c = "d";
  console.log(c); // imprime d.
}

console.log(c);// imprime c.