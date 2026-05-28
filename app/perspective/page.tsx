import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "우리가 보는 병원 마케팅",
  description:
    "광고로는 더 이상 답이 나오지 않는 시대, 글로맥스가 시장을 어떻게 해석하는지에 대한 네 편의 짧은 글."
};

const heroPhoto =
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=2400&q=85&auto=format&fit=crop";

const essays = [
  {
    no: "I",
    eyebrow: "광고의 한계",
    title: "광고는 환자의 결정 마지막에 닿지 못한다.",
    photo: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=82&auto=format&fit=crop",
    figLabel: "Plate I — The Last Centimeter",
    body: [
      "광고는 환자의 ‘인지’ 단계까지는 잘 작동합니다. 그러나 결정 단계, 즉 ‘이 병원을 선택하겠다’는 마지막 한 순간은 광고 바깥에서 일어납니다. 그 순간은 보통 후기 한 페이지, 블로그 본문 한 줄, 의사 인터뷰의 톤, 그리고 홈페이지의 마지막 화면 위에 있습니다.",
      "그래서 우리는 광고 예산을 줄이라고 말하지 않습니다. 다만 광고로는 닿지 못하는 그 마지막 1cm를 누가 만들 것인가, 라는 질문을 먼저 합니다. 그 1cm에 대한 답이 없는 광고는, 비싼 트래픽일 뿐입니다."
    ]
  },
  {
    no: "II",
    eyebrow: "환자 신뢰",
    title: "신뢰는 ‘만드는’ 것이 아니라 ‘발견되는’ 것이다.",
    photo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=82&auto=format&fit=crop",
    figLabel: "Plate II — Discovered, not Manufactured",
    body: [
      "병원의 신뢰는 새 자산이 아닙니다. 이미 그 병원이 매일의 진료에서 만들어내고 있는 자산입니다. 다만 그것이 환자의 검색 동선 위에 놓이지 못해서, 외부에서 보이지 않을 뿐입니다.",
      "우리는 새 이미지를 만들지 않습니다. 이미 그곳에 있는 신뢰의 단서—진료의 일관성, 보호자에게 건넨 한 마디, 회복 과정의 사진—를 발견해서, 환자가 만나게 될 자리에 정확히 배치합니다. 이 작업은 광고보다 느리지만, 광고보다 오래 갑니다."
    ]
  },
  {
    no: "III",
    eyebrow: "체류시간과 깊이",
    title: "5초가 아니라, 5분의 신뢰를 만든다.",
    photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=82&auto=format&fit=crop",
    figLabel: "Plate III — Depth over Hooks",
    body: [
      "‘3초 안에 클릭하게 만든다’는 카피의 시대는 지나가고 있습니다. AI 검색이 답을 직접 정리해주는 시대에 사용자는 더 적은 페이지를 ‘더 오래’ 봅니다. 환자는 한 페이지에서 5분을 머무는 데 거리낌이 없습니다. 다만 그 5분 동안 자신의 두려움이 정확히 다뤄지길 원합니다.",
      "그래서 콘텐츠는 짧을 필요가 없습니다. 다만 정확해야 하고, 사람의 언어여야 합니다. 우리는 ‘읽히는 글’과 ‘쌓이는 글’을 구분합니다. 후자는 일년 뒤에도 새 환자를 데려옵니다."
    ]
  },
  {
    no: "IV",
    eyebrow: "지역 침투 전략",
    title: "병원은 전국 광고가 아니라, 두 정거장의 정직으로 자란다.",
    photo: "https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&q=82&auto=format&fit=crop",
    figLabel: "Plate IV — Two Stops, Not a Nation",
    body: [
      "대부분의 병원에게 시장은 전국이 아닙니다. 지하철 두 정거장, 차로 15분 안입니다. 그 거리의 동네에서 어떤 단어가 통하는지, 어떤 후기가 회자되는지, 어떤 시간대에 결정이 일어나는지를 모르면, 어떤 캠페인도 헛돕니다.",
      "우리는 우선 그 거리를 걷습니다. 같은 상가의 다른 병원을 봅니다. 동네 카페의 손님이 누구인지, 학교 앞에서 어떤 대화가 오가는지를 듣습니다. 그 후에야 카피가 시작됩니다."
    ]
  }
];

export default function PerspectivePage() {
  return (
    <>
      <PageHero
        eyebrow="PERSPECTIVE — 02"
        side="Four readings / 四章"
        bgPhoto={heroPhoto}
        title={
          <>
            우리가 보는{" "}
            <span className="text-accent">병원 마케팅</span>.
          </>
        }
        lede={
          <>
            아래의 네 편은 글로맥스가 시장을 어떻게 읽고 있는지에 대한 짧은 메모입니다.
            답이 아니라, 우리의 질문입니다. 한 병원과 일을 시작할 때 우리는 늘 이 네
            가지를 먼저 꺼냅니다.
          </>
        }
        note="MARKET READING — 2026"
      />

      {essays.map((e, idx) => (
        <article
          key={e.no}
          className={`${idx % 2 === 1 ? "bg-paper-soft" : "bg-paper"} py-24 text-ink md:py-36`}
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <div className="mb-12 flex items-baseline justify-between border-b border-paper-line pb-5 md:mb-16">
              <div>
                <div className="tag text-accent">ESSAY · {e.no}</div>
                <div className="mt-2 mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                  {e.eyebrow}
                </div>
              </div>
              <div className="principle-no text-ink-faint">{e.no}</div>
            </div>

            <div className={`grid grid-cols-12 items-start gap-8 md:gap-12 ${idx % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}>
              <figure className="col-span-12 md:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.photo}
                    alt={`Essay ${e.no} — 시각 은유`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mono mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  {e.figLabel}
                </figcaption>
              </figure>

              <div className="col-span-12 md:col-span-7">
                <h2 className="font-sans font-bold text-h1 text-ink leading-[1.18] md:text-[2.2rem]">
                  {e.title}
                </h2>
                <div className="mt-7 space-y-5 max-w-prose md:mt-10">
                  {e.body.map((p, i) => (
                    <p key={i} className="font-serif text-[1.05rem] leading-[1.9] text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* END NOTE */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="border-t border-paper-line pt-12">
            <div className="tag text-ink-muted">END NOTE</div>
            <p className="pull-quote mt-6 max-w-[36ch] text-[1.7rem] text-ink md:text-[2.2rem]">
              “네 편의 질문이 한 병원의{" "}
              <span className="text-accent not-italic font-medium">5년</span>을 다시
              그리는 출발점이 됩니다.”
            </p>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/cases" className="link-rule font-sans font-semibold text-[1rem] text-ink">
                — 실제 사례로 보기
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
