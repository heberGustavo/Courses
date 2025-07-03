"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01
(0, utils_1.default)("=== Exemplo 01 ===");
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(1998, 10, 10));
// ===> Exemplo 02
(0, utils_1.default)("==== Exemplo 02 ===");
class Funcionario2 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
