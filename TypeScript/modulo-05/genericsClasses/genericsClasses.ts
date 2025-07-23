import MostrarTituloExemplo from "../../utils/utils";

MostrarTituloExemplo("Exemplo 01");

class Box<T> {
    private item: T;

    constructor(item: T){
        this.item = item;
    }

    getItem(){
        return this.item;
    }

    setItem(item: T){
        this.item = item;
    }
}

const boxString = new Box<string>("Teste string");
console.log(boxString);

const boxNumber = new Box<number>(123);
console.log(boxNumber);
