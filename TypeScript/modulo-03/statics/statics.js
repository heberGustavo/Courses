"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01: Propriedades Estáticas
(0, utils_1.default)("=== Exemplo 01: Propriedades Estáticas ===");
class Funcionario {
    constructor(nome, funcao) {
        this.nome = nome;
        this.funcao = funcao;
        Funcionario.contratacoes++;
        this.nome = nome;
        this.funcao = funcao;
    }
    get obterQuantidadeContratacao() {
        return Funcionario.contratacoes;
    }
}
Funcionario.contratacoes = 0;
const func1 = new Funcionario("Heber G", "Dev");
console.log(`Quant. contratação atual: ${Funcionario.contratacoes}`);
const func2 = new Funcionario("Pri M", "CEO");
console.log(`Quant. contratação atual: ${Funcionario.contratacoes}`);
// ===> Exemplo 02: Métodos Estáticos
(0, utils_1.default)("=== Exemplo 02: Métodos Estáticos ===");
class Funcionario2 {
    constructor(nome, sobrenome, funcao) {
        Funcionario2.contratacoes++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.funcao = funcao;
    }
    static retornarContratacoes() {
        return Funcionario2.contratacoes;
    }
}
Funcionario2.contratacoes = 0;
const func3 = new Funcionario2("Heber", "Gustavo", "Dev");
console.log("Exemplo 2: " + Funcionario2.retornarContratacoes());
const func4 = new Funcionario2("Pri", "Marques", "Teacher");
console.log("Exemplo 2: " + Funcionario2.retornarContratacoes());
// ===> Exemplo 03: Propriedades Estáticas
(0, utils_1.default)("=== Exemplo 03: Propriedades Estáticas ===");
class Cachorro {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        Cachorro.QNT_CACHORRO_VENDIDO++;
    }
    exibirInformacoes() {
        return `Esse cachorro tem o nome ${this.nome} e ${this.idade} de idade!`;
    }
}
Cachorro.QNT_CACHORRO_VENDIDO = 0;
const dog1 = new Cachorro("Pardal", 12, ['Caramelo']);
console.log(dog1.exibirInformacoes());
