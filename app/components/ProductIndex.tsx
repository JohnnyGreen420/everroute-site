import Image from "next/image";
import type { Product } from "../content/products";
import { ExternalHint } from "./links";
import styles from "./ProductIndex.module.css";

// Successive paper edges grow outward from the area carrying the product mark.
const reliefLayers = [
  { scale: 3.15, angle: -16, fill: "#ccd0b9" },
  { scale: 2.64, angle: -13, fill: "#d2d4bd" },
  { scale: 2.18, angle: -9, fill: "#dbdbc3" },
  { scale: 1.8, angle: -5, fill: "#e3e1ca" },
  { scale: 1.48, angle: -2, fill: "#eae6d1" },
  { scale: 1.21, angle: 0, fill: "#f1ecd9" },
  { scale: 1, angle: 2, fill: "#f6f1df" },
];

function PaperRelief({ id }: { id: string }) {
  const contour = `${id}-contour`;
  const edge = `${id}-edge`;

  return (
    <svg
      className={styles.relief}
      viewBox="-300 -214 600 428"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id={contour}
          d="M-117 25C-129-16-103-57-58-84C-17-109 20-112 55-91C92-69 126-40 128-6C130 28 102 51 65 76C29 101-12 115-48 102C-86 89-106 64-117 25Z"
        />
        <linearGradient id={edge} x2=".65" y2="1" x1=".35" y1="0">
          <stop stopColor="#fffdf3" />
          <stop offset=".5" stopColor="#ecebd7" />
          <stop offset="1" stopColor="#c4c2a9" />
        </linearGradient>
      </defs>
      {reliefLayers.map(({ scale, angle, fill }) => (
        <g key={scale} transform={`rotate(${angle}) scale(${scale})`}>
          <use href={`#${contour}`} y="2.3" fill="#74745e" opacity=".24" />
          <use
            href={`#${contour}`}
            fill={fill}
            stroke={`url(#${edge})`}
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
    </svg>
  );
}

export function ProductIndex({ products }: { products: Product[] }) {
  return (
    <div className={styles.index}>
      {products.map((product) => (
        <article
          key={product.id}
          id={product.id}
          aria-labelledby={`${product.id}-name`}
          className={styles.entry}
        >
          <div className={styles.cover} aria-hidden="true">
            <PaperRelief id={product.id} />
            {product.logo && (
              <Image
                className={styles.logo}
                src={product.logo.src}
                alt=""
                width={product.logo.width}
                height={product.logo.height}
              />
            )}
          </div>

          <div className={styles.caption}>
            <p className={styles.status}>{product.status}</p>
            <h3 className={styles.name} id={`${product.id}-name`}>
              {product.name}
            </h3>
            <p className={styles.summary}>{product.summary}</p>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.links}>
              {product.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label} <ExternalHint className={styles.arrow} />
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
