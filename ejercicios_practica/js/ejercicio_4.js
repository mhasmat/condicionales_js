"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

let texto_comparado = texto1.localeCompare(texto2);

if (texto_comparado < 0) {
    alert("Texto 2 = "+texto2+", es mayor.");
} else {
    alert("Texto 1 = "+texto1+", es mayor.");
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda

let texto1_parseado = parseInt(texto1);
let texto2_parseado = parseInt(texto2);

if (texto1_parseado > texto2_parseado) {
    alert('Mayor texto 1 = '+texto1_parseado);
} else {
    alert('Mayor texto 2 = '+texto2_parseado);
}

//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
