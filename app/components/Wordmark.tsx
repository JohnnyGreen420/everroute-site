import Image from "next/image";
import styles from "./Wordmark.module.css";

type WordmarkProps = {
  size?: "header" | "footer";
};

export function Wordmark({ size = "header" }: WordmarkProps) {
  return (
    <Image
      src={size === "header" ? "/hybrid-c.svg" : "/hybrid-c-reverse.svg"}
      alt=""
      width={609}
      height={180}
      loading={size === "header" ? "eager" : "lazy"}
      className={`${styles.wordmark} ${styles[size]}`}
    />
  );
}
