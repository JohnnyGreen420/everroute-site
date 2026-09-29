// Client-side navigation is used only for page routes. Fragment links,
// including "/#section", stay native anchors so the browser moves the
// keyboard focus starting point to the target section.
export const isPageRoute = (href: string) =>
  href.startsWith("/") && !href.includes("#");

export const isExternal = (href: string) => /^https?:/.test(href);

// Visible arrow plus screen-reader text for links that leave everroute.ca.
export function ExternalHint({ className }: { className?: string }) {
  return (
    <>
      <span className={className} aria-hidden="true">
        ↗
      </span>
      <span className="visually-hidden"> (external site)</span>
    </>
  );
}
