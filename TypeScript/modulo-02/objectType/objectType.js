"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01 → Exemplo básico do uso do Type Object
(0, utils_1.default)("=== Exemplo 01 → Exemplo básico do uso do Type Object ===");
const pessoaBasica = {
    nome: "Heber G",
    idade: 27,
    altura: 1.80,
    cidade: "SP"
};
console.log(console.log(JSON.stringify(pessoaBasica, null, 2)));
// ===> Exemplo 02 → object como parâmetros de função (eles podem ser anônimos)
(0, utils_1.default)("=== Exemplo 02 → object como parâmetros de função (eles podem ser anônimos) ===");
const mensagemBoasVindas = (funcionario) => {
    console.log(`Seja bem-vindo(a) ${funcionario.nomeFuncionario}`);
};
console.log(mensagemBoasVindas({ nomeFuncionario: "Heber G" }));
// ===> Exemplo 03 → object nomeados e usando optional no object
(0, utils_1.default)("=== Exemplo 03 → object nomeados ===");
const apresentacaoFuncionario = (pessoa) => {
    console.log(`Olá, ${pessoa.nome}. Sua função na empresa será ${pessoa.funcao}`);
};
console.log(apresentacaoFuncionario({ nome: "Priscila M", funcao: "CEO" }));
// ===> Exemplo 04 → tipos de extensões (heranças)
(0, utils_1.default)("=== Exemplo 04 → tipos de extensões (heranças) ===");
const filho = {
    nome: "Heber",
    sobrenome: "Cruz",
    idade: 27
};
console.log(JSON.stringify(filho, null, 2));
const usuarioComum = {
    nome: "Heber G",
    email: "teste@teste.com"
};
const usuarioAdmin = {
    nome: "Heber G",
    email: "teste@teste.com",
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuarioComum));
console.log(acessarSistema(usuarioAdmin));
