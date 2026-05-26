import Link from "next/link";

export const metadata = {
  title: "대표 소개",
  description:
    "왜 병원 마케팅인가. 어떤 시장 변화를 보는가. 어떤 병원과 일하고 싶은가. 글로맥스 대표의 글."
};

export default function FounderPage() {
  return (
    <>
      {/* PORTRAIT + INTRO */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 pb-10 pt-12 md:px-10 md:pb-16 md:pt-20">
          <div className="col-span-12 md:col-span-5">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder.jpg"
                alt="글로맥스 대표 인물 사진"
                className="aspect-[3/4] w-full max-w-[420px] object-cover grayscale-[0.15]"
              />
              <div className="mt-3 text-meta uppercase tracking-wider2 text-ink-muted">
                FOUNDER · GLOMAX
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">SECTION 04</div>
            <h1 className="mt-4 font-serif text-display-1 text-ink">
              나는 광고를 팔지 않는다. <br className="hidden md:block" />
              병원의 5년을 함께 본다.
            </h1>
            <p className="reader mt-7 max-w-prose text-lede text-ink-soft">
              아래는 글로맥스를 시작한 이유에 대한 글입니다. 약력은 끝에 짧게 두었습니다. 약력이
              회사를 설명한다고 믿지 않기 때문입니다.
            </p>
          </div>
        </div>
      </section>

      {/* BODY ESSAY */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-14 md:px-10 md:py-24">
          <aside className="col-span-12 md:col-span-3">
            <div className="sticky top-24">
              <div className="text-meta uppercase tracking-wider2 text-ink-muted">FOUNDER’S NOTE</div>
              <div className="mt-3 fig-serif text-[1.1rem] text-red-mark">I.</div>
              <div className="mt-2 text-[0.92rem] leading-7 text-ink-soft max-w-[18rem]">
                광고를 시작한 첫 해, 저는 같은 카피를 한 달에 백 번 썼습니다. 그러다 어느 날, 그 카피가
                병원의 진료실 분위기와 전혀 다르다는 사실을 알았습니다.
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-display-2 text-ink">왜 병원 마케팅을 하는가.</h2>
            <div className="reader mt-7 max-w-prose text-body text-ink dropcap">
              <p>
                저는 광고 회사에서 일을 시작했습니다. 정확히는 ‘잘 팔리는 한 줄’을 쓰는 사람으로 훈련을
                받았습니다. 그 시기의 저에게 광고는, 환자의 결정을 빠르게 끌어당기는 도구였습니다.
                그러나 어느 날 한 정형외과 원장님이 저에게 이런 말을 했습니다. ‘오늘 광고로 들어온
                환자가 다음 달에 다른 병원을 갑니다. 저는 그분의 5년을 보고 싶은데, 광고는 한 달짜리
                같습니다.’
              </p>
              <p>
                그 말이 오랫동안 남았습니다. 광고는 한 달을 살리지만, 한 병원은 5년 단위로 자랍니다.
                저는 5년의 호흡에 맞는 회사가 한국에 부족하다고 느꼈습니다. 그래서 한 줄을 쓰는 일에서
                한 발 물러나, 병원의 구조를 함께 보는 일을 시작했습니다. 그것이 글로맥스의 출발입니다.
              </p>
              <p>
                저는 이 회사가 크다고 말하지 않습니다. 우리는 한 해에 함께 일하는 병원의 수를
                의도적으로 제한합니다. 한 병원의 5년을 보려면, 한 사람의 5년 안에 들어갈 수 있는
                숫자에는 한계가 있기 때문입니다.
              </p>
            </div>

            <div className="rule-top mt-16 pt-12">
              <div className="fig-serif text-[1.1rem] text-red-mark">II.</div>
              <h2 className="font-serif text-display-2 text-ink mt-2">어떤 시장 변화를 보는가.</h2>
              <div className="reader mt-7 max-w-prose text-body text-ink">
                <p>
                  AI 검색은 환자가 정보를 만나는 입자를 바꿔놓았습니다. 예전에는 한 키워드의 1등이
                  결정을 만들었지만, 지금은 AI가 정리해주는 ‘한 단락’이 결정을 만듭니다. 그 한
                  단락은, 병원의 한 페이지에서 인용되어 만들어집니다. 즉, 더 많은 페이지가 아니라
                  ‘인용되기 좋은 페이지’가 필요합니다.
                </p>
                <p>
                  또 하나, 환자 후기의 무게중심이 ‘별점’에서 ‘서사’로 옮겨가고 있습니다. 별 5개의
                  줄세움보다, ‘어느 토요일에 어떤 보호자가 어떤 표정으로 나왔는가’라는 한 문단이 더
                  많은 결정을 만듭니다. 우리는 그 서사를 외부에서 만들지 않습니다. 진료실 안에서
                  이미 일어나고 있는 것을 발견해서, 외부에 옮깁니다.
                </p>
              </div>
            </div>

            <div className="rule-top mt-16 pt-12">
              <div className="fig-serif text-[1.1rem] text-red-mark">III.</div>
              <h2 className="font-serif text-display-2 text-ink mt-2">
                어떤 병원과 함께 일하고 싶은가.
              </h2>
              <div className="reader mt-7 max-w-prose text-body text-ink">
                <p>
                  큰 병원이라서, 작은 병원이라서, 라는 기준은 없습니다. 다만 한 가지를 봅니다.
                  <em className="not-italic text-red-mark"> 5년의 그림이 있는 원장님</em>이냐는
                  것입니다. 다음 분기의 매출만 보는 분과는, 우리가 도울 수 있는 일이 별로 없습니다.
                  광고대행사는 다음 분기를 다루는 데 더 능합니다.
                </p>
                <p>
                  반대로, ‘우리 병원이 동네에서 어떤 존재이고 싶은가’를 길게 그릴 수 있는 분과는,
                  대부분 좋은 결과로 함께 끝납니다. 우리는 한 해에 그런 병원을 다섯에서 일곱 곳까지만
                  맡습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT CV */}
      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-14 md:px-10 md:py-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">짧은 약력</div>
            <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-2">
              SHORT CV
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-x-6 gap-y-4">
            {[
              ["—", "광고대행사 · 의료 부문 카피 / 전략"],
              ["—", "병원 브랜딩 프로젝트 다수 진행"],
              ["—", "AI 시대 환자 행동에 대한 사내 리서치 운영"],
              ["—", "글로맥스 창립 · 대표"]
            ].map(([dot, line]) => (
              <div key={line} className="col-span-12 grid grid-cols-12 gap-3 border-t border-paper-rule pt-3">
                <div className="col-span-1 fig-serif text-ink-muted">{dot}</div>
                <div className="col-span-11 text-[0.98rem] leading-7 text-ink">{line}</div>
              </div>
            ))}

            <div className="col-span-12 mt-4 text-[0.85rem] text-ink-muted">
              상세 약력 및 자기소개는 별도 요청 시 전달드립니다.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">END NOTE</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.6rem] leading-snug text-ink md:text-[2rem]">
              제가 쓴 글들은 아카이브에 모여 있습니다. 길게 쓴 글이 우리 회사의 가장 정직한 소개입니다.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/archive" className="link-rule font-serif text-[1.05rem] text-ink">
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
