"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda

if (numero1 > numero2) {
    alert(numero1+' es mayor que '+numero2);
} else {
    alert(numero2+' es mayor que '+numero1);
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

if (numero1 > 0) {
    alert('El 1er número es positivo.');
} else if (numero1 < 0) {
    alert('El 1er número es negativo.');
} else {
    alert('El 1er número es 0.');
}

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

if ((numero1 > 0) && (numero1 < 100)) {
    alert('El 1er número, SI está entre 1 y 99');
} else {
    alert('El 1er número, NO está entre 1 y 99');
}

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if ((numero1 < 10) && (numero2 > -2)) {
    alert('Correcto!\nEl 1er nro es menor a 10: '+numero1+'\ny el 2do nro es mayor a -2: '+numero2);
} else {
    alert('Error. No se cumple alguna de las condiciones.\nnro.1: '+numero1+'\nnro.2: '+numero2);
}