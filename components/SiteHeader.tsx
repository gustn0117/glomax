import Link from "next/link";

const nav = [
  { href: "/", label: "OVERVIEW", index: "01" },
  { href: "/perspective", label: "PERSPECTIVE", index: "02" },
  { href: "/cases", label: "CASES", index: "03" },
  { href: "/founder", label: "FOUNDER", index: "04" },
  { href: "/archive", label: "ARCHIVE", index: "05" }
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
        <Link href="/" className="flex items-baseline gap-3 leading-none">
          <span className="font-sans text-[1.05rem] font-bold tracking-tight text-lume">
            GLOMAX
          </span>
          <span className="mono text-[0.66rem] uppercase tracking-[0.24em] text-lume-faint">
            / 글로맥스
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-baseline gap-2 text-[0.78rem] text-lume hover:text-accent"
                >
                  <span className="mono text-[0.6rem] text-lume-faint tracking-[0.22em]">
                    {item.index}
                  </span>
                  <span className="mono tracking-[0.22em]">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:hello@glomax.kr"
          className="hidden md:inline-flex items-center gap-2 border border-line-dark px-4 py-2 text-[0.78rem] text-lume hover:border-accent hover:text-accent"
        >
          <span className="mono tracking-[0.18em]">INQUIRY</span>
          <span className="mono text-lume-faint">→</span>
        </a>

        <nav className="md:hidden">
          <ul className="flex items-center gap-3">
            {nav.slice(0, 3).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="mono text-[0.62rem] tracking-[0.18em] text-lume">
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
