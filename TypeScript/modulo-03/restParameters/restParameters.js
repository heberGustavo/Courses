"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01
(0, utils_1.default)("=== Exemplo 01 ===");
const somarNumeros = (...numeros) => {
    let total = 0;
    numeros.forEach((numero) => total += numero);
    return total;
};
console.log(somarNumeros(10, 34, 9));
console.log(somarNumeros(10, 34, 9, 10, 100));
// ===> Exemplo 02
(0, utils_1.default)("=== Exemplo 02 ===");
const listarFrutas = (frase, ...frutas) => {
    let existeAbacaxi = frutas.indexOf("Abacaxi") > 0;
    if (existeAbacaxi)
        frutas.push("Hortelã");
    return `${frase} ${frutas.join(', ')}`;
};
console.log(listarFrutas("Heber, vá a feira e compre as frutas:", "Maça", "Manga", "Pera", "Abacaxi"));
