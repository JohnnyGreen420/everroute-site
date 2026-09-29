import type { Product } from "../content/products";
import { ActionLink } from "./ActionLink";
import styles from "./ProductIndex.module.css";

type ProductIndexProps = {
  products: Product[];
};

// EverRoute's product index. Each entry states what the product is, where it
// stands, and where it lives. New products are added as entries in
// app/content/products.ts; numbering appears only once there is more than one.
export function ProductIndex({ products }: ProductIndexProps) {
  const numbered = products.length > 1;

  return (
    <ol className={styles.index}>
      {products.map((product, i) => (
        <li key={product.id} id={product.id} className={styles.entry}>
          <div className={styles.identity}>
            <p className={styles.kicker}>
              {numbered ? `${String(i + 1).padStart(2, "0")} · ` : null}
              An EverRoute product
            </p>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.status}>
              <span className={styles.statusMark} aria-hidden="true" />
              <span className="visually-hidden">Status: </span>
              {product.status}
            </p>
          </div>

          <div className={styles.detail}>
            <p className={styles.summary}>{product.summary}</p>
            <p className={styles.description}>{product.description}</p>

            <div>
              <p className="label" id={`${product.id}-focus`}>
                Focus areas
              </p>
              <ul
                className={styles.focus}
                aria-labelledby={`${product.id}-focus`}
              >
                {product.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p className={styles.note}>{product.statusNote}</p>

            <div className={`actions ${styles.actions}`}>
              {product.links.map((link, j) => (
                <ActionLink
                  key={link.href}
                  href={link.href}
                  variant={j === 0 ? "primary" : "secondary"}
                >
                  {link.label}
                </ActionLink>
              ))}
            </div>
            {product.linkNote ? (
              <p className={styles.linkNote}>{product.linkNote}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
