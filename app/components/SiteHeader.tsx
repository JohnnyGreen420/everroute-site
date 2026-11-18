import Link from "next/link";
import { primaryNav } from "../content/site";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./Wordmark";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link className={styles.home} href="/" aria-label="EverRoute home">
          <Wordmark />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <NavLinks links={primaryNav} className={styles.links} />
          <a className={styles.contact} href="#contact">
            Contact <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
