"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Command Center", href: "/" },
  { label: "Docket", href: "/docket" },
  { label: "Chambers", href: "/chambers" },
  { label: "Law Library", href: "/law-library" },
  { label: "Record Room", href: "/record-room" },
  { label: "Court Watch", href: "/court-watch" },
  { label: "Timeline", href: "/timeline" },
  { label: "Investigations", href: "/investigations" },
  { label: "Counsel", href: "/counsel" },
  { label: "Filing", href: "/filing" },
  { label: "Calendar", href: "/calendar" },
  { label: "Motions", href: "/motions" },
  { label: "Audit", href: "/audit" },
];

export default function AppShell({
  pageName,
  children,
}: {
  pageName?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <header className="al-nav">
        <Link href="/" className="al-brand">
          <span className="al-brand-mark">§</span>
          <span className="al-brand-text">
            ACQUIT <em>Alexandria Legal OS</em>
          </span>
        </Link>
        <nav className="al-nav-links">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "al-nav-link al-nav-link--active" : "al-nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        {pageName ? <span className="al-page-tag">{pageName.replace(/_/g, " ")}</span> : null}
      </header>
      <main className="al-main">{children}</main>
    </div>
  );
}
