import Link from "next/link";
import { site } from "../content/site";
import { Wordmark } from "./Wordmark";
import styles from "./SiteFooter.module.css";

const companyLinks = [
  { label: "Products", href: "/#products" },
  { label: "Approach", href: "/#approach" },
  { label: "Company", href: "/company/" },
  { label: "Contact", href: "/#contact" },
];

const productLinks = [
  { label: "Haven", href: "https://heyhaven.ca" },
  { label: "Haven waitlist", href: "https://tally.so/r/2EoJ9V" },
];

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
              <h2 className="label">EverRoute</h2>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
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
                      <span aria-hidden="true"> ↗</span>
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
          <p>© {year} EverRoute. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
