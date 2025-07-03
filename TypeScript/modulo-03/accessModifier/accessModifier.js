"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01- Modificador: public
(0, utils_1.default)("=== Exemplo 01- Modificador: public ===");
class Estudante {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}
const estudante = new Estudante();
estudante.nome = "HG";
estudante.nota = 11;
console.log(`${estudante.nome} tem a nota: ${estudante.nota}`);
// ===> Exemplo 02 - Modificador: private
(0, utils_1.default)("=== Exemplo 02 - Modificador: private ===");
class Estudante2 {
    constructor(nome, nota, email) {
        this.nome = nome;
        this.nota = nota;
    }
}
const estudante2 = new Estudante2();
estudante2.nome = "HG";
estudante2.nota = 11;
//estudante2.email ===> Not working
console.log(`${estudante.nome} tem a nota: ${estudante.nota}`);
// ===> Exemplo 03 Modificador: protected
(0, utils_1.default)("=== Exemplo 03 Modificador: protected ===");
class Pessoa {
}
class Estudante3 extends Pessoa {
    constructor(nome, nota, email) {
        super();
        this.nome = nome;
        this.nota = nota;
    }
    obterEmail() {
        return this.email ?? "Usuário não tem email cadastrado!";
    }
    cadastrarEmail(email) {
        this.email = email;
    }
}
const estudante3 = new Estudante3();
console.log(estudante3.obterEmail());
estudante3.cadastrarEmail("heber@blabla.com");
console.log(estudante3.obterEmail());
