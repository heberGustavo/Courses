"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01 - Interface com extends");
const cachorro = {
    nome: "Jack",
    idade: 12,
    porte: "Pequeno",
    raca: "Caramelo"
};
console.log(JSON.stringify(cachorro));
