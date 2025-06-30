"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript
(0, utils_1.default)("=== Exemplo 01 - Uso simples de Tuplas em TypeScript ===");
let tuplePessoa;
tuplePessoa = ['Heber', 'Dev', 99];
console.log(tuplePessoa);
// ===> Exemplo 02 - Acessando o valor da Tupla
(0, utils_1.default)("=== Exemplo 02 - Acessando o valor da Tupla ===");
console.log(tuplePessoa[0]);
// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
// ===> Exemplo 04 - Usando Tuplas com Spread Operator
// ===> Exemplo 05 - Lista Heterogênea de Tupla:
// ===> Exemplo 06 - Uso de função com Tuplas
// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função
