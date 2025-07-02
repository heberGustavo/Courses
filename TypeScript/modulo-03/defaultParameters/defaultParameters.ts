import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01
MostrarTituloExemplo("=== Exemplo 01 ===")

const mostrarDadosDeAlguem = (nome: string, idade: number, paisNascimento: string = "Brasil") => {
    console.log(`O ser humaninho ${nome}, tem ${idade} anos e nasceu no país ${paisNascimento}`);
}

mostrarDadosDeAlguem("Heber G", 30);
mostrarDadosDeAlguem("Parascohvi", 32, "Croacia");
