import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01 - Type Guard: typeof");

type alfanumerico = string | number;

const exibirTipo = (a: alfanumerico, b: alfanumerico) => {
    if(typeof a === "number" && typeof b === "number")
        return a + b;

    if(typeof a === "string" && typeof b === "string")
        return a.concat(b);

    throw new Error("Argumentos inválidos! Ambos argumentos devem ser númericos ou string.");
}

// console.log(exibirTipo("12", "21"));
// console.log(exibirTipo(12, 21));
// console.log(exibirTipo(12, "Forçar erro"));


MostrarTituloExemplo("Exemplo 02 - Type Guard: instanceof");

class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string){
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;        
    }
}

const detalhesVeiculo = (veiculo: Carro | Moto) => {
    if (veiculo instanceof Carro)
        return `O nome do carro é ${veiculo.nome}`;

    if (veiculo instanceof Moto)
        return `Essa moto foi fabricada no ano ${veiculo.ano}`;

    throw new Error("Argumento inválido! É permitido somente Carro ou Moto");
}

const carro = new Carro("Gol", "Volks");
console.log(detalhesVeiculo(carro));

const moto = new Moto("BMW 1200", 2025);
console.log(detalhesVeiculo(moto));

MostrarTituloExemplo("Exemplo 03 - Type Guard: in");

interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corAsa: string;

    constructor(grupo: string, corAsa: string){
        this.grupo = grupo;
        this.corAsa = corAsa;
    }
}

const nadar = (grupo: string) => {
    console.log(`O ${grupo} está nadando...`);
}

const voar = (grupo: string) => {
    console.log(`O ${grupo} está voando...`);
}

const mover = (animal: Animal) => {
    if('corPeixe' in animal)
        nadar((animal as Peixe).grupo);
    else if ('corAsa' in animal)
        voar((animal as Passaro).grupo);
}

mover(new Peixe("Asa Dourada", "Azul"));
mover(new Passaro("Pardal", "Marrom"));