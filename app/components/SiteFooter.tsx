import Link from "next/link";
import { products } from "../content/products";
import { primaryNav, site } from "../content/site";
import { ExternalHint, isPageRoute } from "./links";
import { Wordmark } from "./Wordmark";
import styles from "./SiteFooter.module.css";

const companyLinks = [...primaryNav, { label: "Contact", href: "/#contact" }];

// Each product links to its own site by name, followed by its other links.
const productLinks = products.flatMap((product) =>
  product.links.map((link, i) => ({
    label: i === 0 ? product.name : link.label,
    href: link.href,
  })),
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={`on-night ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link className={styles.home} href="/" aria-label="EverRoute home">
              <Wordmark size="footer" />
            </Link>
            <p>Built to last. Designed to grow.</p>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            <div>
              <h2 className="label">Company</h2>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    {isPageRoute(link.href) ? (
                      <Link href={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label">Products</h2>
              <ul>
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      {link.label}
                      <ExternalHint />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contact}>
              <h2 className="label">Contact</h2>
              <ul>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
