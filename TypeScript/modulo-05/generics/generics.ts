import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01");

function retornarDadosRandomicos<T>(itens: T[]): T {
    let itemRandomico = Math.floor(Math.random() * itens.length);
    return itens[itemRandomico];
}

console.log(retornarDadosRandomicos<number>([1, 2, 3, 4, 5, 6]));
console.log(retornarDadosRandomicos<string>(["Compass", "Corolla", "S10", "Triton L200"]));