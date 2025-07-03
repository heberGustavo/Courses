import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01
MostrarTituloExemplo("=== Exemplo 01 ===");

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(1998, 10, 10));

// ===> Exemplo 02
MostrarTituloExemplo("==== Exemplo 02 ===");
class Funcionario2 {
    constructor(readonly dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}
