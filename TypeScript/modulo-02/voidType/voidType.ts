
function hello(): void {
    console.log("Estou criando uma function");
}

hello();

const hello2 = (): void => {
    console.log("Estou criando uma function com arrow functions");
}

hello2();

const hello3 = (): string => {
    console.log("Estou criando uma function com arrow functions - string");
    return "meu teste";
}

hello3();