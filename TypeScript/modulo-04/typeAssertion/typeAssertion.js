"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01 - Type Assertion 'as' '< >' ");
function exibirPrecoFinal(preco, desconto, formato) {
    const precoComDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}
//const descontoFinal = exibirPrecoFinal(100, 0.05, false) as string;
const descontoFinal = exibirPrecoFinal(100, 0.05, false);
console.log(descontoFinal);
