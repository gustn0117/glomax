import Link from "next/link";

const nav = [
  { href: "/", label: "철학", index: "01" },
  { href: "/perspective", label: "관점", index: "02" },
  { href: "/cases", label: "사례", index: "03" },
  { href: "/founder", label: "대표", index: "04" },
  { href: "/archive", label: "아카이브", index: "05" }
];

export default function SiteHeader() {
  return (
    <header className="rule-bottom sticky top-0 z-40 bg-white/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link href="/" className="group flex items-baseline gap-3 leading-none">
          <span className="font-serif text-[1.5rem] font-medium tracking-tight text-ink">
            글로맥스
          </span>
          <span className="text-meta uppercase text-ink-muted">GLOMAX</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-baseline gap-1.5 text-[0.93rem] text-ink hover:text-ink-soft"
                >
                  <span className="fig-serif text-[0.7rem] text-ink-muted">{item.index}</span>
                  <span className="link-rule">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:hidden">
          <ul className="flex items-center gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.82rem] text-ink">
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
