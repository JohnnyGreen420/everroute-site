import Link from "next/link";
import { primaryNav } from "../content/site";
import { ActionLink } from "./ActionLink";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./Wordmark";
import styles from "./SiteHeader.module.css";

// Four destinations, always visible: one row on wider screens, two rows on
// phones. No menu toggle, so navigation works without JavaScript.
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link className={styles.home} href="/" aria-label="EverRoute home">
          <Wordmark />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <NavLinks links={primaryNav} className={styles.links} />
        </nav>
        <ActionLink className={styles.cta} href="/#contact" variant="secondary">
          Contact
        </ActionLink>
      </div>
    </header>
  );
}
