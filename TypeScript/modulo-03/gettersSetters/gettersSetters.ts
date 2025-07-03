import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01: Get
MostrarTituloExemplo("=== Exemplo 01: Get ===");

class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._largura * this._altura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// ===> Exemplo 02: Set
MostrarTituloExemplo("=== Exemplo 02: Set ===");

class PessoaSet{
    nome?: string;

    set colocarNome(nome: string){
        this.nome = nome;
    }

    get obterNome(){
        return this.nome;
    }
}

const pessoa1 = new PessoaSet();
pessoa1.colocarNome = "Heber G";
console.log(`O nome do cadastro é: ${pessoa1.obterNome}`);
