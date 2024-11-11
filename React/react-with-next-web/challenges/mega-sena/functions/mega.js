export function mega(quantNumeros = 6, numerosMega = []){
    quantNumeros = +quantNumeros;
    if(quantNumeros < 6 || quantNumeros > 60)
        throw "Quantidade inválida";

    if(numerosMega.length === quantNumeros)
        return numerosMega.sort((n1, n2) => n1 - n2);

    const novoNumero = parseInt(Math.random() * 60) + 1;
    if(numerosMega.includes(novoNumero))
        return mega(quantNumeros, numerosMega);
    else 
        return mega(quantNumeros, [...numerosMega, novoNumero])
}
