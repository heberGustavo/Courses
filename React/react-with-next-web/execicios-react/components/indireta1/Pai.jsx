import Filho from "./Filho";

export default function Pai(){

    function falarComigo(msg1, msg2, msg3){
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
    }

    return <Filho funcao={falarComigo} />
}