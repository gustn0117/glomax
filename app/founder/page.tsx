import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "필자 소개",
  description:
    "왜 병원 마케팅인가. 어떤 시장 변화를 보는가. 어떤 병원과 일하고 싶은가. 글로맥스 두 사람의 글."
};

const heroPhoto =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2400&q=85&auto=format&fit=crop";

const sections = [
  {
    no: "I",
    title: "왜 병원 마케팅을 하는가.",
    body: [
      "저는 광고 회사에서 일을 시작했습니다. 정확히는 ‘잘 팔리는 한 줄’을 쓰는 사람으로 훈련을 받았습니다. 그 시기의 저에게 광고는, 환자의 결정을 빠르게 끌어당기는 도구였습니다. 그러나 어느 날 한 정형외과 원장님이 저에게 이런 말을 했습니다. ‘오늘 광고로 들어온 환자가 다음 달에 다른 병원을 갑니다. 저는 그분의 5년을 보고 싶은데, 광고는 한 달짜리 같습니다.’",
      "그 말이 오랫동안 남았습니다. 광고는 한 달을 살리지만, 한 병원은 5년 단위로 자랍니다. 저는 5년의 호흡에 맞는 회사가 한국에 부족하다고 느꼈습니다. 그래서 한 줄을 쓰는 일에서 한 발 물러나, 병원의 구조를 함께 보는 일을 시작했습니다. 그것이 글로맥스의 출발입니다.",
      "저는 이 회사가 크다고 말하지 않습니다. 우리는 한 해에 함께 일하는 병원의 수를 의도적으로 제한합니다. 한 병원의 5년을 보려면, 한 사람의 5년 안에 들어갈 수 있는 숫자에는 한계가 있기 때문입니다."
    ]
  },
  {
    no: "II",
    title: "어떤 시장 변화를 보는가.",
    body: [
      "AI 검색은 환자가 정보를 만나는 입자를 바꿔놓았습니다. 예전에는 한 키워드의 1등이 결정을 만들었지만, 지금은 AI가 정리해주는 ‘한 단락’이 결정을 만듭니다. 그 한 단락은, 병원의 한 페이지에서 인용되어 만들어집니다. 즉, 더 많은 페이지가 아니라 ‘인용되기 좋은 페이지’가 필요합니다.",
      "또 하나, 환자 후기의 무게중심이 ‘별점’에서 ‘서사’로 옮겨가고 있습니다. 별 5개의 줄세움보다, ‘어느 토요일에 어떤 보호자가 어떤 표정으로 나왔는가’라는 한 문단이 더 많은 결정을 만듭니다. 우리는 그 서사를 외부에서 만들지 않습니다. 진료실 안에서 이미 일어나고 있는 것을 발견해서, 외부에 옮깁니다."
    ]
  },
  {
    no: "III",
    title: "어떤 병원과 함께 일하고 싶은가.",
    body: [
      "큰 병원이라서, 작은 병원이라서, 라는 기준은 없습니다. 다만 한 가지를 봅니다. ‘5년의 그림이 있는 원장님’이냐는 것입니다. 다음 분기의 매출만 보는 분과는, 우리가 도울 수 있는 일이 별로 없습니다. 광고대행사는 다음 분기를 다루는 데 더 능합니다.",
      "반대로, ‘우리 병원이 동네에서 어떤 존재이고 싶은가’를 길게 그릴 수 있는 분과는, 대부분 좋은 결과로 함께 끝납니다. 우리는 한 해에 그런 병원을 다섯에서 일곱 곳까지만 맡습니다."
    ]
  }
];

const founders = [
  {
    src: "/founder-1.jpg",
    no: "01",
    name: "대표",
    role: "Founder · Strategy",
    line: "구조를 보고, 시장의 변화를 읽습니다.",
    cv: [
      "광고대행사 의료 부문 카피 · 전략",
      "병원 브랜딩 프로젝트 다수 진행",
      "AI 시대 환자 행동 사내 리서치 운영",
      "글로맥스 창립 · 대표"
    ]
  },
  {
    src: "/founder-2.jpg",
    no: "02",
    name: "공동대표",
    role: "Co-Founder · Brand",
    line: "톤을 짜고, 신뢰의 표면을 만듭니다.",
    cv: [
      "브랜드 컨설팅 · 콘텐츠 디렉팅",
      "병원 홈페이지 · 전환 페이지 리디자인",
      "브랜드 · 후기 톤 매뉴얼 운영",
      "글로맥스 공동대표"
    ]
  }
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="FOUNDERS — 04"
        side="The studio is two."
        bgPhoto={heroPhoto}
        title={
          <>
            나는 광고를 팔지 않는다.
            <br />
            <span className="text-accent">병원의 5년</span>을 함께 본다.
          </>
        }
        lede={
          <>
            아래는 글로맥스를 시작한 이유에 대한 글입니다. 약력은 끝에 짧게 두었습니다.
            약력이 회사를 설명한다고 믿지 않기 때문입니다.
          </>
        }
        note="A NOTE FROM THE FOUNDERS"
      />

      {/* Portrait pair */}
      <section className="bg-paper-warm grain-warm py-24 text-ink md:py-32">
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {founders.map((p) => (
              <figure key={p.name} className="flex flex-col items-start">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={`글로맥스 ${p.name}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="mt-6 flex w-full items-baseline justify-between border-b border-paper-line pb-4">
                  <div>
                    <div className="font-sans font-bold text-[1.4rem] text-ink leading-none md:text-[1.55rem]">
                      {p.name}
                    </div>
                    <div className="mono mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                      {p.role}
                    </div>
                  </div>
                  <div className="display text-[2rem] italic text-ink-muted md:text-[2.4rem]">
                    {p.no}
                  </div>
                </figcaption>
                <p className="mt-5 font-serif text-[1.05rem] leading-[1.8] text-ink">
                  {p.line}
                </p>
                <ul className="mt-5 w-full space-y-2 border-t border-paper-line pt-4 text-[0.92rem] leading-[1.7] text-ink-muted">
                  {p.cv.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mono text-ink-faint">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Long essay sections */}
      {sections.map((s, idx) => (
        <section
          key={s.no}
          className={`${idx % 2 === 1 ? "bg-paper-soft" : "bg-paper"} py-24 text-ink md:py-36`}
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <div className="grid grid-cols-12 gap-6 md:gap-12">
              <header className="col-span-12 md:col-span-3">
                <div className="display text-[3rem] italic text-accent leading-none md:text-[4rem]">
                  <em>{s.no}.</em>
                </div>
                <div className="tag mt-3 text-ink-muted">FOUNDER’S NOTE</div>
              </header>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-sans font-bold text-h1 text-ink leading-[1.18] md:text-[2.2rem]">
                  {s.title}
                </h2>
                <div className="mt-7 space-y-5 max-w-prose md:mt-10">
                  {s.body.map((p, i) => (
                    <p key={i} className="font-serif text-[1.05rem] leading-[1.9] text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* END NOTE */}
      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="border-t border-paper-line pt-12">
            <div className="tag text-ink-muted">END NOTE</div>
            <p className="pull-quote mt-6 max-w-[36ch] text-[1.7rem] text-ink md:text-[2.2rem]">
              “긴 글이 우리 회사의 가장 정직한{" "}
              <span className="text-accent not-italic font-medium">소개</span>입니다.”
            </p>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/archive" className="link-rule font-sans font-semibold text-[1rem] text-ink">
                — 아카이브로 가기
              </Link>
              <a
                href="mailto:hello@glomax.kr"
                className="text-[0.95rem] text-ink-muted hover:text-ink"
              >
                상담 문의 메일 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
