import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01 - Interface com extends");
interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal { //para mais de uma interface, usar o extends usando virgula. Ex: [...] extends Animal1, Animal2
    raca: string;
}

const cachorro: Cachorro = {
    nome: "Jack",
    idade: 12,
    porte: "Pequeno",
    raca: "Caramelo"
}

console.log(JSON.stringify(cachorro));