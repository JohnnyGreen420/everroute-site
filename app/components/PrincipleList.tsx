import type { Principle } from "../content/principles";
import styles from "./PrincipleList.module.css";

type PrincipleListProps = {
  items: Principle[];
};

export function PrincipleList({ items }: PrincipleListProps) {
  return (
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.index} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
