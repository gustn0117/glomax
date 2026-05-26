import Link from "next/link";

const nav = [
  { href: "/", label: "표지", index: "00" },
  { href: "/perspective", label: "관점", index: "02" },
  { href: "/cases", label: "사례", index: "03" },
  { href: "/founder", label: "필자", index: "04" },
  { href: "/archive", label: "아카이브", index: "05" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-3 md:px-10">
        <Link href="/" className="flex items-baseline gap-3 leading-none">
          <span className="mono text-[0.78rem] uppercase tracking-[0.24em] text-ink">
            GLOMAX
          </span>
          <span className="mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-muted">
            / REPORT · 01
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-baseline gap-1.5 text-[0.9rem] text-ink"
                >
                  <span className="mono text-[0.66rem] text-ink-muted">{item.index}</span>
                  <span className="link-rule">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:hidden">
          <ul className="flex items-center gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.78rem] text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
