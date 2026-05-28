import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "사례 노트",
  description:
    "숫자 자랑이 아니라 맥락의 기록. 글로맥스가 함께한 병원들의 문제 — 전략 — 변화를 길게 적습니다."
};

const heroPhoto =
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=2400&q=85&auto=format&fit=crop";

const cases = [
  {
    no: "01",
    field: "수도권 · 정형외과",
    duration: "12개월 동행",
    title: "‘잘 본다’는 평판은 있는데,\n신환이 늘지 않던 5년차 정형외과.",
    photo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=82&auto=format&fit=crop",
    figLabel: "Plate I — Reputation as Architecture",
    problem:
      "지역에서 ‘선생님 솜씨가 좋다’는 평이 분명히 있었지만, 그 평이 검색 결과 위에 옮겨가지 못했다. 광고는 클릭률만 높고 상담으로 이어지지 않았다. 원장님은 매달 광고비가 늘어나는 것에 피로감을 느끼고 있었다.",
    move:
      "광고비를 30% 줄이고, 그 예산을 ‘이미 있는 신뢰’를 외부로 옮기는 일에 썼다. 회복 사례 인터뷰 12편, 의사의 진료 철학 페이지, 보호자 후기 정돈—이 셋이 한 톤으로 묶이도록 홈페이지 본문을 다시 썼다. 광고 카피는 ‘잘 봐드린다’가 아니라 ‘오래 봐드린다’로 바꿨다.",
    shift:
      "신환 비중이 6개월에 걸쳐 1.4배, 1년 뒤 1.9배. 더 의미 있는 변화는 ‘추천으로 왔다’는 환자의 비율이 두 배가 되었다는 것. 광고가 아니라 신뢰가 자라기 시작했다는 신호.",
    metrics: [
      { v: "1.9×", k: "신환 비중 (12개월)" },
      { v: "2×",   k: "추천 유입 비중" },
      { v: "−30%", k: "광고 예산" }
    ]
  },
  {
    no: "02",
    field: "지방 거점 · 산부인과",
    duration: "9개월 동행",
    title: "‘지역 1등’이라고 부르기엔\n너무 조용했던 거점 산부인과.",
    photo: "https://images.unsplash.com/photo-1481253127861-534498168948?w=1800&q=82&auto=format&fit=crop",
    figLabel: "Plate II — Slow-built Trust",
    problem:
      "지역에서 30년 가까이 운영된 산부인과. 어머니 세대에게는 이미 신뢰가 있지만, 20~30대 젊은 부부에게는 ‘오래된 곳’이라는 인상이 먼저 떠올랐다. 후기는 적지 않은데 정돈되어 있지 않았다.",
    move:
      "‘새로 보이게’ 하지 않았다. 대신 ‘오래된 만큼의 시간을 길게 보여주는’ 방향으로 리브랜딩. 30년의 분만 기록, 의사들의 세대 교차, 동네 어머니 세대의 이야기를 모아 한 권의 매거진 형식 홈페이지로 다시 짰다.",
    shift:
      "젊은 부부의 초진 비중이 9개월 안에 2.3배. ‘오래된’이 아니라 ‘오래 봐온’으로 단어가 바뀌었다. 광고를 새로 하지 않았는데도, 검색 유입이 늘었다.",
    metrics: [
      { v: "2.3×", k: "젊은 부부 초진" },
      { v: "+44%", k: "오가닉 유입" },
      { v: "0",    k: "신규 광고 예산" }
    ]
  },
  {
    no: "03",
    field: "서울 · 피부과",
    duration: "6개월 동행",
    title: "‘가격을 내릴까’를 고민하던\n강남 한복판의 피부과.",
    photo: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1800&q=82&auto=format&fit=crop",
    figLabel: "Plate III — Time as Differentiation",
    problem:
      "동일 상권에 50개가 넘는 경쟁 피부과. 가격 비교 사이트의 상위 노출이 신환의 첫 화면을 차지하고 있었다. 원장은 ‘우리도 가격으로 갈 수밖에 없는가’를 두고 흔들리고 있었다.",
    move:
      "가격이 아니라 ‘진료 시간의 길이’를 차별점으로 선언. 첫 상담을 평균 22분으로 제도화하고, 그 22분 동안 무엇이 일어나는지를 글과 사진으로 정직하게 공개. 광고 카피의 무게중심을 ‘싸다’에서 ‘오래 봐드린다’로 옮겼다.",
    shift:
      "재방문률이 3개월 만에 19%p 상승. 객단가가 오히려 올랐다. ‘가격’이 아니라 ‘시간’으로 이 병원을 떠올리는 환자가 늘었다.",
    metrics: [
      { v: "+19%p", k: "재방문률 (3개월)" },
      { v: "+12%",  k: "객단가" },
      { v: "22분",  k: "평균 상담 시간" }
    ]
  }
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="CASES — 03"
        side="Three notes / 三件"
        bgPhoto={heroPhoto}
        title={
          <>
            사례 노트.
            <br />
            숫자가 아니라{" "}
            <span className="text-accent">맥락</span>.
          </>
        }
        lede={
          <>
            매출 그래프 하나로 보여지는 사례에는 흥미가 없습니다. 우리는 어떤 질문이
            있었고, 왜 그렇게 답했으며, 그 뒤로 무엇이 달라졌는지를 길게 적습니다.
          </>
        }
        note="병원의 동의 하에 일부 식별 정보를 제외하고 공개합니다."
      />

      {cases.map((c, idx) => (
        <article
          key={c.no}
          className={`${idx % 2 === 1 ? "bg-paper-soft" : "bg-paper"} py-24 text-ink md:py-36`}
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            {/* Case header bar */}
            <div className="mb-12 flex items-baseline justify-between border-b border-paper-line pb-5 md:mb-20">
              <div>
                <div className="tag text-accent">CASE {c.no}</div>
                <div className="mt-2 text-[0.95rem] text-ink-muted">
                  {c.field} · {c.duration}
                </div>
              </div>
              <div className="principle-no text-ink-faint md:text-ink-muted">{c.no}</div>
            </div>

            {/* Title + photo */}
            <div className="grid grid-cols-12 gap-8 md:gap-12">
              <h2 className="col-span-12 font-sans font-bold text-h1 text-ink leading-[1.18] whitespace-pre-line md:col-span-7 md:text-[2.4rem]">
                {c.title}
              </h2>
              <figure className="col-span-12 md:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.photo}
                    alt={`Case ${c.no} — 시각 은유`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mono mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  {c.figLabel}
                </figcaption>
              </figure>
            </div>

            {/* Metrics strip */}
            <dl className="mt-16 grid grid-cols-3 gap-x-4 gap-y-6 border-y border-ink py-6 md:mt-20 md:py-8">
              {c.metrics.map((m) => (
                <div key={m.k} className="flex flex-col items-start gap-1.5">
                  <div className="display text-[1.8rem] font-medium text-ink md:text-[2.4rem]">
                    {m.v}
                  </div>
                  <div className="mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                    {m.k}
                  </div>
                </div>
              ))}
            </dl>

            {/* Body — 문제 / 전략 / 변화 */}
            <div className="mt-16 grid grid-cols-12 gap-8 md:mt-24 md:gap-12">
              {[
                { k: "문제", en: "Problem",  v: c.problem },
                { k: "전략", en: "Strategy", v: c.move },
                { k: "변화", en: "Shift",    v: c.shift }
              ].map((block, i) => (
                <div
                  key={block.k}
                  className={`col-span-12 grid grid-cols-12 gap-4 md:gap-8 ${
                    i > 0 ? "border-t border-paper-line pt-12 md:pt-14" : ""
                  }`}
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="display text-[1.6rem] italic text-accent md:text-[1.9rem]">
                      <em>0{i + 1}.</em>
                    </div>
                    <div className="mt-3 font-sans font-bold text-[1.2rem] text-ink">
                      {block.k}
                    </div>
                    <div className="mono mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                      {block.en}
                    </div>
                  </div>
                  <p className="col-span-12 max-w-prose font-serif text-[1.04rem] leading-[1.9] text-ink md:col-span-9">
                    {block.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}

      {/* END NOTE */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="border-t border-paper-line pt-12">
            <div className="tag text-ink-muted">END NOTE</div>
            <p className="pull-quote mt-6 max-w-[34ch] text-[1.7rem] text-ink md:text-[2.2rem]">
              “사례는 자랑이 아니라{" "}
              <span className="text-accent not-italic font-medium">기록</span>입니다.
              자랑을 위한 기록은 다음 결정에 도움이 되지 않습니다.”
            </p>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link
                href="/perspective"
                className="link-rule font-sans font-semibold text-[1rem] text-ink"
              >
                — 우리의 관점 다시 보기
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
