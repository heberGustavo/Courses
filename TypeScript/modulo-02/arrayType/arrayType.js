"use strict";
// === > Exemplo 01 - Uso de Colchetes:
console.log("=== Exemplo 01 - Uso de Colchetes ===");
let frutas = ['Melancia', 'Amora', 'Maça', 'Manga', 'Goiaba'];
console.log(frutas[1]); //Amora;
// === > Exemplo 02 - Array Object (Objeto Array):
console.log("=== Exemplo 02 - Array Object (Objeto Array) ===");
let frutas2 = ['Melancia', 'Amora', 'Maça', 'Manga', 'Goiaba'];
console.log(frutas[2]); //Maça;
// === > Exemplo 03 - Adicionando mais strings com método 'push'
console.log("=== Exemplo 03 - Adicionando mais strings com método 'push' ===");
let idiomas = ['Portugues', 'Ingles', 'Frances'];
console.log(idiomas);
idiomas.push('Espanhol');
console.log(idiomas);
// === > Exemplo 04 - Exemplo de Array com Spread Operator
console.log("=== Exemplo 04 - Exemplo de Array com Spread Operator ===");
let arrayNumber = [0, 1, 2, 3, 4];
arrayNumber = [...arrayNumber, 50, 60, 70];
console.log(arrayNumber);
// === > Exemplo 05 - Exemplo de Array com laço de iteração 
console.log("=== Exemplo 05 - Exemplo de Array com laço de iteração ===");
let linguagemArray = new Array("JS", "C#", "PHP", 'Python');
function funcaoLinguagens(linguagem) {
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]);
    }
}
funcaoLinguagens(linguagemArray);
