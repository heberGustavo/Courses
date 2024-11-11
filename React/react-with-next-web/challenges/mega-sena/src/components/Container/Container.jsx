import styles from './Container.module.css'

import { useEffect, useState } from 'react';
import { mega } from "../../../functions/mega";

import Titulo from "@/components/Titulo/Titulo";
import ContainerNumeros from "@/components/ContainerNumeros/ContainerNumeros";

export default function Container(){

    const [quant, setQuant] = useState(6);
    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros(mega())
    }, [])

    return(
        <div className={styles.container}>
            <Titulo titulo="MEGA SENA" subtitulo="Gere aqui seus números da Sorte!" />
            <ContainerNumeros numeros={numeros} />

            <br />
            <input 
                type="number"
                min={6}
                max={20}
                className={styles.input}
                value={quant}
                onChange={ev => setQuant(ev.target.value)}
            />
            <button 
                className={styles.button}
                onClick={() => setNumeros(mega(quant))}
            >Gerar</button>
        </div>
    );
}