import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript
MostrarTituloExemplo("=== Exemplo 01 - Uso simples de Tuplas em TypeScript ===");
let tuplePessoa: [string, string, number];
tuplePessoa = ['Heber', 'Dev', 99];
console.log(tuplePessoa);

// ===> Exemplo 02 - Acessando o valor da Tupla
MostrarTituloExemplo("=== Exemplo 02 - Acessando o valor da Tupla ===");
console.log(tuplePessoa[0]);

// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
MostrarTituloExemplo("=== Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels) === ");
let pessoaEmpresa: [nome: string, empresa: string, anoEntrada: number];
pessoaEmpresa = ['Heber', 'Google', 2031];
console.log(pessoaEmpresa);

// ===> Exemplo 04 - Usando Tuplas com Spread Operator
MostrarTituloExemplo("=== Exemplo 04 - Usando Tuplas com Spread Operator ===");
let grupoFrutas: [string, ...string[]];
grupoFrutas = ['Acabate', 'Abobora', 'Melão', 'Pera', 'Goiaba', 'Tomate'];
console.log(grupoFrutas);

// ===> Exemplo 05 - Lista Heterogênea de Tupla:
MostrarTituloExemplo("=== Exemplo 05 - Lista Heterogênea de Tupla ===");
let listraFrutas2: [disponivelParaVenda:boolean, precoTotal: number, ...string[]];
listraFrutas2 = [true, 83.10, ...grupoFrutas];
console.log(listraFrutas2);

// ===> Exemplo 06 - Uso de função com Tuplas
MostrarTituloExemplo("=== Exemplo 06 - Uso de função com Tuplas ===");
function retornarPessoas(nome: string[], idade: number[]){
    return [...nome, ...idade];
}

let resultadoPessoas = retornarPessoas(['Heber', 'Priscila'], [27, 22]);
console.log(resultadoPessoas);

// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função
MostrarTituloExemplo("=== Exemplo 07 - Labeled Tuples com Spread Operator numa função ===");
type Nome = 
    | [primeiroNome: string, ultimoNome: string]
    | [primeiroNome: string, nomeDoMeio: string, ultimoNome: string];

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa("Heber", "Da Cruz"));
console.log(criarPessoa("Heber", "Gustavo", "Da Cruz"));