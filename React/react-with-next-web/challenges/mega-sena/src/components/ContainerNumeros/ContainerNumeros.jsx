import styles from "./ContainerNumeros.module.css";

import ItemNumero from "@/components/ItemNumero/ItemNumero";

export default function ContainerNumeros(props){

    const gerarNumeros = () => {
        return props.numeros.map((item, i) => {
            return <ItemNumero key={i} numero={item}/>
        });
    }

    return(
        <div className={styles.container}>
            {gerarNumeros()}
        </div>
    );
}