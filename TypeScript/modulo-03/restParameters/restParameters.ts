import MostrarTituloExemplo from "../../utils/utils";
 
// ===> Exemplo 01
MostrarTituloExemplo("=== Exemplo 01 ===");

const somarNumeros = (...numeros: number[]): number => {
    let total: number = 0;
    numeros.forEach((numero) => total += numero);

    return total;
}

console.log(somarNumeros(10, 34, 9));
console.log(somarNumeros(10, 34, 9, 10, 100));

// ===> Exemplo 02
MostrarTituloExemplo("=== Exemplo 02 ===");

const listarFrutas = (frase: string, ...frutas: string[]): string => {
    let existeAbacaxi: boolean = frutas.indexOf("Abacaxi") > 0;

    if(existeAbacaxi)
        frutas.push("Hortelã");

    return `${frase} ${frutas.join(', ')}`;
}

console.log(listarFrutas("Heber, vá a feira e compre as frutas:", "Maça", "Manga", "Pera", "Abacaxi"));