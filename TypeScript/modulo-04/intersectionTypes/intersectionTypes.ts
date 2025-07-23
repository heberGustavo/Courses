import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo - Intersection Types");
interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}
interface Cliente {
    nome: string;
    email: string;
}
interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    conta: 319,
    agencia: 123,
    banco: "Brasil",
    nome: "HeberG",
    email: 'heber.gmail.com',
    cpf: 123,
};

console.log(dadosCliente);