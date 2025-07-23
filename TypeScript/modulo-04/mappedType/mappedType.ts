import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01");

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

type UsuarioMapped = {
    [U in keyof Usuario]?: Usuario[U]; //Transforma todas as propriedades como opcionais
}

const usuarioMapped: UsuarioMapped = {
    nome: "Gustavo",
    idade: 27
}

console.log(usuarioMapped);