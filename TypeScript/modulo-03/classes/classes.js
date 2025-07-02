"use strict";
// ===> Exemplo 01
class Produto {
    constructor(nome, preco, quantidadeProdutosCarrinho = 0) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeProdutosCarrinho = quantidadeProdutosCarrinho;
    }
    mostrarQuantidadeProdutosCarrinho() {
        return this.quantidadeProdutosCarrinho;
    }
    adicionarProdutosCarrinho(quant = 1) {
        this.quantidadeProdutosCarrinho += quant;
    }
}
const produtoMouse = new Produto("Mouse", 12.2);
produtoMouse.adicionarProdutosCarrinho();
console.log("Quant. Mouse: " + produtoMouse.mostrarQuantidadeProdutosCarrinho());
produtoMouse.adicionarProdutosCarrinho(11);
console.log("Quant. Mouse Atualizado: " + produtoMouse.mostrarQuantidadeProdutosCarrinho());
