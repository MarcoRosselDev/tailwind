/* En programación, comprender cómo se representan los caracteres como números es fundamental. Aquí es donde entra en juego ASCII. ASCII, abreviatura de American Standard Code for Information Interchange, es un estándar de codificación de caracteres utilizado en computadoras para representar texto. Asigna un valor numérico a cada carácter, lo cual es reconocido universalmente por las máquinas.

En esta lección, exploraremos qué es ASCII, cómo funciona y cómo puedes usar métodos de JavaScript como charCodeAt() y fromCharCode() para interactuar con valores ASCII.

ASCII es un sistema para codificar caracteres como letras, dígitos y símbolos en valores numéricos. Cada carácter se asigna a un número específico.

Por ejemplo, la letra mayúscula A está representada por el número 65 en ASCII, mientras que la minúscula a es representada por 97. Esta codificación permite a las computadoras almacenar y manipular texto.

El estándar ASCII cubre 128 caracteres, incluyendo:

Letras inglesas mayúsculas y minúsculas (A-Z, a-z).
Números (0-9).
Signos de puntuación y símbolos comunes (!, @, #, y así sucesivamente).
Caracteres de control (como nueva línea y tabulación).
En JavaScript, puedes acceder fácilmente al código ASCII de un carácter utilizando el método charCodeAt(). Este método se llama sobre una cadena y devuelve el código ASCII del carácter en un índice especificado. */

let letter = "J";
console.log(letter.charCodeAt(0)); // 65

// lo contrario --> de codigo ASCII a string:
let char = String.fromCharCode(65);
console.log(char); //  A
