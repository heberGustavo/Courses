export default function Estilo(props){
    return(
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "orange" : "brown",
                color: props.numero < 0 ? "white" : "black"
            }}>
                {props.titulo}
            </h1>
            <h1 className={props.numero >= 0 ? "green" : "blueviolet"}>
                {props.titulo}
            </h1>

            <br />
        </div>
    );
}