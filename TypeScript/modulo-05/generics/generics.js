"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01");
function retornarDadosRandomicos(itens) {
    let itemRandomico = Math.floor(Math.random() * itens.length);
    return itens[itemRandomico];
}
console.log(retornarDadosRandomicos([1, 2, 3, 4, 5, 6]));
console.log(retornarDadosRandomicos(["Compass", "Corolla", "S10", "Triton L200"]));
