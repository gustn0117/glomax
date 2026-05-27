import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper text-ink">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="font-sans text-[2.4rem] font-extrabold tracking-tight text-ink leading-none md:text-[3rem]">
              GLOMAX
            </div>
            <div className="mono mt-4 text-[0.7rem] uppercase tracking-[0.24em] text-ink-muted">
              한 병원의 5년을 함께 그립니다 · SINCE 2019
            </div>

            <a
              href="mailto:hello@glomax.kr"
              className="mono mt-10 inline-flex items-center gap-3 text-[1.05rem] tracking-tight text-ink hover:text-accent md:text-[1.3rem]"
            >
              hello@glomax.kr
              <span className="inline-block h-px w-8 bg-accent" />
            </a>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <div className="tag text-ink-faint">SITEMAP</div>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li><Link href="/" className="link-rule">OVERVIEW</Link></li>
              <li><Link href="/perspective" className="link-rule">PERSPECTIVE</Link></li>
              <li><Link href="/cases" className="link-rule">CASES</Link></li>
              <li><Link href="/founder" className="link-rule">FOUNDER</Link></li>
              <li><Link href="/archive" className="link-rule">ARCHIVE</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="tag text-ink-faint">CONTACT</div>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li><a href="mailto:hello@glomax.kr" className="link-rule">hello@glomax.kr</a></li>
              <li className="text-ink-muted">평일 10:00 – 18:00 KST</li>
              <li className="text-ink-muted">전화 상담 사전 예약</li>
              <li className="text-ink-muted">서울</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-baseline justify-between gap-3 border-t border-paper-line pt-6 md:flex-row md:items-center">
          <div className="mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
            © {new Date().getFullYear()} GLOMAX. ALL RIGHTS RESERVED.
          </div>
          <div className="mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
            HOSPITAL MARKETING STUDIO · SEOUL
          </div>
        </div>
      </div>
    </footer>
  );
}
