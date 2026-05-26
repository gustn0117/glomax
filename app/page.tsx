import Link from "next/link";

const heroPhoto =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2200&q=80&auto=format&fit=crop";
const sectionPhoto1 =
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1800&q=80&auto=format&fit=crop";
const sectionPhoto2 =
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1800&q=80&auto=format&fit=crop";
const sectionPhoto3 =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80&auto=format&fit=crop";

const issueDate = "VOL. 01 · 2026";

export default function HomePage() {
  return (
    <>
      {/* HERO — asymmetric: tall photo column right, type column left */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          {/* meta strip */}
          <div className="col-span-12 flex items-center justify-between text-meta uppercase text-ink-muted rise rise-1">
            <span>{issueDate}</span>
            <span className="hidden md:inline">서울 · 병원 마케팅 스튜디오</span>
            <span className="md:hidden">병원 마케팅</span>
          </div>

          {/* type column */}
          <div className="col-span-12 md:col-span-7 md:pt-10">
            <h1 className="font-serif font-medium text-ink text-display-1 rise rise-1">
              우리는 광고를 집행하지 않습니다.
              <br />
              병원의 성장을{" "}
              <em className="not-italic" style={{ color: "var(--c-mark)" }}>
                해석
              </em>
              합니다.
            </h1>

            <div className="mt-9 max-w-[34rem] text-lede text-ink-soft rise rise-3 axis">
              <p>
                환자는 더 이상 검색 결과의 첫 줄만 보지 않습니다. 블로그를 거치고, 후기를 거치고,
                결국 병원의 홈페이지로 돌아옵니다. 그 마지막 한 화면이 신뢰를 결정합니다.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3 rise rise-4">
              <Link
                href="/perspective"
                className="text-[0.95rem] text-ink link-rule font-medium"
              >
                우리가 보는 병원 마케팅
              </Link>
              <Link
                href="/founder"
                className="text-[0.92rem] text-ink-muted hover:text-ink"
              >
                대표의 글 →
              </Link>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-x-5 border-t border-line pt-6 max-w-[34rem]">
              <div>
                <dt className="text-meta uppercase text-ink-muted">설립</dt>
                <dd className="mt-2 fig-serif text-[1.4rem] text-ink">2019</dd>
              </div>
              <div>
                <dt className="text-meta uppercase text-ink-muted">방식</dt>
                <dd className="mt-2 text-[0.95rem] text-ink leading-snug">
                  소수
                  <br />
                  프로젝트제
                </dd>
              </div>
              <div>
                <dt className="text-meta uppercase text-ink-muted">분야</dt>
                <dd className="mt-2 text-[0.95rem] text-ink leading-snug">
                  병원 마케팅
                  <br />
                  & 브랜딩
                </dd>
              </div>
            </dl>
          </div>

          {/* photo column — tall, full-bleed feel */}
          <div className="col-span-12 md:col-span-5 relative">
            <figure className="relative aspect-[3/5] md:aspect-[3/5] overflow-hidden bg-line-soft photo-in">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroPhoto}
                alt="유리 외장 고층 건물의 로우앵글 — 신뢰의 구조"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <figcaption className="absolute right-3 top-3 caption-vert text-white/85 mix-blend-difference">
                Trust · Architecture · Time
              </figcaption>
            </figure>
            <div className="mt-3 flex items-center justify-between text-meta uppercase text-ink-muted">
              <span>Plate I.</span>
              <span>2026 · Seoul Skyline</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 — 시대의 변화 (photo left, text right) */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-16 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden bg-line-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sectionPhoto1}
                alt="대칭으로 마주 본 유리 빌딩 — 검색의 거울"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="mt-3 text-meta uppercase text-ink-muted">
              Plate II. · The Mirror of Search
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="flex items-baseline gap-5">
              <span className="num-tag text-[3.6rem] text-ink-faint">01</span>
              <span className="text-meta uppercase text-ink">시대의 변화</span>
            </div>

            <h2 className="mt-6 font-serif text-display-2 text-ink">
              검색은 끝났고,
              <br />
              해석이 시작되었다.
            </h2>

            <div className="reader mt-8 max-w-prose text-body text-ink-soft">
              <p>
                10년간 의료 광고의 표준은 분명했습니다. 키워드, 노출, 클릭, 그리고 상담. 이 직선의
                끝에 매출이 있다고 믿었고, 대부분의 대행사가 같은 도구를 같은 방식으로
                사용했습니다. 글로맥스는 그 시기에 시장에 들어왔지만, 같은 길을 따라가지 않았습니다.
              </p>
              <p>
                AI 검색이 답을 직접 정리해주는 시대에는, 환자가 만나는 정보의 입자가 달라집니다.
                광고 한 줄이 아니라, 병원이 쌓아온 글의 톤, 사진의 정돈도, 후기의 결, 그리고
                홈페이지의 마지막 한 화면이 모여 한 번에 해석됩니다.
              </p>
              <p>
                그래서 우리는 트래픽을 자랑하지 않습니다. 노출 수를 보고하지 않습니다. 대신
                물어봅니다.{" "}
                <span style={{ color: "var(--c-mark)" }}>
                  이 병원의 5년 뒤를 어떻게 그릴 것인가.
                </span>{" "}
                거기에서 오늘의 한 줄이 나옵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — 세 가지 약속 (no cards; numbered prose with hairlines) */}
      <section className="rule-bottom">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-baseline gap-5">
                <span className="num-tag text-[3.6rem] text-ink-faint">02</span>
                <span className="text-meta uppercase text-ink">세 가지 약속</span>
              </div>
              <h2 className="mt-6 font-serif text-display-2 text-ink">
                짧지만,
                <br />
                어려운 셋.
              </h2>
              <p className="mt-7 max-w-[22rem] text-[0.97rem] leading-7 text-ink-muted">
                약속의 문장은 짧습니다. 지키는 일은 매일의 결정에서 일어납니다. 우리가 한 병원과
                일하는 방식의 토대입니다.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-8 grid grid-cols-1 gap-0">
              {[
                {
                  no: "I.",
                  title: "광고가 아니라 구조를 본다.",
                  body: "한 달의 클릭 수보다 한 해의 환자 동선을 봅니다. 키워드의 단가보다 진료 영역 전체의 포지셔닝을 먼저 짭니다. 광고 운영은 그 구조 위에서만 의미가 있습니다."
                },
                {
                  no: "II.",
                  title: "신뢰는 시간 위에 쌓인다.",
                  body: "리뷰는 양으로 만들 수 없습니다. 후기 한 줄, 사진 한 장, 의사의 말 한마디가 일관된 톤을 가질 때 환자는 안심합니다. 우리는 그 톤을 함께 만듭니다."
                },
                {
                  no: "III.",
                  title: "지역을 가볍게 보지 않는다.",
                  body: "지하철 두 정거장 안에서 일어나는 결정이 한 병원의 일년을 만듭니다. 우리는 그 거리의 동네에서 어떤 말이 통하는지를 먼저 듣습니다."
                }
              ].map((item, i) => (
                <li
                  key={item.no}
                  className={`grid grid-cols-12 gap-4 py-9 ${
                    i === 0 ? "border-y border-line" : "border-b border-line"
                  }`}
                >
                  <div className="col-span-2 md:col-span-1 fig-serif text-[1.05rem] text-ink-muted pt-1">
                    {item.no}
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-serif text-[1.45rem] leading-snug text-ink md:text-[1.6rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[44rem] text-[0.98rem] leading-[1.85] text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 03 — full-bleed plate (quiet photographic interlude) */}
      <section className="rule-bottom">
        <figure className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-line-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sectionPhoto2}
            alt="곡선 형태의 현대 건축 외장 — 구조가 만든 빛"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-5 md:px-10 md:pb-8">
            <div className="mx-auto flex max-w-[1400px] items-baseline justify-between text-meta uppercase text-white/90 mix-blend-difference">
              <span>Plate III.</span>
              <span className="hidden md:inline">한 구조가 빛을 만든다 · A Structure Casts Its Own Light</span>
              <span className="md:hidden">구조가 만든 빛</span>
            </div>
          </div>
        </figure>
      </section>

      {/* SECTION 04 — 대표 인용 + portrait */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-16 md:px-10 md:py-28">
          <div className="col-span-12 md:col-span-4">
            <div className="text-meta uppercase text-ink-muted">대표의 한 줄</div>
            <figure className="mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder-portrait.jpg"
                alt="글로맥스 대표"
                className="aspect-[3/4] w-full max-w-[320px] object-cover grayscale-[0.05]"
              />
              <figcaption className="mt-3 text-[0.85rem] text-ink-muted">
                대표 · 글로맥스 (GLOMAX)
              </figcaption>
            </figure>
          </div>

          <blockquote className="col-span-12 md:col-span-7 md:col-start-6 self-center">
            <div className="font-serif text-[1.85rem] leading-[1.45] text-ink md:text-[2.3rem]">
              “
              <span style={{ color: "var(--c-mark)" }}>한 병원의 5년</span>을 보지 않고는 한 달의
              캠페인도 제대로 만들 수 없습니다. 우리는 광고가 아니라 시간을 다룬다고 믿습니다.”
            </div>
            <div className="mt-8 text-meta uppercase text-ink-muted">— Founder’s Note</div>
            <div className="mt-4">
              <Link href="/founder" className="link-rule text-[0.98rem] text-ink">
                대표 소개 전문 읽기 →
              </Link>
            </div>
          </blockquote>
        </div>
      </section>

      {/* SECTION 05 — index (목차) */}
      <section className="rule-bottom">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="num-tag text-[3.6rem] text-ink-faint">목차</div>
              <div className="text-meta uppercase text-ink mt-3">INDEX OF THIS ISSUE</div>
              <figure className="mt-8 hidden md:block">
                <div className="relative aspect-square overflow-hidden bg-line-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sectionPhoto3}
                    alt="현대 미술관 외장의 기하 — 인덱스의 시각"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-meta uppercase text-ink-muted">
                  Plate IV.
                </figcaption>
              </figure>
            </div>

            <ol className="col-span-12 md:col-span-9 border-t border-line">
              {[
                {
                  no: "02",
                  href: "/perspective",
                  title: "우리가 보는 병원 마케팅",
                  sub: "왜 광고로는 더 이상 답이 안 나오는지, 시장 해석 네 편."
                },
                {
                  no: "03",
                  href: "/cases",
                  title: "사례 노트",
                  sub: "숫자 자랑이 아니라 맥락의 기록. 문제 — 전략 — 변화."
                },
                {
                  no: "04",
                  href: "/founder",
                  title: "대표 소개",
                  sub: "왜 병원 마케팅인가. 어떤 병원과 일하고 싶은가."
                },
                {
                  no: "05",
                  href: "/archive",
                  title: "아카이브",
                  sub: "두 개의 블로그. 길게 쓴 글을 모아둡니다."
                }
              ].map((row) => (
                <li key={row.no} className="border-b border-line">
                  <Link
                    href={row.href}
                    className="index-row group grid grid-cols-12 items-baseline gap-3 py-7 md:gap-6"
                  >
                    <div className="col-span-2 md:col-span-1 fig-serif text-[1.2rem] text-ink-muted">
                      {row.no}
                    </div>
                    <div className="col-span-10 md:col-span-8">
                      <div className="font-serif text-[1.4rem] text-ink leading-snug md:text-[1.7rem]">
                        {row.title}
                      </div>
                      <div className="mt-1.5 text-[0.95rem] text-ink-muted">{row.sub}</div>
                    </div>
                    <div className="col-span-12 md:col-span-3 self-center text-right text-meta uppercase text-ink-muted">
                      읽기 →
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* COLOPHON */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-12 md:px-10 md:py-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase text-ink-muted">콜로폰</div>
            <div className="mt-2 text-meta uppercase text-ink-muted">COLOPHON</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            <div>
              <div className="text-meta uppercase text-ink-muted">발행</div>
              <div className="mt-2 text-[0.95rem] text-ink">글로맥스</div>
            </div>
            <div>
              <div className="text-meta uppercase text-ink-muted">분야</div>
              <div className="mt-2 text-[0.95rem] text-ink">병원 마케팅 / 브랜딩</div>
            </div>
            <div>
              <div className="text-meta uppercase text-ink-muted">방식</div>
              <div className="mt-2 text-[0.95rem] text-ink">소수 프로젝트제</div>
            </div>
            <div>
              <div className="text-meta uppercase text-ink-muted">위치</div>
              <div className="mt-2 text-[0.95rem] text-ink">서울</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
