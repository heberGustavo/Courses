import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01 → Exemplo básico do uso do Type Object
MostrarTituloExemplo("=== Exemplo 01 → Exemplo básico do uso do Type Object ===");
const pessoaBasica = {
    nome: "Heber G",
    idade: 27,
    altura: 1.80,
    cidade: "SP"
}

console.log(console.log( JSON.stringify(pessoaBasica, null, 2) ))

// ===> Exemplo 02 → object como parâmetros de função (eles podem ser anônimos)
MostrarTituloExemplo("=== Exemplo 02 → object como parâmetros de função (eles podem ser anônimos) ===");

const mensagemBoasVindas = (funcionario: {nomeFuncionario: string}): void => {
    console.log(`Seja bem-vindo(a) ${funcionario.nomeFuncionario}`);
}

console.log(mensagemBoasVindas({ nomeFuncionario: "Heber G"}));

// ===> Exemplo 03 → object nomeados e usando optional no object
MostrarTituloExemplo("=== Exemplo 03 → object nomeados ===");

interface PessoaFuncionario {
    nome: string;
    funcao: string;
    email?: string;
}

const apresentacaoFuncionario = (pessoa: PessoaFuncionario) => {
    console.log(`Olá, ${pessoa.nome}. Sua função na empresa será ${pessoa.funcao}`);
}

console.log(apresentacaoFuncionario({nome: "Priscila M", funcao: "CEO"}));

// ===> Exemplo 04 → tipos de extensões (heranças)
MostrarTituloExemplo("=== Exemplo 04 → tipos de extensões (heranças) ===")

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filho extends Mae, Pai{
    idade: number;
}

const filho: Filho = {
    nome: "Heber",
    sobrenome: "Cruz",
    idade: 27
}

console.log(JSON.stringify(filho, null, 2));

// ===> Exemplo 05 → Generic Objects

type Usuario = {
    nome: string,
    email: string
}

type Admin = {
    nome: string,
    email: string,
    admin: true;
}

const usuarioComum: Usuario = {
    nome: "Heber G",
    email: "teste@teste.com"
}

const usuarioAdmin: Admin = {
    nome: "Heber G",
    email: "teste@teste.com",
    admin: true
}

function acessarSistema<T> (usuario: T) : T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuarioComum));
console.log(acessarSistema<Admin>(usuarioAdmin));

