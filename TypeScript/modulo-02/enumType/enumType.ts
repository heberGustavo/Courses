import MostrarTituloExemplo from "../../utils/utils";

// ===> Exemplo 01: Numeric Enums (Enums Numérico)
MostrarTituloExemplo("=== Exemplo 01: Numeric Enums (Enums Numérico) ===")
enum Idiomas {
    Portugues,
    Ingles,
    Espanhol,
    Frances
}

console.log(Idiomas)

// ===> Exemplo 02: String Enums
MostrarTituloExemplo("=== Exemplo 02: String Enums ===")
enum IdiomasString {
    Portugues = "PT-BR",
    Ingles = "EN",
    Espanhol = "ES",
    Frances = "FR"
}

console.log(IdiomasString.Ingles)
