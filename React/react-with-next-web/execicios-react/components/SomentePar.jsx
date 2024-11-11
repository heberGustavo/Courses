export default function SomentePar(props){
     const numeroPar = props.numero % 2 === 0;
     return numeroPar ? <h3>{props.numero}</h3> : null
}