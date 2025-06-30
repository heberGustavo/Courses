"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01: Numeric Enums (Enums Numérico)
(0, utils_1.default)("=== Exemplo 01: Numeric Enums (Enums Numérico) ===");
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Ingles"] = 1] = "Ingles";
    Idiomas[Idiomas["Espanhol"] = 2] = "Espanhol";
    Idiomas[Idiomas["Frances"] = 3] = "Frances";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
// ===> Exemplo 02: String Enums
(0, utils_1.default)("=== Exemplo 02: String Enums ===");
var IdiomasString;
(function (IdiomasString) {
    IdiomasString["Portugues"] = "PT-BR";
    IdiomasString["Ingles"] = "EN";
    IdiomasString["Espanhol"] = "ES";
    IdiomasString["Frances"] = "FR";
})(IdiomasString || (IdiomasString = {}));
console.log(IdiomasString.Ingles);
