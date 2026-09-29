import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  intro?: ReactNode;
  // Statements are set in the display serif. Keep them rare: one per zone.
  statement?: boolean;
};

// Numbered section opener: a rule carrying the index and label, then the
// section title. Structural titles use Inter; brand statements use the serif.
export function SectionHeading({
  id,
  index,
  label,
  children,
  intro,
  statement = false,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <p className={`label ${styles.marker}`}>
        <span className={styles.index}>{index}</span>
        <span>{label}</span>
      </p>
      <div className={styles.body}>
        <h2
          id={id}
          className={statement ? `display ${styles.statement}` : styles.title}
        >
          {children}
        </h2>
        {intro ? <div className={styles.intro}>{intro}</div> : null}
      </div>
    </div>
  );
}
