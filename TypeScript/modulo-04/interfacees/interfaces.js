"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01: Interface Simples
// ===> Exemplo 02: Interface com Propriedades Opcionais
(0, utils_1.default)("=== Exemplo 01 e 02: Interface Simples e com Propriedades Opcionais ===");
const heber = {
    nome: "Heber",
    sobrenome: "Gustavo",
    idade: 27
};
function exibirDadosPessoa(pessoa) {
    return `
    Nome........: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade.......: ${pessoa.idade}
    `;
}
console.log(exibirDadosPessoa(heber));
// ===> Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais
(0, utils_1.default)("=== Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais ===");
const fusca = {
    modelo: "Fusca",
    ano: 1990
};
fusca.ano = 2010;
//fusca.modelo = "Fusca 2.0";
console.log(fusca);
// ===> Exemplo 04: Interface com implements Class
(0, utils_1.default)("=== Exemplo 04: Interface com implements Class ===");
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} esta comendo ${tipoComida}`);
    }
}
const gato = new Gato("Totó", 10, true);
gato.comer("Paçoca");
// ===> Exemplo 05: Interface vs Type Alias
(0, utils_1.default)("=== Exemplo 05: Interface vs Type Alias ===");
