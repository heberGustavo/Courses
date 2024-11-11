export default function Filho(props){
    return(
        <div style={{display: "flex", alignItems: "center"}}>
            <h3>{props.nome}</h3> &nbsp;
            <h3>{props.familia}</h3>
        </div>
    );
}