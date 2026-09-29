import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ActionLink.module.css";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "dark";
  className?: string;
};

const isExternal = (href: string) => /^https?:/.test(href);

// Button-styled link. External destinations get a trailing arrow; link text
// names the destination, so the arrow stays decorative.
export function ActionLink({
  href,
  children,
  variant = "primary",
  tone = "light",
  className,
}: ActionLinkProps) {
  const classes = [styles.action, styles[variant], styles[tone], className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span>{children}</span>
      {isExternal(href) ? (
        <>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
          <span className="visually-hidden"> (external site)</span>
        </>
      ) : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {content}
    </a>
  );
}
