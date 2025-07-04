import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01: Propriedades Estáticas
MostrarTituloExemplo("=== Exemplo 01: Propriedades Estáticas ===");

class Funcionario {
    static contratacoes: number = 0;

    constructor(private nome: string, private funcao: string){
        Funcionario.contratacoes++;

        this.nome = nome;
        this.funcao = funcao;
    }

    get obterQuantidadeContratacao(): number{
        return Funcionario.contratacoes;
    }
}

const func1 = new Funcionario("Heber G", "Dev");
console.log(`Quant. contratação atual: ${Funcionario.contratacoes}`);

const func2 = new Funcionario("Pri M", "CEO");
console.log(`Quant. contratação atual: ${Funcionario.contratacoes}`);

// ===> Exemplo 02: Métodos Estáticos
MostrarTituloExemplo("=== Exemplo 02: Métodos Estáticos ===");

class Funcionario2 {
    private static contratacoes = 0;

    private nome: string;
    private sobrenome: string;
    private funcao: string;

    constructor(nome: string, sobrenome: string, funcao:string){
        Funcionario2.contratacoes++;

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.funcao = funcao;
    }

    public static retornarContratacoes(){
        return Funcionario2.contratacoes;
    }
}

const func3 = new Funcionario2("Heber", "Gustavo", "Dev");
console.log("Exemplo 2: " + Funcionario2.retornarContratacoes());
const func4 = new Funcionario2("Pri", "Marques", "Teacher");
console.log("Exemplo 2: " + Funcionario2.retornarContratacoes());

// ===> Exemplo 03: Propriedades Estáticas
MostrarTituloExemplo("=== Exemplo 03: Propriedades Estáticas ===");

type Raca = "Pintcher" | "Caramelo" | "Neguinho";

class Cachorro {
    public nome: string;
    public idade: number;
    public raca: Raca[];
    public static QNT_CACHORRO_VENDIDO = 0;

    constructor(nome: string, idade: number, raca: Raca[]){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;

        Cachorro.QNT_CACHORRO_VENDIDO++;
    }

    public exibirInformacoes(){
        return `Esse cachorro tem o nome ${this.nome} e ${this.idade} de idade!`;
    }
}

const dog1 = new Cachorro("Pardal", 12, ['Caramelo']);
console.log(dog1.exibirInformacoes());