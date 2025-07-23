"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo - Intersection Types");
const dadosCliente = {
    conta: 319,
    agencia: 123,
    banco: "Brasil",
    nome: "HeberG",
    email: 'heber.gmail.com',
    cpf: 123,
};
console.log(dadosCliente);
