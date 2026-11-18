import Link from "next/link";
import { products } from "../content/products";
import { primaryNav, site } from "../content/site";
import { ExternalHint } from "./links";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./Wordmark";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" tabIndex={-1} className={`on-night ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h2 className={styles.heading}>Contact</h2>
            <a className={styles.email} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <NavLinks links={primaryNav} />
            <ul>
              {products.flatMap((product) =>
                product.links.map((link, index) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      {index === 0 ? product.name : link.label}
                      <ExternalHint />
                    </a>
                  </li>
                )),
              )}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <Link className={styles.home} href="/" aria-label="EverRoute home">
            <Wordmark size="footer" />
          </Link>
          <p>{site.location}</p>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a className={styles.back} href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
