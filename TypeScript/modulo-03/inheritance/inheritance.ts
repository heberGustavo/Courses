import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01
MostrarTituloExemplo("=== Exemplo 01 ===");

class Animal {
    passos?: number;

    set andar(passos: number){
        this.passos = passos;
    }

    get obterPassos(){
        return this.passos;
    }

}

class Cachorro extends Animal{
    get latir(){
        return "Au! Au!";
    }
}

var dog = new Cachorro();
console.log(dog.latir);

dog.andar = 12;
console.log(`O cachorro andou ${dog.obterPassos} passos!`);

console.log(dog.latir);


// ===> Exemplo 02
MostrarTituloExemplo("=== Exemplo 02 ===");

class Pessoa{
    constructor(private nome: string, private sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    get apresentarPessoa(): string{
        return `Olá, eu me chamo ${this.retornarNomeCompleto}!`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
    }

    get apresentarComFuncao(): string{
        return `${super.apresentarPessoa}. Minha função atual é: ${this.funcao}!`
    }
}

const funcionario1 = new Funcionario("Heber", "Cruz", "Dev");
console.log(funcionario1.retornarNomeCompleto);
console.log(funcionario1.apresentarPessoa);
console.log(funcionario1.apresentarComFuncao);