import MostrarTituloExemplo from "../../utils/utils";
import { EmailValidator } from "./email-validator";

MostrarTituloExemplo("Exemplo 01");

let email = "heberg@teste.com";
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O email ${email} ${result ? "é" : "não é"} valido`);