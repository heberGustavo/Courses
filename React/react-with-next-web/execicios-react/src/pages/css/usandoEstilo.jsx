import Estilo from "../../../components/Estilo";

export default function usandoEstilo(){
    return (
        <div>
            <Estilo titulo={"Teste #01"} numero={10}/>
            <Estilo titulo={"Teste #02"} numero={-10}/>
        </div>
    );
}