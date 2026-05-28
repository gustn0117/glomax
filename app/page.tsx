import Link from "next/link";

const heroPhoto =
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=2400&q=85&auto=format&fit=crop";

const methodPhotos = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=82&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=82&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=82&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&q=82&auto=format&fit=crop"
];

const timelinePhoto =
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1800&q=82&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative isolate overflow-hidden bg-paper pb-24 text-ink md:pb-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover photo-in photo-soft"
          />
          <div className="absolute inset-0 veil-airy" />
        </div>

        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 pt-32 md:px-10 md:pt-36">
          <div className="tag text-ink rise rise-1">
            <span className="text-accent">●</span>&nbsp;&nbsp;ACTIVE PROJECTS · 04
          </div>
          <div className="tag hidden text-ink-soft md:block rise rise-1">
            EST. 2019 — SEOUL, KR
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-[1280px] flex-col items-center px-5 text-center md:mt-24 md:px-10">
          <div className="display rise rise-2 text-[0.85rem] italic text-ink-muted md:text-[0.95rem]">
            <em>A Hospital Marketing Studio — Vol. I</em>
          </div>

          <h1 className="mt-6 font-sans font-extrabold text-mega text-ink leading-[0.92] rise rise-2">
            신뢰는
            <br />
            <span className="text-accent">구조</span>에서 온다.
          </h1>

          <p className="mt-12 max-w-[44ch] text-lede text-ink-soft rise rise-3 md:mt-14">
            글로맥스는 광고를 집행하는 회사가 아닙니다. 우리는 한 병원의{" "}
            <span className="font-semibold text-ink">5년을 보고</span>, 그 위에 한 달의
            캠페인을 얹습니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rise rise-4 md:mt-12">
            <Link href="/perspective" className="cta-btn">
              관점 읽기 <span className="arrow" />
            </Link>
            <Link href="/founder" className="cta-btn cta-btn--ghost">
              필자 소개
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── KPI strip ─────────────────── */}
      <section className="border-y border-paper-line bg-paper text-ink">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 text-center md:grid-cols-4 md:py-14">
            {[
              { k: "PARTNERSHIP", v: "평균 동행 5년", sub: "01" },
              { k: "POSITIONING", v: "구조 위의 캠페인", sub: "02" },
              { k: "TRUST", v: "지역 침투 전략", sub: "03" },
              { k: "DELIVERY", v: "소수 프로젝트제", sub: "04" }
            ].map((kpi) => (
              <div key={kpi.k} className="flex flex-col items-center gap-2.5">
                <span className="mono text-[0.72rem] text-ink-muted">{kpi.sub}</span>
                <dt className="tag text-ink-soft">{kpi.k}</dt>
                <dd className="text-[1.08rem] font-medium text-ink md:text-[1.15rem]">
                  {kpi.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─────────────────── MANIFESTO pull-quote ─────────────────── */}
      <section className="relative bg-paper-warm grain-warm py-32 text-ink md:py-44">
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-5 text-center md:px-10">
          <div className="tag mb-10 text-ink-muted md:mb-14">— MANIFESTO</div>
          <p className="pull-quote text-manifesto text-ink max-w-[24ch] md:max-w-[28ch]">
            “광고가 아니라,{" "}
            <span className="text-accent not-italic font-medium">시간</span>을 다루는
            회사.”
          </p>
          <p className="display mt-10 text-[0.92rem] italic text-ink-muted md:mt-14">
            — Founder’s Note
          </p>
        </div>
      </section>

      {/* ─────────────────── 01 — PRINCIPLE (numbered, no cards) ─────────────────── */}
      <section className="bg-paper py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          {/* Section header */}
          <div className="mb-16 flex items-baseline justify-between border-b border-paper-line pb-6 md:mb-24">
            <div>
              <div className="tag text-accent">PRINCIPLE — 01</div>
              <h2 className="mt-3 font-sans font-extrabold text-hero text-ink max-w-[20ch]">
                광고가 아니라,{" "}
                <span className="text-ink-faint">병원의</span>{" "}
                <span className="text-accent">구조</span>를 본다.
              </h2>
            </div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>Three commitments / 三約</em>
            </div>
          </div>

          {/* Numbered list */}
          <ol className="grid grid-cols-1 gap-0">
            {[
              {
                no: "01",
                tag: "키워드 X",
                title: "한 달이 아니라, 한 해를 본다.",
                body: "키워드의 단가가 아니라 진료 영역의 포지셔닝부터 시작합니다. 광고 운영은 그 구조 위에서만 의미를 갖습니다."
              },
              {
                no: "02",
                tag: "후기 X",
                title: "양으로 만든 신뢰는 깨진다.",
                body: "사진 한 장, 의사의 말 한 마디, 후기 한 줄이 같은 톤을 가질 때 환자는 안심합니다. 우리는 그 톤을 함께 짭니다."
              },
              {
                no: "03",
                tag: "광역 X",
                title: "동네의 말을 먼저 듣는다.",
                body: "지하철 두 정거장 안에서 일어나는 결정이 한 병원의 일년을 만듭니다. 우리는 그 거리부터 읽습니다."
              }
            ].map((p) => (
              <li
                key={p.no}
                className="grid grid-cols-12 gap-6 border-t border-paper-line py-12 md:gap-8 md:py-16"
              >
                <div className="col-span-12 md:col-span-2">
                  <div className="principle-no text-ink">{p.no}</div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="tag text-accent">{p.tag}</div>
                  <h3 className="mt-3 font-sans font-bold text-[1.45rem] text-ink leading-[1.18] md:text-[1.65rem]">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="font-serif text-[1.04rem] leading-[1.9] text-ink-soft max-w-[44rem]">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────── 02 — METHODOLOGY (4 steps, alternating photos) ─────────────────── */}
      <section className="bg-paper-soft py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-16 flex items-baseline justify-between border-b border-paper-line pb-6 md:mb-24">
            <div>
              <div className="tag text-ink">METHODOLOGY — 02</div>
              <h2 className="mt-3 font-sans font-extrabold text-hero text-ink max-w-[20ch]">
                네 단계로,{" "}
                <span className="text-accent">한 병원의 5년</span>을 짭니다.
              </h2>
            </div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>Four movements</em>
            </div>
          </div>

          <div className="space-y-20 md:space-y-28">
            {[
              {
                no: "01",
                kr: "전략 진단",
                en: "Strategic Reading",
                body: "시장 · 경쟁 · 진료 영역 · 환자 동선을 한 번에 그려 봅니다. 광고가 아니라, 한 병원의 위치를 먼저 찾는 일.",
                photo: methodPhotos[0]
              },
              {
                no: "02",
                kr: "브랜드 / 콘텐츠 구조",
                en: "Brand & Content Architecture",
                body: "톤 · 이미지 · 메시지를 일관된 시스템으로 묶고, 그 위에 콘텐츠 운영을 얹습니다. 후기 한 줄도 이 구조 안에 들어옵니다.",
                photo: methodPhotos[1]
              },
              {
                no: "03",
                kr: "전환 페이지 / 홈페이지",
                en: "Conversion Surface",
                body: "환자가 마지막으로 보는 한 화면. 신뢰가 결정되는 그 페이지를 다시 짭니다. 형식과 톤, 마지막 한 단락의 무게까지.",
                photo: methodPhotos[2]
              },
              {
                no: "04",
                kr: "장기 운영 파트너십",
                en: "Long-term Partnership",
                body: "평균 5년의 동행. 한 분기 단위로는 보이지 않는 것을 같이 봅니다. 의사 결정 옆에 우리 자리가 있습니다.",
                photo: methodPhotos[3]
              }
            ].map((step, i) => (
              <article
                key={step.no}
                className={`grid grid-cols-12 items-center gap-6 md:gap-10 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="col-span-12 md:col-span-6">
                  <div className="relative aspect-[5/4] w-full overflow-hidden bg-paper-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.photo}
                      alt={`${step.kr} — 건축 사진을 통한 시각 은유`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mono mt-3 flex items-baseline justify-between text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                    <span>Fig. {step.no} — {step.en}</span>
                    <span className="hidden md:inline">Plate 02.{step.no}</span>
                  </figcaption>
                </figure>

                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-baseline gap-4">
                    <span className="principle-no">{step.no}</span>
                    <span className="tag text-accent">STEP</span>
                  </div>
                  <h3 className="mt-5 font-sans font-bold text-[1.7rem] text-ink leading-[1.15] md:text-[2.1rem]">
                    {step.kr}
                  </h3>
                  <div className="mono mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                    {step.en}
                  </div>
                  <p className="mt-6 max-w-[44rem] font-serif text-[1.04rem] leading-[1.9] text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 03 — DATA (serif numerals + timeline) ─────────────────── */}
      <section className="bg-paper py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-16 flex items-baseline justify-between border-b border-paper-line pb-6 md:mb-24">
            <div>
              <div className="tag text-accent">DATA — 03</div>
              <h2 className="mt-3 font-sans font-extrabold text-hero text-ink max-w-[20ch]">
                이미 시장은{" "}
                <span className="text-ink-faint">한 번</span>{" "}
                바뀌었습니다.
              </h2>
            </div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>Indicators of the shift</em>
            </div>
          </div>

          {/* 4 serif-numeral stats */}
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-6">
            {[
              { num: "5", suf: "년", label: "평균 동행 기간", sub: "한 분기 단위로는 보지 않습니다." },
              { num: "27", suf: "%", label: "AI 답변형 검색 점유", sub: "2024년 도입 12개월 만에 도달." },
              { num: "3.6", suf: "×", label: "환자 결정 시간 증가", sub: "검색 → 검증의 경로가 길어졌습니다." },
              { num: "0", suf: "", label: "광고 비중에 대한 의존", sub: "구조가 트래픽보다 먼저입니다." }
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-t border-ink pt-7"
              >
                <div className="flex items-baseline gap-1">
                  <span className="stat-num">{stat.num}</span>
                  <span className="display text-[1.4rem] italic text-ink-muted">
                    {stat.suf}
                  </span>
                </div>
                <div className="mt-4 text-[0.95rem] font-medium text-ink">{stat.label}</div>
                <div className="mt-2 max-w-[26ch] text-[0.86rem] leading-snug text-ink-muted">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Visual timeline of the shift */}
          <div className="mt-28 md:mt-40">
            <div className="mb-10 flex items-baseline justify-between border-b border-paper-line pb-4">
              <div className="tag text-ink">TIMELINE — 03.1</div>
              <div className="display text-[0.82rem] italic text-ink-muted">
                <em>2014 → 2026</em>
              </div>
            </div>

            <div className="relative pt-12">
              <div className="tl-track">
                <div className="tl-mark" style={{ left: "4%" }} />
                <div className="tl-mark" style={{ left: "44%" }} />
                <div className="tl-mark accent" style={{ left: "86%" }} />
              </div>
              <div className="mt-8 grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-3">
                  <div className="display text-[2.2rem] leading-none text-ink md:text-[2.8rem]">
                    2014
                  </div>
                  <div className="mt-3 text-[0.92rem] text-ink-soft">
                    키워드 + 상위 노출.
                    결정에 평균{" "}
                    <span className="font-semibold text-ink">1.4일</span>.
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-6 md:-mt-1">
                  <div className="display text-[2.2rem] leading-none text-ink md:text-[2.8rem]">
                    2020
                  </div>
                  <div className="mt-3 text-[0.92rem] text-ink-soft">
                    블로그 + 카페 후기 결합.
                    결정에 평균{" "}
                    <span className="font-semibold text-ink">3.6일</span>.
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-10">
                  <div className="display text-[2.2rem] leading-none text-accent md:text-[2.8rem]">
                    2026
                  </div>
                  <div className="mt-3 text-[0.92rem] text-ink-soft">
                    AI 답변 + 홈페이지가 한 번에.
                    평균{" "}
                    <span className="font-semibold text-accent">7.2일</span>.
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline figure */}
            <figure className="mt-16 grid grid-cols-12 gap-6 md:mt-20">
              <div className="col-span-12 md:col-span-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-paper-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={timelinePhoto}
                    alt="대칭으로 마주 본 유리 외장 — 검색이 만든 거울"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mono mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  Fig. 03.1 — The Mirror of Search
                </figcaption>
              </div>
              <p className="col-span-12 md:col-span-4 md:self-end font-serif text-[1.04rem] leading-[1.85] text-ink-soft">
                숫자는 시장의 변화일 뿐, 약속은 아닙니다. 매번 한 병원과 일하기 전,{" "}
                <span className="text-accent font-semibold">시장이 아니라 한 병원의
                자리가</span>{" "}
                먼저인지부터 다시 묻습니다.
              </p>
            </figure>
          </div>
        </div>
      </section>

      {/* ─────────────────── 04 — FOUNDERS ─────────────────── */}
      <section className="bg-paper-warm grain-warm py-28 text-ink md:py-40">
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-16 flex items-baseline justify-between border-b border-paper-line pb-6 md:mb-24">
            <div>
              <div className="tag text-ink">FOUNDERS — 04</div>
              <h2 className="mt-3 font-sans font-extrabold text-hero text-ink max-w-[22ch]">
                한 병원의 5년을,
                <br />
                같이 그릴 <span className="text-accent">두 사람</span>.
              </h2>
            </div>
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>The studio is two.</em>
            </div>
          </div>

          {/* Pair of portraits */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {[
              {
                src: "/founder-1.jpg",
                no: "01",
                name: "대표",
                role: "Founder / Strategy",
                line: "구조를 보고, 시장의 변화를 읽습니다.",
                detail: "병원 마케팅 10년. 한 분기 단위의 보고서를 거부합니다."
              },
              {
                src: "/founder-2.jpg",
                no: "02",
                name: "공동대표",
                role: "Co-Founder / Brand",
                line: "톤을 짜고, 신뢰의 표면을 만듭니다.",
                detail: "브랜드 · 콘텐츠 · 전환 페이지의 마지막 한 단락까지."
              }
            ].map((person) => (
              <figure key={person.name} className="flex flex-col items-start text-left">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.src}
                    alt={`글로맥스 ${person.name}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="mt-6 flex w-full items-baseline justify-between border-b border-paper-line pb-4">
                  <div>
                    <div className="font-sans font-bold text-[1.4rem] text-ink leading-none md:text-[1.55rem]">
                      {person.name}
                    </div>
                    <div className="mono mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                      {person.role}
                    </div>
                  </div>
                  <div className="display text-[2rem] italic text-ink-muted md:text-[2.4rem]">
                    {person.no}
                  </div>
                </figcaption>
                <p className="mt-5 font-serif text-[1.05rem] leading-[1.78] text-ink">
                  {person.line}
                </p>
                <p className="mt-3 text-[0.92rem] leading-[1.65] text-ink-muted">
                  {person.detail}
                </p>
              </figure>
            ))}
          </div>

          {/* Joint quote */}
          <blockquote className="mx-auto mt-20 max-w-[44ch] text-center md:mt-28">
            <p className="pull-quote text-[1.75rem] text-ink md:text-[2.2rem]">
              “한 병원의{" "}
              <span className="text-accent not-italic font-medium">5년</span>을 보지
              않고는 한 달의 캠페인도 제대로 만들 수 없습니다.”
            </p>
            <div className="display mt-8 text-[0.92rem] italic text-ink-muted">
              — Founders, GLOMAX
            </div>
          </blockquote>
        </div>
      </section>

      {/* ─────────────────── CTA / INQUIRY ─────────────────── */}
      <section className="bg-paper py-28 text-ink md:py-40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-16 flex items-baseline justify-between border-b border-paper-line pb-6 md:mb-24">
            <div>
              <div className="tag text-accent">INQUIRY — 05</div>
              <h2 className="mt-3 font-sans font-extrabold text-hero text-ink max-w-[20ch]">
                같은 호기심이라면,
                <br />
                <span className="text-accent">짧은 메일 한 통</span>으로 충분합니다.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-7">
              <p className="font-serif text-[1.15rem] leading-[1.85] text-ink-soft max-w-[50ch] md:text-[1.22rem]">
                우리는 모든 병원과 일하지 않습니다. 시장과 환자에 대한 같은 호기심을
                가진 곳과만 시작합니다. 어디서 막혔는지, 어떤 5년을 그리고 싶은지 — 한
                문단이면 됩니다.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="mailto:hello@glomax.kr" className="cta-btn">
                  hello@glomax.kr <span className="arrow" />
                </a>
                <Link href="/perspective" className="cta-btn cta-btn--ghost">
                  먼저 글부터 읽기
                </Link>
              </div>
            </div>

            <dl className="col-span-12 grid grid-cols-2 gap-y-8 md:col-span-4 md:col-start-9">
              {[
                { k: "주소", v: "서울 (사전 예약 응대)" },
                { k: "응대 시간", v: "평일 10:00 — 18:00 KST" },
                { k: "프로젝트", v: "동시 진행 최대 4건" },
                { k: "최소 동행", v: "12개월부터" }
              ].map((row) => (
                <div key={row.k} className="col-span-2 border-t border-paper-line pt-4">
                  <dt className="mono text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                    {row.k}
                  </dt>
                  <dd className="mt-2 text-[0.98rem] text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
