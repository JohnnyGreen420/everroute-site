import type { CSSProperties, ReactNode } from "react";
import styles from "./Register.module.css";

type RegisterItem = {
  term: string;
  detail: ReactNode;
};

type RegisterProps = {
  items: RegisterItem[];
  columns?: number;
};

// A short register of plain, checkable facts, set below a ground line.
export function Register({ items, columns = items.length }: RegisterProps) {
  return (
    <dl
      className={styles.register}
      data-columns={columns}
      style={
        {
          "--register-columns": columns,
          "--register-rest": columns - 1,
        } as CSSProperties
      }
    >
      {items.map((item) => (
        <div key={item.term} className={styles.item}>
          <dt className="label">{item.term}</dt>
          <dd>{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
