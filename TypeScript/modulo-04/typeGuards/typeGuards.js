"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01 - Type Guard: typeof");
const exibirTipo = (a, b) => {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a.concat(b);
    throw new Error("Argumentos inválidos! Ambos argumentos devem ser númericos ou string.");
};
// console.log(exibirTipo("12", "21"));
// console.log(exibirTipo(12, 21));
// console.log(exibirTipo(12, "Forçar erro"));
(0, utils_1.default)("Exemplo 02 - Type Guard: instanceof");
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
const detalhesVeiculo = (veiculo) => {
    if (veiculo instanceof Carro)
        return `O nome do carro é ${veiculo.nome}`;
    if (veiculo instanceof Moto)
        return `Essa moto foi fabricada no ano ${veiculo.ano}`;
    throw new Error("Argumento inválido! É permitido somente Carro ou Moto");
};
const carro = new Carro("Gol", "Volks");
console.log(detalhesVeiculo(carro));
const moto = new Moto("BMW 1200", 2025);
console.log(detalhesVeiculo(moto));
(0, utils_1.default)("Exemplo 03 - Type Guard: in");
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corAsa) {
        this.grupo = grupo;
        this.corAsa = corAsa;
    }
}
const nadar = (grupo) => {
    console.log(`O ${grupo} está nadando...`);
};
const voar = (grupo) => {
    console.log(`O ${grupo} está voando...`);
};
const mover = (animal) => {
    if ('corPeixe' in animal)
        nadar(animal.grupo);
    else if ('corAsa' in animal)
        voar(animal.grupo);
};
mover(new Peixe("Asa Dourada", "Azul"));
mover(new Passaro("Pardal", "Marrom"));
