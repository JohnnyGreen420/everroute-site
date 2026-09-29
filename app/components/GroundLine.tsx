import styles from "./GroundLine.module.css";

type GroundLineProps = {
  // Draw the line once on load (homepage only; skipped for reduced motion).
  draw?: boolean;
  className?: string;
};

// The ground line: the visible surface above the underlying system. It starts
// at the content edge and runs off the right side of the viewport without
// using 100vw, so it can never cause horizontal scrolling.
export function GroundLine({ draw = false, className }: GroundLineProps) {
  return (
    <div
      className={[styles.ground, draw ? styles.draw : null, className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    />
  );
}
