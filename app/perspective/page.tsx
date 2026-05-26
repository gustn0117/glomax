import Link from "next/link";

export const metadata = {
  title: "우리가 보는 병원 마케팅",
  description:
    "광고로는 더 이상 답이 나오지 않는 시대, 글로맥스가 시장을 어떻게 해석하는지에 대한 네 편의 짧은 글."
};

const essays = [
  {
    no: "I.",
    eyebrow: "왜 광고로는 안 되는가",
    title: "광고는 환자의 결정 마지막에 닿지 못한다.",
    body: [
      "광고는 환자의 ‘인지’ 단계까지는 잘 작동합니다. 그러나 결정 단계, 즉 ‘이 병원을 선택하겠다’는 마지막 한 순간은 광고 바깥에서 일어납니다. 그 순간은 보통 후기 한 페이지, 블로그 본문 한 줄, 의사 인터뷰의 톤, 그리고 홈페이지의 마지막 화면 위에 있습니다.",
      "그래서 우리는 광고 예산을 줄이라고 말하지 않습니다. 다만 광고로는 닿지 못하는 그 마지막 1cm를 누가 만들 것인가, 라는 질문을 먼저 합니다. 그 1cm에 대한 답이 없는 광고는, 비싼 트래픽일 뿐입니다."
    ]
  },
  {
    no: "II.",
    eyebrow: "환자 신뢰",
    title: "신뢰는 ‘만드는’ 것이 아니라 ‘발견되는’ 것이다.",
    body: [
      "병원의 신뢰는 새 자산이 아닙니다. 이미 그 병원이 매일의 진료에서 만들어내고 있는 자산입니다. 다만 그것이 환자의 검색 동선 위에 놓이지 못해서, 외부에서 보이지 않을 뿐입니다.",
      "우리는 새 이미지를 만들지 않습니다. 이미 그곳에 있는 신뢰의 단서—진료의 일관성, 보호자에게 건넨 한 마디, 회복 과정의 사진—를 발견해서, 환자가 만나게 될 자리에 정확히 배치합니다. 이 작업은 광고보다 느리지만, 광고보다 오래 갑니다."
    ]
  },
  {
    no: "III.",
    eyebrow: "체류시간과 콘텐츠 깊이",
    title: "5초가 아니라, 5분의 신뢰를 만든다.",
    body: [
      "‘3초 안에 클릭하게 만든다’는 카피의 시대는 지나가고 있습니다. AI 검색이 답을 직접 정리해주는 시대에 사용자는 더 적은 페이지를 ‘더 오래’ 봅니다. 환자는 한 페이지에서 5분을 머무는 데 거리낌이 없습니다. 다만 그 5분 동안 자신의 두려움이 정확히 다뤄지길 원합니다.",
      "그래서 콘텐츠는 짧을 필요가 없습니다. 다만 정확해야 하고, 사람의 언어여야 합니다. 우리는 ‘읽히는 글’과 ‘쌓이는 글’을 구분합니다. 후자는 일년 뒤에도 새 환자를 데려옵니다."
    ]
  },
  {
    no: "IV.",
    eyebrow: "지역 침투 전략",
    title: "병원은 전국 광고가 아니라, 두 정거장의 정직으로 자란다.",
    body: [
      "대부분의 병원에게 시장은 전국이 아닙니다. 지하철 두 정거장, 차로 15분 안입니다. 그 거리의 동네에서 어떤 단어가 통하는지, 어떤 후기가 회자되는지, 어떤 시간대에 결정이 일어나는지를 모르면, 어떤 캠페인도 헛돕니다.",
      "우리는 우선 그 거리를 걷습니다. 같은 상가의 다른 병원을 봅니다. 동네 카페의 손님이 누구인지, 학교 앞에서 어떤 대화가 오가는지를 듣습니다. 그 후에야 카피가 시작됩니다."
    ]
  }
];

export default function PerspectivePage() {
  return (
    <>
      {/* PAGE MAST */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 pb-10 pt-12 md:px-10 md:pb-16 md:pt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">SECTION 02</div>
            <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-2">
              MARKET READING
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-serif text-display-1 text-ink">
              우리가 보는 <br className="hidden md:block" />
              병원 마케팅.
            </h1>
            <p className="reader mt-7 max-w-prose text-lede text-ink-soft">
              아래의 네 편은 글로맥스가 시장을 어떻게 읽고 있는지에 대한 짧은 메모입니다. 답이
              아니라, 우리의 질문입니다. 한 병원과 일을 시작할 때 우리는 늘 이 네 가지를 먼저
              꺼냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* ESSAYS */}
      <article>
        {essays.map((essay, idx) => (
          <section
            key={essay.no}
            className={idx % 2 === 1 ? "bg-paper-deep rule-bottom" : "rule-bottom"}
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-14 md:px-10 md:py-24">
              <header className="col-span-12 md:col-span-3">
                <div className="sticky top-24">
                  <div className="fig-serif text-[3rem] leading-none text-red-mark">
                    {essay.no}
                  </div>
                  <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-3">
                    {essay.eyebrow}
                  </div>
                  <div className="mt-6 hidden md:block">
                    <div className="dotline" />
                  </div>
                </div>
              </header>

              <div className="col-span-12 md:col-span-8 md:col-start-5">
                <h2 className="font-serif text-display-2 text-ink">{essay.title}</h2>
                <div className="reader mt-7 max-w-prose text-body text-ink">
                  {essay.body.map((p, i) => (
                    <p key={i} className={i === 0 ? "dropcap" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </article>

      {/* CTA */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">END NOTE</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.6rem] leading-snug text-ink md:text-[2rem]">
              네 편의 질문이 한 병원의 5년을 다시 그리는 출발점이 됩니다.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/cases" className="link-rule font-serif text-[1.05rem] text-ink">
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
