import styles from "./ItemNumero.module.css";

export default function ItemNumero(props) {
    return (
        <div className={styles.numero}>{props.numero}</div>
    );
}