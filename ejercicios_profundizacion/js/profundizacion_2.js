"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

let numero1 = parseInt(prompt('Ingrese 1er numero:'));
let numero2 = parseInt(prompt('Ingrese 2do numero:'));
let numero3 = parseInt(prompt('Ingrese 3er numero:'));

if (numero1 %2 === 0) {
    alert('1er numero PAR = '+numero1);
} else {
    alert('1er numero IMPAR = '+numero1);
}

if (numero2 %2 === 0) {
    alert('2do numero PAR = '+numero2);
} else {
    alert('2do numero IMPAR = '+numero2);
}

if (numero3 %2 === 0) {
    alert('3er numero PAR = '+numero3);
} else {
    alert('3er numero IMPAR = '+numero3);
}

