
// ================== ANNOTATION ================== //

// ===> VARIAVEIS
let primeiroNome: string = "Heber";
let idade: number = 22;
let altura: number = 1.70;
let estudando: boolean = true;

// ===> ARRAYS
let arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
let arrayDeStrings: string[] = ["Heber", "Gustavo", "Cruz"];
let arrayDeBoolean: boolean[] = [true, false, true, false];

// ===> OBJETOS
let pessoa: {
    nome: string,
    idade: number,
    altura: number,
    estudando: boolean
};

pessoa: pessoa = {
    nome: "Heber",
    idade: 27,
    altura: 1.80,
    estudando: true
}

console.log(`Os dados completo da pessoa em JSON: ${JSON.stringify(pessoa)}`);

// ===> FUNÇÕES
function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}

console.log(`A multiplicação dos números tem o resultado: ${multiplicarNumeros(1.5, 10)}`);

