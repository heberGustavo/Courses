import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript
MostrarTituloExemplo("=== Exemplo 01 - Uso simples de Tuplas em TypeScript ===")
let tuplePessoa: [string, string, number];
tuplePessoa = ['Heber', 'Dev', 99];
console.log(tuplePessoa);

// ===> Exemplo 02 - Acessando o valor da Tupla
MostrarTituloExemplo("=== Exemplo 02 - Acessando o valor da Tupla ===")
console.log(tuplePessoa[0]);

// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
// ===> Exemplo 04 - Usando Tuplas com Spread Operator
// ===> Exemplo 05 - Lista Heterogênea de Tupla:
// ===> Exemplo 06 - Uso de função com Tuplas
// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função