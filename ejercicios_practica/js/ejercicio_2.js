"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

let texto_comparado = texto1.localeCompare(texto2);

if (texto_comparado < 0) {
    alert('La palabra '+texto1+' es anterior a '+texto2);
} else if (texto_comparado > 0) {
    alert('La palabra '+texto1+' es posterior a '+texto2);
} else {
    alert('Son iguales\n'+texto1+'\ny\n'+texto2);
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

if (copiaTexto1 === texto1) {
    alert('Son copias iguales: '+copiaTexto1+" "+texto1);
}

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if (copiaTexto1 !== texto2) {
    alert('Son distintos contenidos: '+copiaTexto1+" "+texto2);
} else {
    alert('Son iguales: '+copiaTexto1+" "+texto2);
}