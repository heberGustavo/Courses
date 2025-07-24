"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
const math_1 = require("./math");
(0, utils_1.default)("Exemplo 01");
console.log(`Soma: ${(0, math_1.somar)(12, 38)}`);
console.log(`Sub: ${(0, math_1.sub)(10, 38)}`);
console.log(`Div: ${(0, math_1.div)(10, 10)}`);
console.log(`Mult: ${(0, math_1.mult)(3, 100)}`);
