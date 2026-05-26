import Link from "next/link";

export const metadata = {
  title: "아카이브",
  description:
    "글로맥스가 두 개의 블로그에 길게 적어온 글의 입구. 짧게 읽고 끝나지 않는 글만 모아둡니다."
};

const channels = [
  {
    label: "BLOG · I",
    name: "글로맥스 노트",
    sub: "병원 마케팅 시장에 대한 긴 호흡의 글",
    href: "#",
    note: "운영 중인 첫 번째 블로그 — 링크 자리. 발행 시 이곳으로 연결됩니다."
  },
  {
    label: "BLOG · II",
    name: "병원 성장 일지",
    sub: "현장에서 만난 사례와 인터뷰",
    href: "#",
    note: "두 번째 블로그 — 링크 자리. 발행 시 이곳으로 연결됩니다."
  }
];

const drafts = [
  {
    no: "—",
    eyebrow: "FIELD NOTE",
    title: "병원의 ‘조용한 신뢰’는 어디에 쌓이고 있는가.",
    date: "2026.05"
  },
  {
    no: "—",
    eyebrow: "ESSAY",
    title: "AI가 ‘답’을 정리해주는 시대, 병원 페이지는 어떻게 쓰여야 하는가.",
    date: "2026.04"
  },
  {
    no: "—",
    eyebrow: "INTERVIEW",
    title: "30년 거점 산부인과의 다음 10년 — 원장 인터뷰.",
    date: "2026.03"
  },
  {
    no: "—",
    eyebrow: "MEMO",
    title: "지하철 두 정거장의 동네에서 일어나는 결정.",
    date: "2026.02"
  }
];

export default function ArchivePage() {
  return (
    <>
      {/* PAGE MAST */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 pb-10 pt-12 md:px-10 md:pb-16 md:pt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">SECTION 05</div>
            <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-2">ARCHIVE</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-serif text-display-1 text-ink">
              아카이브. <br className="hidden md:block" />
              <span className="text-ink-soft">짧게 끝나지 않는 글만.</span>
            </h1>
            <p className="reader mt-7 max-w-prose text-lede text-ink-soft">
              글로맥스는 두 개의 블로그를 운영합니다. 하나는 시장에 대한 긴 메모, 다른 하나는
              현장의 일지입니다. 짧게 쓰고 끝나는 글은 올리지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="rule-bottom">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="fig-serif text-[3rem] leading-none text-ink-muted">두 채널</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10">
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    className="group block border-t border-ink pt-5"
                  >
                    <div className="text-meta uppercase tracking-wider2 text-red-mark">
                      {ch.label}
                    </div>
                    <div className="font-serif text-[1.8rem] leading-snug text-ink mt-2 link-rule inline-block">
                      {ch.name}
                    </div>
                    <div className="mt-2 text-[0.98rem] leading-7 text-ink-soft">{ch.sub}</div>
                    <div className="mt-4 text-[0.82rem] text-ink-muted">{ch.note}</div>
                    <div className="mt-5 text-[0.85rem] uppercase tracking-wider2 text-ink">
                      바로 가기 →
                    </div>
                  </a>
                ))}
              </div>

              <p className="mt-10 max-w-prose text-[0.92rem] leading-7 text-ink-soft">
                * 블로그 URL이 확정되면, 위 두 카드의 링크가 각 블로그의 첫 페이지로 직접
                연결됩니다. 글로맥스 측에서 두 계정의 정확한 주소를 알려주시면 이 자리에
                꽂아드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT — 최근 글 목차 (placeholder) */}
      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="text-meta uppercase tracking-wider2 text-ink-muted">최근 글</div>
              <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-2">
                RECENT NOTES
              </div>
              <p className="mt-5 max-w-[18rem] text-[0.9rem] leading-7 text-ink-soft">
                두 블로그를 연동하기 전까지의 임시 목차입니다. 실제 발행 시 글 제목과 날짜가 이
                자리에 자동으로 채워질 수 있도록 RSS 또는 사이트맵을 연결할 예정입니다.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-9 divide-y divide-paper-rule border-t border-paper-rule">
              {drafts.map((d, i) => (
                <li key={i} className="grid grid-cols-12 gap-3 py-6 md:gap-6">
                  <div className="col-span-2 md:col-span-1 fig-serif text-[1.3rem] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10 md:col-span-8">
                    <div className="text-meta uppercase tracking-wider2 text-red-mark">
                      {d.eyebrow}
                    </div>
                    <div className="mt-2 font-serif text-[1.35rem] leading-snug text-ink md:text-[1.5rem]">
                      {d.title}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 self-center text-right text-[0.85rem] uppercase tracking-wider2 text-ink-muted">
                    {d.date}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rule-top">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-14 md:px-10 md:py-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">END NOTE</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.6rem] leading-snug text-ink md:text-[2rem]">
              글이 쌓일수록, 한 병원의 5년이 더 또렷이 보입니다. 우리는 그 호흡으로 일합니다.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/perspective" className="link-rule font-serif text-[1.05rem] text-ink">
                — 우리의 관점 페이지
              </Link>
              <Link href="/founder" className="text-[0.95rem] text-ink-muted hover:text-ink">
                대표의 글 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
