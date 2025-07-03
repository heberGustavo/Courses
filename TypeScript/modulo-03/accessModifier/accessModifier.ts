import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01- Modificador: public
MostrarTituloExemplo("=== Exemplo 01- Modificador: public ===");

class Estudante {
    nome?: string;
    nota?: number;

    constructor(nome?: string, nota?: number){
        this.nome = nome;
        this.nota = nota;
    }
}

const estudante = new Estudante();
estudante.nome = "HG";
estudante.nota = 11;

console.log(`${estudante.nome} tem a nota: ${estudante.nota}`);

// ===> Exemplo 02 - Modificador: private
MostrarTituloExemplo("=== Exemplo 02 - Modificador: private ===");

class Estudante2 {
    nome?: string;
    nota?: number;
    private email?: string;

    constructor(nome?: string, nota?: number, email?: string){
        this.nome = nome;
        this.nota = nota;
    }
}

const estudante2 = new Estudante2();
estudante2.nome = "HG";
estudante2.nota = 11;
//estudante2.email ===> Not working

console.log(`${estudante.nome} tem a nota: ${estudante.nota}`);

// ===> Exemplo 03 Modificador: protected
MostrarTituloExemplo("=== Exemplo 03 Modificador: protected ===");

class Pessoa {
    protected email?: string;
}

class Estudante3 extends Pessoa{
    nome?: string;
    nota?: number;

    constructor(nome?: string, nota?: number, email?: string){
        super();
        this.nome = nome;
        this.nota = nota;
    }

    obterEmail(): string {
        return this.email ?? "Usuário não tem email cadastrado!";
    }

    cadastrarEmail(email: string): void {
        this.email = email;
    }
}

const estudante3 = new Estudante3();
console.log(estudante3.obterEmail());

estudante3.cadastrarEmail("heber@blabla.com");
console.log(estudante3.obterEmail());
