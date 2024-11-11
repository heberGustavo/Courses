/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import NumeroDisplay from "../../../components/NumeroDisplay";
import { mega } from "../../../functions/mega";

export default function megasena(){
    
    const [quant, setQuant] = useState(6);
    const [numeros, setNumeros] = useState([]);
    
    useEffect(() => {
        setNumeros(mega())
    }, [])

    const renderizarNumeros = () => {
        return numeros.map(
            item => <NumeroDisplay key={item} number={item} />
        )
    }

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>MEGA</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input 
                    type="number" 
                    min={6} max={20} 
                    style={{border: "1px solid #000", padding: "5px"}}
                    value={quant}
                    onChange={ev => setQuant(ev.target.value)}
                />
                
                <button 
                    onClick={() => setNumeros(mega(quant))}
                    style={{border: "1px solid #000", padding: "5px"}}
                >
                    Gerar Aposta</button>
            </div>
        </div>
    );
}