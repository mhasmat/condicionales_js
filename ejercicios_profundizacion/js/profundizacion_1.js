"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

let numero1 = parseInt(prompt('Ingrese 1er numero:'));
let numero2 = parseInt(prompt('Ingrese 2do numero:'));

let diferencia = numero1 - numero2;

if (diferencia > 0) {
    alert('Resultado Positivo = '+diferencia);
} else if (diferencia < 0) {
    alert('Resultado Negativo = '+diferencia);
} else {
    alert('Resultado Cero = '+diferencia);
}