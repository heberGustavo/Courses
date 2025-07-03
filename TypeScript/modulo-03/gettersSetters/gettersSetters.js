"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01: Get
(0, utils_1.default)("=== Exemplo 01: Get ===");
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._largura * this._altura;
    }
}
console.log(new Quadrado().calcularQuadrado);
// ===> Exemplo 02: Set
(0, utils_1.default)("=== Exemplo 02: Set ===");
class PessoaSet {
    set colocarNome(nome) {
        this.nome = nome;
    }
    get obterNome() {
        return this.nome;
    }
}
const pessoa1 = new PessoaSet();
pessoa1.colocarNome = "Heber G";
console.log(`O nome do cadastro é: ${pessoa1.obterNome}`);
