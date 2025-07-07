
// ===> Exemplo 01
abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {}

    abstract retornarSalario(): number;

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
    
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const heberCLT = new FuncionarioCLT("Heber", "Cruz", 21000);
console.log(heberCLT.emitirContraCheque());

const heberPJ = new FuncionarioPJ("Heber", "Gustavo", 180, 160);
console.log(heberPJ.emitirContraCheque());
