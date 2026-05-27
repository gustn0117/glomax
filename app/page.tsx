import Link from "next/link";

const heroPhoto =
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=2400&q=85&auto=format&fit=crop";
const sectionPhoto =
  "https://images.unsplash.com/photo-1481253127861-534498168948?w=2000&q=85&auto=format&fit=crop";
const figureCorridor =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80&auto=format&fit=crop";
const figureSoho =
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1800&q=80&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────── HERO — bright cinematic ─────────────────── */}
      <section className="relative isolate overflow-hidden bg-paper text-ink">
        {/* Background skyline image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover photo-in"
          />
          <div className="absolute inset-0 veil-corner" />
        </div>

        {/* Top meta strip */}
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 pt-32 md:px-10 md:pt-36">
          <div className="tag text-ink rise rise-1">
            <span className="text-accent">●</span>&nbsp;&nbsp;ACTIVE PROJECTS · 04
          </div>
          <div className="tag hidden text-ink-muted md:block rise rise-1">
            EST. 2019 — SEOUL, KR
          </div>
        </div>

        {/* Headline */}
        <div className="relative mx-auto mt-14 max-w-[1600px] px-5 md:mt-20 md:px-10">
          <h1 className="font-sans font-extrabold text-mega text-ink leading-[0.92] rise rise-2">
            신뢰는
            <br />
            <span className="text-accent">구조</span>에서
            <br />
            온다.
          </h1>

          <div className="mt-14 grid grid-cols-12 gap-6 md:mt-20">
            <p className="col-span-12 max-w-[44ch] text-lede text-ink-soft md:col-span-7 rise rise-3">
              글로맥스는 광고를 집행하는 회사가 아닙니다. 우리는 한 병원의{" "}
              <span className="text-ink font-semibold">5년을 보고</span>, 그 위에 한 달의
              캠페인을 얹습니다. 검색이 끝난 시대에, 결정은 해석에서 일어납니다.
            </p>

            <div className="col-span-12 flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end rise rise-4">
              <Link href="/perspective" className="cta-btn">
                관점 읽기 <span className="arrow" />
              </Link>
              <Link href="/founder" className="cta-btn cta-btn--ghost">
                필자 소개
              </Link>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="relative mx-auto mt-24 max-w-[1600px] px-5 md:mt-36 md:px-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper-line-strong py-8 md:grid-cols-4 md:py-10">
            {[
              { k: "PARTNERSHIP", v: "평균 동행 5년", sub: "01" },
              { k: "POSITIONING", v: "구조 위의 캠페인", sub: "02" },
              { k: "TRUST", v: "지역 침투 전략", sub: "03" },
              { k: "DELIVERY", v: "소수 프로젝트제", sub: "04" }
            ].map((kpi) => (
              <div key={kpi.k} className="flex items-baseline gap-4">
                <span className="mono text-[0.72rem] text-ink-faint">{kpi.sub}</span>
                <div>
                  <dt className="tag text-ink-faint">{kpi.k}</dt>
                  <dd className="mt-1.5 text-[1.02rem] text-ink md:text-[1.08rem]">{kpi.v}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─────────────────── 01 — PRINCIPLE ─────────────────── */}
      <section className="relative bg-paper py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between md:mb-16">
            <div className="tag text-accent">PRINCIPLE / 01</div>
            <div className="tag hidden text-ink-faint md:block">MANIFESTO — 1.0</div>
          </div>

          <h2 className="font-sans font-extrabold text-hero text-ink max-w-[18ch]">
            광고가 아니라,{" "}
            <span className="text-ink-faint">병원의</span>{" "}
            <span className="text-accent">구조</span>를 본다.
          </h2>

          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-28 md:gap-y-12">
            {[
              {
                tag: "01 / 키워드 X",
                title: "한 달이 아니라, 한 해를 본다.",
                body: "키워드의 단가가 아니라 진료 영역의 포지셔닝부터 시작합니다. 광고는 그 위에서만 의미가 있습니다."
              },
              {
                tag: "02 / 후기 X",
                title: "양으로 만든 신뢰는 깨진다.",
                body: "사진 한 장, 의사의 말 한 마디, 후기 한 줄이 같은 톤을 가질 때 환자는 안심합니다. 우리는 그 톤을 함께 짭니다."
              },
              {
                tag: "03 / 광역 X",
                title: "동네의 말을 먼저 듣는다.",
                body: "지하철 두 정거장 안에서 일어나는 결정이 한 병원의 일년을 만듭니다. 우리는 그 거리부터 읽습니다."
              }
            ].map((p, i) => (
              <article
                key={p.tag}
                className={`col-span-12 md:col-span-4 ${
                  i === 0 ? "" : "md:border-l md:border-paper-line md:pl-8"
                }`}
              >
                <div className="tag text-accent">{p.tag}</div>
                <h3 className="mt-5 font-sans font-semibold text-[1.5rem] text-ink leading-[1.18] md:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-[1.85] text-ink-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 02 — APPROACH (soft paper) ─────────────────── */}
      <section className="bg-paper-soft py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between md:mb-20">
            <div className="tag text-ink">APPROACH / 02</div>
            <div className="tag hidden text-ink-faint md:block">METHODOLOGY — 2.0</div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <h2 className="col-span-12 font-sans font-extrabold text-hero text-ink leading-[1.0] md:col-span-8 max-w-[20ch]">
              검색 다음의 시장에서,
              <br />
              결정은 한 화면이 만든다.
            </h2>
            <p className="col-span-12 max-w-prose text-lede text-ink-soft md:col-span-4 md:self-end">
              AI가 답을 정리해주는 시대, 환자가 마주하는 정보의 입자는 달라집니다. 우리는
              그 표면부터 다시 설계합니다.
            </p>
          </div>

          {/* Service rows */}
          <ul className="mt-16 border-t border-paper-line-strong md:mt-24">
            {[
              {
                no: "01",
                kr: "전략 진단",
                en: "Strategic Reading",
                body: "시장 · 경쟁 · 진료 영역 · 환자 동선 — 한 병원의 위치를 한 번에 그려 봅니다."
              },
              {
                no: "02",
                kr: "브랜드 / 콘텐츠 구조",
                en: "Brand & Content Architecture",
                body: "톤 · 이미지 · 메시지를 일관된 시스템으로 묶고, 그 위에 콘텐츠 운영을 얹습니다."
              },
              {
                no: "03",
                kr: "전환 페이지 / 홈페이지",
                en: "Conversion Surface",
                body: "환자의 마지막 한 화면. 신뢰가 결정되는 그 페이지를 다시 짭니다."
              },
              {
                no: "04",
                kr: "장기 운영 파트너십",
                en: "Long-term Partnership",
                body: "평균 5년의 동행. 한 분기가 아니라 한 시대를 같이 봅니다."
              }
            ].map((row) => (
              <li
                key={row.no}
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-paper-line py-9 transition-colors duration-300 ease-precise hover:bg-paper md:gap-8 md:py-11"
              >
                <div className="col-span-2 mono text-[0.95rem] text-ink-muted md:col-span-1 md:text-[1.05rem]">
                  {row.no}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <div className="font-sans font-bold text-[1.4rem] text-ink leading-tight md:text-[1.8rem]">
                    {row.kr}
                  </div>
                  <div className="mono mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                    {row.en}
                  </div>
                </div>
                <div className="col-span-12 max-w-[44rem] text-[1rem] leading-[1.78] text-ink-muted md:col-span-6">
                  {row.body}
                </div>
                <div className="col-span-12 hidden text-right text-ink md:col-span-1 md:block">
                  <span className="row-arrow" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────── 03 — DATA + figure ─────────────────── */}
      <section className="relative isolate overflow-hidden bg-paper py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between md:mb-20">
            <div className="tag text-accent">DATA / 03</div>
            <div className="tag hidden text-ink-faint md:block">NEW BASELINE — 3.0</div>
          </div>

          <h2 className="font-sans font-extrabold text-hero text-ink max-w-[18ch]">
            이미 시장은{" "}
            <span className="text-ink-faint">한 번</span>{" "}
            바뀌었습니다.
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-24 md:grid-cols-4">
            {[
              { num: "5년", label: "평균 동행 기간", sub: "한 분기 단위로는 보지 않습니다." },
              { num: "27%", label: "AI 답변형 검색 점유", sub: "2024년 도입 12개월 만에 도달." },
              { num: "3.6×", label: "환자 결정 시간 증가", sub: "검색에서 검증까지의 경로가 길어졌습니다." },
              { num: "0", label: "광고 비중에 대한 의존", sub: "구조가 트래픽보다 먼저입니다." }
            ].map((stat) => (
              <div key={stat.label} className="border-t border-ink pt-6">
                <div className="stat-num">{stat.num}</div>
                <div className="mt-3 text-[0.95rem] text-ink">{stat.label}</div>
                <div className="mt-2 text-[0.86rem] leading-snug text-ink-muted">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Sub figure block */}
          <div className="mt-24 grid grid-cols-12 gap-6 md:mt-32">
            <figure className="col-span-12 md:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sectionPhoto}
                  alt="흰 콘크리트 건축물의 로우앵글 — 구조가 만든 빛"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mono mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">
                Fig. 01 — A Structure Casts Its Own Light
              </figcaption>
            </figure>

            <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
              <p className="reader text-ink-soft max-w-[44ch] text-[1.05rem] leading-[1.85]">
                숫자는 시장의 변화일 뿐, 우리의 약속은 아닙니다. 우리는 매번 한 병원과
                일하기 전,{" "}
                <span className="text-accent font-semibold">시장이 아니라 한 병원의 자리가</span>{" "}
                먼저인지부터 다시 묻습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 04 — FOUNDER ─────────────────── */}
      <section className="bg-paper-warm py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 flex items-baseline justify-between md:mb-20">
            <div className="tag text-ink">FOUNDER / 04</div>
            <div className="tag hidden text-ink-faint md:block">A NOTE — 4.0</div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <figure className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder-portrait.jpg"
                  alt="글로맥스 대표"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="mono mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                — 대표 · 글로맥스 (GLOMAX)
              </figcaption>
            </figure>

            <div className="col-span-12 md:col-span-6 md:col-start-7 md:self-center">
              <blockquote className="font-sans font-bold text-h1 text-ink leading-[1.18]">
                “한 병원의{" "}
                <span className="text-accent">5년</span>을 보지 않고는 한 달의 캠페인도
                제대로 만들 수 없습니다. 우리는 광고가 아니라{" "}
                <span className="text-accent">시간</span>을 다룬다고 믿습니다.”
              </blockquote>

              <div className="mt-12 grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-4">
                  <div className="tag text-ink-muted">SINCE</div>
                  <div className="mt-2 text-[1.05rem] text-ink">2019</div>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <div className="tag text-ink-muted">FIELD</div>
                  <div className="mt-2 text-[1.05rem] text-ink">병원 마케팅 / 브랜딩</div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="tag text-ink-muted">FORMAT</div>
                  <div className="mt-2 text-[1.05rem] text-ink">소수 프로젝트제</div>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/founder" className="cta-btn">
                  필자 글 전문 <span className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA — light closer with accent ─────────────────── */}
      <section className="relative isolate overflow-hidden bg-paper py-28 text-ink md:py-40">
        <div className="absolute inset-x-0 top-0 h-px bg-accent" />
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 md:mb-20">
            <div className="tag text-accent">INQUIRY / 05</div>
          </div>

          <h2 className="font-sans font-extrabold text-mega text-ink leading-[0.95] max-w-[14ch]">
            5년의{" "}
            <span className="text-accent">그림</span>,
            <br />
            함께 그릴 준비가 됐다면.
          </h2>

          <div className="mt-12 flex flex-col items-start gap-6 md:mt-16 md:flex-row md:items-baseline md:justify-between md:gap-10">
            <p className="max-w-[40ch] text-lede text-ink-soft">
              우리는 모든 병원과 일하지 않습니다. 시장과 환자에 대한 같은 호기심을 가진
              곳과만 시작합니다. 짧은 메일 한 통이면 충분합니다.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:hello@glomax.kr" className="cta-btn">
                hello@glomax.kr <span className="arrow" />
              </a>
              <Link href="/perspective" className="cta-btn cta-btn--ghost">
                먼저 글부터 읽기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
