import type { Metadata } from "next";
import { ActionLink } from "./components/ActionLink";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This address does not match a page on everroute.ca.",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section
      className={`container ${styles.notFound}`}
      aria-labelledby="not-found-title"
    >
      <p className="label">Page not found</p>
      <h1 id="not-found-title" className={styles.title}>
        There is nothing at this address.
      </h1>
      <div className={styles.rule} aria-hidden="true" />
      <p className="lead">
        The link may be out of date, or the address may be mistyped.
      </p>
      <div className={styles.actions}>
        <ActionLink href="/">Go to the EverRoute homepage</ActionLink>
        <ActionLink href="/company/" variant="secondary">
          About EverRoute
        </ActionLink>
      </div>
    </section>
  );
}
