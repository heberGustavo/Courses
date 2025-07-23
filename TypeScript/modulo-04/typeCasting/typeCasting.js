"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01 - Type Casting 'as' ");
const nome = "Heber Gustavo";
console.log(nome.length);
(0, utils_1.default)("Exemplo 02 - Type Casting '<>' ");
const carro = "S10";
const tamanhoString = carro.length;
console.log(`A string ${carro}, tem o tamanho ${tamanhoString}`);
