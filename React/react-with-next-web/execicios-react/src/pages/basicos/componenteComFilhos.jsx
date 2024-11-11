import ItemLista from "../../../components/ItemLista";
import Lista from "../../../components/Lista";

export default function componenteComFilhos() {
    return (
        <div>
            <h1 style={{fontSize: "30px", marginBottom: "10px"}}>Lista com dados</h1>
            <Lista>
                <ItemLista valor="Item #01" />
                <ItemLista valor="Item #02" />
                <ItemLista valor="Item #03" />
                <ItemLista valor="Item #04" />
            </Lista>
        </div>
    );
}