import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01: Interface Simples
// ===> Exemplo 02: Interface com Propriedades Opcionais
MostrarTituloExemplo("=== Exemplo 01 e 02: Interface Simples e com Propriedades Opcionais ===");

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    sexo?: number;
}

const heber: Pessoa = {
    nome: "Heber",
    sobrenome: "Gustavo",
    idade: 27
};

function exibirDadosPessoa(pessoa: Pessoa){
    return `
    Nome........: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade.......: ${pessoa.idade}
    `;
}

console.log(exibirDadosPessoa(heber));

// ===> Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais
MostrarTituloExemplo("=== Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais ===");

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const fusca: Carro = {
    modelo: "Fusca",
    ano: 1990
}

fusca.ano = 2010;
//fusca.modelo = "Fusca 2.0";

console.log(fusca);

// ===> Exemplo 04: Interface com implements Class
MostrarTituloExemplo("=== Exemplo 04: Interface com implements Class ===");

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    comer(tipoComida: string): void;
}

class Gato implements IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string){
        console.log(`O gato ${this.nome} esta comendo ${tipoComida}`);
    }
}

const gato = new Gato("Totó", 10, true);
gato.comer("Paçoca");

// ===> Exemplo 05: Interface vs Type Alias
MostrarTituloExemplo("=== Exemplo 05: Interface vs Type Alias ===")

interface Pessoa_2 {
    nome: string;
    idade: number;
}

type Pessoa_3 = {
    nome: string;
    idade: number;
}