import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalHint, isExternal, isPageRoute } from "./links";
import styles from "./ActionLink.module.css";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

// Button-styled link. External destinations get a trailing arrow; link text
// names the destination, so the arrow stays decorative.
export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: ActionLinkProps) {
  const classes = [styles.action, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span>{children}</span>
      {isExternal(href) ? <ExternalHint className={styles.arrow} /> : null}
    </>
  );

  if (isPageRoute(href)) {
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
