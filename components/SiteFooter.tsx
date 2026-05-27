import Link from "next/link";

const masthead = [
  { role: "STUDIO", name: "GLOMAX" },
  { role: "FOUNDED", name: "2019, SEOUL" },
  { role: "FIELD", name: "병원 마케팅 · 브랜딩" },
  { role: "FORMAT", name: "소수 프로젝트제" }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper text-ink">
      <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-12 md:px-10 md:pt-32 md:pb-16">
        {/* Big wordmark + lede */}
        <div className="grid grid-cols-12 gap-8 border-b border-paper-line pb-16 md:pb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="font-sans text-[3.2rem] font-extrabold tracking-tight text-ink leading-[0.92] md:text-[5rem]">
              GLOMAX
            </div>
            <p className="mt-8 max-w-[44ch] font-serif text-[1.05rem] leading-[1.8] text-ink-soft md:text-[1.18rem]">
              한 병원의 5년을 함께 그립니다. 광고가 아니라 시간을 다룬다고 믿는,
              병원 전문 마케팅 스튜디오.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:flex-col md:items-end md:justify-end">
            <a
              href="mailto:hello@glomax.kr"
              className="display text-[1.6rem] italic text-ink hover:text-accent md:text-[2.2rem]"
            >
              hello@glomax.kr
            </a>
            <div className="mono mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
              FOR PROJECT INQUIRY
            </div>
          </div>
        </div>

        {/* Masthead */}
        <dl className="grid grid-cols-2 gap-y-8 border-b border-paper-line py-10 md:grid-cols-4 md:py-12">
          {masthead.map((m) => (
            <div key={m.role}>
              <dt className="mono text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                {m.role}
              </dt>
              <dd className="mt-2 text-[0.98rem] text-ink">{m.name}</dd>
            </div>
          ))}
        </dl>

        {/* Sitemap + meta */}
        <div className="mt-10 grid grid-cols-12 items-baseline gap-8">
          <ul className="col-span-12 flex flex-wrap items-center gap-x-7 gap-y-3 md:col-span-8">
            {[
              ["/", "OVERVIEW"],
              ["/perspective", "PERSPECTIVE"],
              ["/cases", "CASES"],
              ["/founder", "FOUNDER"],
              ["/archive", "ARCHIVE"]
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="mono text-[0.78rem] uppercase tracking-[0.22em] text-ink hover:text-accent link-rule"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="col-span-12 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted md:col-span-4 md:text-right">
            © {new Date().getFullYear()} GLOMAX — ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
