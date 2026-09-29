import type { Metadata } from "next";
import { ActionLink } from "./components/ActionLink";
import { GroundLine } from "./components/GroundLine";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This address does not match a page on everroute.ca.",
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <section className={styles.notFound} aria-labelledby="not-found-title">
      <div className="container">
        <p className="label">Page not found</p>
        <h1 id="not-found-title" className={`headline ${styles.title}`}>
          There is nothing at this address.
        </h1>
      </div>
      <GroundLine className={styles.ground} />
      <div className={`container ${styles.body}`}>
        <p className="lead">
          The link may be out of date, or the address may be mistyped.
        </p>
        <div className="actions">
          <ActionLink href="/">Go to the EverRoute homepage</ActionLink>
          <ActionLink href="/company/" variant="secondary">
            About EverRoute
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
