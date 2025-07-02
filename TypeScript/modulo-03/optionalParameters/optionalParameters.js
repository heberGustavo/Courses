"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01
(0, utils_1.default)("=== Exemplo 01 ===");
const pessoa1 = {
    nome: "Heber G",
    idade: 37,
};
console.log(pessoa1);
console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}, Email: ${pessoa1.sexo || "Essas pessoa não possui sexo registrado."}`);
// ===> Exemplo 02
(0, utils_1.default)("=== Exemplo 02 ===");
const pessoa2 = {
    nome: "Heber G",
    idade: 37,
    sexo: "M"
};
console.log(pessoa2);
console.log(pessoa2.email ?? "A pessoa 2 não possui email registrado.");
// ===> Exemplo 03
(0, utils_1.default)("=== Exemplo 03 ===");
const pessoa3 = {
    nome: "Heber G",
    idade: 37,
    sexo: "M",
    email: "heber@teste.com"
};
console.log(pessoa3);
