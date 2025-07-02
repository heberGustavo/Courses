"use strict";
function hello() {
    console.log("Estou criando uma function");
}
hello();
const hello2 = () => {
    console.log("Estou criando uma function com arrow functions");
};
hello2();
const hello3 = () => {
    console.log("Estou criando uma function com arrow functions - string");
    return "meu teste";
};
hello3();
