"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isPageRoute } from "./links";

type NavLinksProps = {
  links: ReadonlyArray<{ label: string; href: string }>;
  className?: string;
};

const trimSlash = (path: string) => path.replace(/\/+$/, "") || "/";

// Marks the link for the current page with aria-current. Rendered at build
// time too, so the static HTML carries the right state without JavaScript.
export function NavLinks({ links, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map((link) => {
        const current =
          trimSlash(link.href) === trimSlash(pathname) ? "page" : undefined;
        return (
          <li key={link.href}>
            {isPageRoute(link.href) ? (
              <Link href={link.href} aria-current={current}>
                {link.label}
              </Link>
            ) : (
              <a href={link.href}>{link.label}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
