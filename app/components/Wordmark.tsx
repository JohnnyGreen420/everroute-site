import styles from "./Wordmark.module.css";

type WordmarkProps = {
  size?: "header" | "footer";
};

// Interim typographic wordmark set in Libre Bodoni. Replace the text with the
// approved header logo (wordmark, ground line, simplified roots) once the
// vector artwork is final; do not draw roots here.
export function Wordmark({ size = "header" }: WordmarkProps) {
  return (
    <span className={`${styles.wordmark} ${styles[size]}`}>EverRoute</span>
  );
}
