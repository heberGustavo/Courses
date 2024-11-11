export function mega(quantNumeros = 6, numeroMega = []){
    
    quantNumeros = +quantNumeros;
    
    if(quantNumeros < 6 || quantNumeros > 60)
        throw "Quantidade inválida";

    if(numeroMega.length === quantNumeros)
        return numeroMega.sort((n1, n2) => n1 - n2);

    const novoNumeroMega = parseInt(Math.random() * 60) + 1;
    if(numeroMega.includes(novoNumeroMega))
        return mega(quantNumeros, numeroMega);
    else 
        return mega(quantNumeros, [...numeroMega, novoNumeroMega]);

}