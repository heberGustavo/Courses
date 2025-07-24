"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
const email_validator_1 = require("./email-validator");
(0, utils_1.default)("Exemplo 01");
let email = "heberg@teste.com";
let validator = new email_validator_1.EmailValidator();
let result = validator.isValid(email);
console.log(`O email ${email} ${result ? "é" : "não é"} valido`);
