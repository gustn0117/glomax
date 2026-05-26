import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-12 items-baseline gap-4">
          <div className="col-span-6 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink">
            © {new Date().getFullYear()} GLOMAX
          </div>
          <div className="col-span-6 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
            ALL RIGHTS RESERVED
          </div>
          <div className="col-span-12 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
            <Link href="mailto:hello@glomax.kr" className="link-rule">
              HELLO@GLOMAX.KR
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted md:text-right">
            REPORT 01 — END OF FILE
          </div>
        </div>
      </div>
    </footer>
  );
}
