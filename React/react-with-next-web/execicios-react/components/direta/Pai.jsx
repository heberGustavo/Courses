import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <Filho {...props} nome="Ravi" familia={props.familia} />
            <Filho nome="Henry" familia={props.familia} />
            <Filho nome="Zoe" familia={props.familia} />
        </div>
    );
}