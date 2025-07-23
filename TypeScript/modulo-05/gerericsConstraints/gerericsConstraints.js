"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01 - com problema");
function juntarObjetos(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
console.log(juntarObjetos({ nome: "Gustavo" }, 30 //simulação de problema
));
(0, utils_1.default)("Exemplo 02 - SEM problema");
function juntarObjetos2(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
console.log(juntarObjetos2({ nome: "Gustavo" }, { idade: 27 }));
