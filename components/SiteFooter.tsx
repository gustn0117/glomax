import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="rule-top mt-20 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="font-serif text-[1.75rem] leading-none text-ink">글로맥스</div>
            <div className="text-meta uppercase text-ink-muted mt-3">
              GLOMAX · HOSPITAL MARKETING STUDIO
            </div>
            <p className="mt-5 max-w-prose text-[0.95rem] leading-7 text-ink-soft">
              우리는 광고를 집행하는 회사가 아니라, 병원의 성장을 함께 해석하는 파트너입니다.
              규모를 자랑하지 않고, 한 곳의 변화를 길게 봅니다.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <div className="text-meta uppercase text-ink-muted">읽을거리</div>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              <li><Link href="/" className="link-rule">브랜드 철학</Link></li>
              <li><Link href="/perspective" className="link-rule">우리가 보는 병원 마케팅</Link></li>
              <li><Link href="/cases" className="link-rule">사례 노트</Link></li>
              <li><Link href="/founder" className="link-rule">대표 소개</Link></li>
              <li><Link href="/archive" className="link-rule">아카이브</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="text-meta uppercase text-ink-muted">문의</div>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              <li><a href="mailto:hello@glomax.kr" className="link-rule">hello@glomax.kr</a></li>
              <li className="text-ink-muted">평일 10:00 – 18:00</li>
              <li className="text-ink-muted">전화 상담 사전 예약</li>
            </ul>
          </div>
        </div>

        <div className="rule-top mt-10 flex flex-col gap-1 pt-5 text-[0.78rem] text-ink-muted md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} GLOMAX. All rights reserved.</div>
          <div className="uppercase">병원전문 마케팅 스튜디오 · 서울</div>
        </div>
      </div>
    </footer>
  );
}
