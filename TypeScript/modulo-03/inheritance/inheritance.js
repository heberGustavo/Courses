"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01
(0, utils_1.default)("=== Exemplo 01 ===");
class Animal {
    set andar(passos) {
        this.passos = passos;
    }
    get obterPassos() {
        return this.passos;
    }
}
class Cachorro extends Animal {
    get latir() {
        return "Au! Au!";
    }
}
var dog = new Cachorro();
console.log(dog.latir);
dog.andar = 12;
console.log(`O cachorro andou ${dog.obterPassos} passos!`);
console.log(dog.latir);
// ===> Exemplo 02
(0, utils_1.default)("=== Exemplo 02 ===");
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    get apresentarPessoa() {
        return `Olá, eu me chamo ${this.retornarNomeCompleto}!`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    get apresentarComFuncao() {
        return `${super.apresentarPessoa}. Minha função atual é: ${this.funcao}!`;
    }
}
const funcionario1 = new Funcionario("Heber", "Cruz", "Dev");
console.log(funcionario1.retornarNomeCompleto);
console.log(funcionario1.apresentarPessoa);
console.log(funcionario1.apresentarComFuncao);
