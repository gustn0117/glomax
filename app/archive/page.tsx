import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "아카이브",
  description:
    "글로맥스가 두 개의 블로그에 길게 적어온 글의 입구. 짧게 읽고 끝나지 않는 글만 모아둡니다."
};

const heroPhoto =
  "https://images.unsplash.com/photo-1448630360428-65456885c650?w=2400&q=85&auto=format&fit=crop";

const channels = [
  {
    label: "JOURNAL · I",
    name: "글로맥스 노트",
    sub: "병원 마케팅 시장에 대한 긴 호흡의 글",
    href: "#",
    cadence: "월 1–2회",
    photo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=82&auto=format&fit=crop"
  },
  {
    label: "JOURNAL · II",
    name: "병원 성장 일지",
    sub: "현장에서 만난 사례와 인터뷰",
    href: "#",
    cadence: "월 1회",
    photo: "https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&q=82&auto=format&fit=crop"
  }
];

const drafts = [
  {
    eyebrow: "FIELD NOTE",
    title: "병원의 ‘조용한 신뢰’는 어디에 쌓이고 있는가.",
    date: "2026 · 05",
    minutes: "8 min"
  },
  {
    eyebrow: "ESSAY",
    title: "AI가 ‘답’을 정리해주는 시대, 병원 페이지는 어떻게 쓰여야 하는가.",
    date: "2026 · 04",
    minutes: "12 min"
  },
  {
    eyebrow: "INTERVIEW",
    title: "30년 거점 산부인과의 다음 10년 — 원장 인터뷰.",
    date: "2026 · 03",
    minutes: "16 min"
  },
  {
    eyebrow: "MEMO",
    title: "지하철 두 정거장의 동네에서 일어나는 결정.",
    date: "2026 · 02",
    minutes: "6 min"
  }
];

export default function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="ARCHIVE — 05"
        side="Long-form only."
        bgPhoto={heroPhoto}
        title={
          <>
            아카이브.
            <br />
            <span className="text-accent">짧게 끝나지 않는</span> 글만.
          </>
        }
        lede={
          <>
            글로맥스는 두 개의 블로그를 운영합니다. 하나는 시장에 대한 긴 메모, 다른
            하나는 현장의 일지입니다. 짧게 쓰고 끝나는 글은 올리지 않습니다.
          </>
        }
        note="TWO JOURNALS · ONE STUDIO"
      />

      {/* Two channels */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between border-b border-paper-line pb-5 md:mb-16">
            <div className="tag text-accent">CHANNELS — 05.1</div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>Two routes into the same archive.</em>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                className="group block"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-paper-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ch.photo}
                    alt={`${ch.name} — 시각 은유`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-precise group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-paper-line pb-4">
                  <div className="tag text-accent">{ch.label}</div>
                  <div className="mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                    {ch.cadence}
                  </div>
                </div>
                <div className="mt-4 font-sans font-bold text-[1.7rem] text-ink leading-tight link-rule inline-block">
                  {ch.name}
                </div>
                <div className="mt-2 text-[0.98rem] leading-7 text-ink-muted">{ch.sub}</div>
                <div className="mt-5 mono text-[0.75rem] uppercase tracking-[0.22em] text-ink group-hover:text-accent">
                  바로 가기 →
                </div>
              </a>
            ))}
          </div>

          <p className="mt-12 max-w-[60ch] text-[0.92rem] leading-7 text-ink-muted">
            * 블로그 URL이 확정되면, 위 두 카드의 링크가 각 블로그의 첫 페이지로 직접
            연결됩니다. 글로맥스 측에서 두 계정의 정확한 주소를 알려주시면 이 자리에
            연결합니다.
          </p>
        </div>
      </section>

      {/* Recent drafts */}
      <section className="bg-paper-soft py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between border-b border-paper-line pb-5 md:mb-16">
            <div>
              <div className="tag text-ink">RECENT NOTES — 05.2</div>
              <h2 className="mt-4 font-sans font-extrabold text-h1 text-ink max-w-[22ch] md:text-[2.4rem]">
                최근의 글들.
              </h2>
            </div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>Provisional index</em>
            </div>
          </div>

          <p className="max-w-[56ch] font-serif text-[1.05rem] leading-[1.85] text-ink-soft">
            두 블로그를 연동하기 전까지의 임시 목차입니다. 실제 발행 시 글 제목과 날짜가
            이 자리에 자동으로 채워질 수 있도록 RSS 또는 사이트맵을 연결할 예정입니다.
          </p>

          <ol className="mt-12 border-t border-ink md:mt-16">
            {drafts.map((d, i) => (
              <li
                key={i}
                className="group grid grid-cols-12 items-baseline gap-3 border-b border-paper-line py-8 transition-colors ease-precise hover:bg-paper md:gap-6 md:py-10"
              >
                <div className="col-span-2 md:col-span-1 display text-[1.4rem] italic text-ink-muted md:text-[1.6rem]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-8">
                  <div className="tag text-accent">{d.eyebrow}</div>
                  <div className="mt-3 font-sans font-bold text-[1.3rem] text-ink leading-snug md:text-[1.5rem]">
                    {d.title}
                  </div>
                </div>
                <div className="col-span-12 mono text-[0.75rem] uppercase tracking-[0.18em] text-ink-muted md:col-span-3 md:text-right">
                  {d.date} · {d.minutes}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* END NOTE */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="border-t border-paper-line pt-12">
            <div className="tag text-ink-muted">END NOTE</div>
            <p className="pull-quote mt-6 max-w-[40ch] text-[1.7rem] text-ink md:text-[2.2rem]">
              “글이 쌓일수록, 한 병원의{" "}
              <span className="text-accent not-italic font-medium">5년</span>이 더
              또렷이 보입니다.”
            </p>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/perspective" className="link-rule font-sans font-semibold text-[1rem] text-ink">
                — 우리의 관점 페이지
              </Link>
              <Link href="/founder" className="text-[0.95rem] text-ink-muted hover:text-ink">
                필자의 글 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
