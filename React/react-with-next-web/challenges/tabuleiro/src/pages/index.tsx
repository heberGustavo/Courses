import styles from "../styles/index.module.css";
import Tabuleiro from "@/components/Tabuleiro/Tabuleiro";

export default function Home() {
  return (
    <main className={styles.tabuleiro}>
      <Tabuleiro x={8} y={8} />
    </main>
  );
}
