import styles from './block.module.css';

export default function Block(props){
    return(
        <div className={props.color === "white" ? styles.boxWhite : styles.boxBlack}></div>
    );
}