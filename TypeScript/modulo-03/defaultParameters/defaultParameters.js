"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01
(0, utils_1.default)("=== Exemplo 01 ===");
const mostrarDadosDeAlguem = (nome, idade, paisNascimento = "Brasil") => {
    console.log(`O ser humaninho ${nome}, tem ${idade} anos e nasceu no país ${paisNascimento}`);
};
mostrarDadosDeAlguem("Heber G", 30);
mostrarDadosDeAlguem("Parascohvi", 32, "Croacia");
