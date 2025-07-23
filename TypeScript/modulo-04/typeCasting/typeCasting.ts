import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01 - Type Casting 'as' ");

const nome: unknown = "Heber Gustavo";
console.log((nome as string).length);

MostrarTituloExemplo("Exemplo 02 - Type Casting '<>' ");

const carro = "S10";
const tamanhoString: number = (<string> carro).length;

console.log(`A string ${carro}, tem o tamanho ${tamanhoString}`);