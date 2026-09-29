import { founder } from "../content/site";
import styles from "./FounderQuestion.module.css";

type FounderQuestionProps = {
  size?: "large" | "medium";
};

// The founder's question, set in the display serif with a hung opening mark.
export function FounderQuestion({ size = "large" }: FounderQuestionProps) {
  return (
    <figure className={`${styles.figure} ${styles[size]}`}>
      <blockquote>
        <p>{founder.question}</p>
      </blockquote>
      <figcaption>The question behind EverRoute</figcaption>
    </figure>
  );
}
