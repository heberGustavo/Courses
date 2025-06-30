import MostrarTituloExemplo from "../../utils/utils";

// === > Exemplo 01 - Uso de Colchetes:
MostrarTituloExemplo("=== Exemplo 01 - Uso de Colchetes ===");
let frutas: string[] = ['Melancia', 'Amora', 'Maça', 'Manga', 'Goiaba'];
console.log(frutas[1]) //Amora;


// === > Exemplo 02 - Array Object (Objeto Array):
MostrarTituloExemplo("=== Exemplo 02 - Array Object (Objeto Array) ===");
let frutas2: Array<string> = ['Melancia', 'Amora', 'Maça', 'Manga', 'Goiaba'];
console.log(frutas[2]) //Maça;


// === > Exemplo 03 - Adicionando mais strings com método 'push'
MostrarTituloExemplo("=== Exemplo 03 - Adicionando mais strings com método 'push' ===");
let idiomas: Array<string> = ['Portugues', 'Ingles', 'Frances'];
console.log(idiomas);
idiomas.push('Espanhol');
console.log(idiomas);

// === > Exemplo 04 - Exemplo de Array com Spread Operator
MostrarTituloExemplo("=== Exemplo 04 - Exemplo de Array com Spread Operator ===");
let arrayNumber: Array<number> = [0, 1, 2, 3, 4];
arrayNumber = [...arrayNumber, 50, 60, 70];
console.log(arrayNumber);

// === > Exemplo 05 - Exemplo de Array com laço de iteração 
MostrarTituloExemplo("=== Exemplo 05 - Exemplo de Array com laço de iteração ===");
let linguagemArray: string[] = new Array("JS", "C#", "PHP", 'Python');

function funcaoLinguagens(linguagem: string[]) {
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]);
    }
}

funcaoLinguagens(linguagemArray);