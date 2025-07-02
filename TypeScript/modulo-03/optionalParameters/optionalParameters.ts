import MostrarTituloExemplo from "../../utils/utils";

interface Pessoa {
    nome: string,
    idade: number,
    email?: string,
    sexo?: string,
}

// ===> Exemplo 01
MostrarTituloExemplo("=== Exemplo 01 ===")
const pessoa1: Pessoa = {
    nome: "Heber G",
    idade: 37,
}

console.log(pessoa1);
console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}, Email: ${pessoa1.sexo || "Essas pessoa não possui sexo registrado."}`);

// ===> Exemplo 02
MostrarTituloExemplo("=== Exemplo 02 ===")
const pessoa2: Pessoa = {
    nome: "Heber G",
    idade: 37,
    sexo: "M"
}

console.log(pessoa2);
console.log(pessoa2.email ?? "A pessoa 2 não possui email registrado.")

// ===> Exemplo 03
MostrarTituloExemplo("=== Exemplo 03 ===")
const pessoa3: Pessoa = {
    nome: "Heber G",
    idade: 37,
    sexo: "M",
    email: "heber@teste.com"
}

console.log(pessoa3);