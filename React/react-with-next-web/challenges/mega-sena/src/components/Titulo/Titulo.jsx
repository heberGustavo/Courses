import styles from "./Titulo.module.css";

export default function Titulo(props){
    return(
        <div>
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <p className={styles.subtitulo}>{props.subtitulo}</p>
        </div>
    );
}