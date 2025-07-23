import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01 - com problema");

function juntarObjetos<U, V>(obj1: U, obj2: V){
    return {
        ...obj1,
        ...obj2
    };
}

console.log(juntarObjetos(
    {nome: "Gustavo"},
    30 //simulação de problema
));

MostrarTituloExemplo("Exemplo 02 - SEM problema");

function juntarObjetos2<U extends object, V extends object>(obj1: U, obj2: V){
    return {
        ...obj1,
        ...obj2
    };
}

console.log(juntarObjetos2(
    { nome: "Gustavo" },
    { idade: 27 }
));