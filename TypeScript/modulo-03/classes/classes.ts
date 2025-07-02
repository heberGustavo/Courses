
// ===> Exemplo 01
class Produto {
    nome: string;
    preco: number;
    quantidadeProdutosCarrinho: number;

    constructor(nome: string, preco: number, quantidadeProdutosCarrinho: number = 0) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeProdutosCarrinho = quantidadeProdutosCarrinho;
    }

    mostrarQuantidadeProdutosCarrinho(): number{
        return this.quantidadeProdutosCarrinho;
    }

    adicionarProdutosCarrinho(quant: number = 1): void {
        this.quantidadeProdutosCarrinho += quant;
    }
}

const produtoMouse = new Produto("Mouse", 12.2);
produtoMouse.adicionarProdutosCarrinho();
console.log("Quant. Mouse: " + produtoMouse.mostrarQuantidadeProdutosCarrinho())

produtoMouse.adicionarProdutosCarrinho(11);
console.log("Quant. Mouse Atualizado: " + produtoMouse.mostrarQuantidadeProdutosCarrinho())