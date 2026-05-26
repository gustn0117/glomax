import Link from "next/link";

const figure1 =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── COVER ───────────────────────── */}
      <section className="border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-12">
          {/* Document strip */}
          <div className="grid grid-cols-12 items-baseline gap-4 border-b border-ink pb-4 rise rise-1">
            <div className="col-span-6 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink">
              GLOMAX / REPORT
            </div>
            <div className="col-span-6 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
              No. 01 · 2026
            </div>
            <div className="col-span-12 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
              FOR PUBLIC RELEASE
            </div>
            <div className="col-span-12 md:col-span-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted md:text-right">
              SEOUL, KR
            </div>
          </div>

          {/* Title block */}
          <div className="grid grid-cols-12 gap-6 pt-14 md:pt-24">
            <div className="col-span-12 md:col-span-8">
              <div className="mono text-[0.7rem] uppercase tracking-[0.22em] text-mark rise rise-1">
                Subject —
              </div>
              <h1 className="mt-5 font-sans font-semibold text-cover text-ink rise rise-2">
                병원 마케팅의
                <br />
                구조적 해석.
              </h1>
              <p className="mt-8 max-w-[42rem] font-serif text-[1.15rem] leading-relaxed text-ink-soft md:text-[1.32rem] rise rise-3">
                A strategic reading of hospital marketing in the post-search era —
                <span className="text-ink-muted">
                  {" "}why the next decade of growth will be decided by interpretation,
                  not advertising.
                </span>
              </p>
            </div>

            {/* Cover figure (small, captioned) */}
            <figure className="col-span-12 md:col-span-4 md:col-start-9 md:self-end rise rise-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={figure1}
                  alt="유리 외장 마천루의 로우앵글 — 신뢰의 구조에 대한 시각적 은유"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="caption mt-3 flex items-baseline justify-between">
                <span>Fig. 01</span>
                <span className="normal-case tracking-normal text-[0.78rem] text-ink-muted">
                  신뢰의 구조 / Trust as architecture
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Bibliographic block (bottom of cover) */}
          <dl className="mt-16 grid grid-cols-12 gap-x-4 gap-y-4 border-t border-line pt-6 md:mt-24">
            {[
              { k: "발행", v: "글로맥스 (GLOMAX)" },
              { k: "필자", v: "대표 — 글로맥스" },
              { k: "발행일", v: "2026 · 05 · 27" },
              { k: "분야", v: "병원 마케팅 · 브랜딩" },
              { k: "수신", v: "병원 경영자 · 의사" },
              { k: "분량", v: "24 PAGES" }
            ].map((row) => (
              <div key={row.k} className="col-span-6 md:col-span-2">
                <dt className="mono text-[0.66rem] uppercase tracking-[0.22em] text-ink-muted">
                  {row.k}
                </dt>
                <dd className="mt-2 text-[0.94rem] text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────────────── 0.0 PREAMBLE ───────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="section-no">§ 0.0 — Preamble</div>
              <div className="mt-2 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                서문
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <p className="font-serif text-[1.25rem] leading-[1.7] text-ink md:text-[1.4rem]">
                글로맥스는 광고를 집행하는 회사가 아닙니다. 우리는 한 병원의{" "}
                <span className="text-mark">5년을 보고</span>, 그 위에 한 달의 캠페인을
                얹습니다. 이 문서는 우리가 시장을 어떻게 읽고, 어떤 방식으로 일하는지에
                대한 짧은 진술입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 1.0 시대 진단 ───────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            {/* Section header */}
            <div className="col-span-12 md:col-span-3">
              <div className="section-no">§ 1.0</div>
              <h2 className="mt-3 font-sans font-semibold text-h1 text-ink leading-[1.05]">
                시대 진단
              </h2>
              <div className="mt-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                Diagnosis of the Era
              </div>

              <div className="mt-10 hidden md:block marginalia max-w-[14rem]">
                <span className="text-mark">¹</span> 광고 비용 대비 효율은 2019년 대비
                약 38% 하락 (자체 추산, 2024년 기준).
                <br />
                <br />
                <span className="text-mark">²</span> AI 답변형 검색의 점유율은 2024년
                도입 이후 12개월 만에 27%를 넘어섬.
              </div>
            </div>

            {/* Body */}
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h3 className="font-sans font-semibold text-h2 text-ink">
                검색은 끝났고, 해석이 시작되었다.
              </h3>

              <div className="reader mt-7 max-w-prose">
                <p>
                  10년간 의료 광고의 표준은 분명했습니다. 키워드, 노출, 클릭, 그리고
                  상담. 이 직선의 끝에 매출이 있다고 믿었고, 대부분의 대행사가 같은 도구를
                  같은 방식으로 사용했습니다
                  <sup className="fn-ref">¹</sup>. 글로맥스는 그 시기에 시장에 들어왔지만,
                  같은 길을 따라가지 않았습니다.
                </p>
                <p>
                  AI 검색이 답을 직접 정리해주는 시대에는<sup className="fn-ref">²</sup>,
                  환자가 만나는 정보의 입자가 달라집니다. 광고 한 줄이 아니라, 병원이
                  쌓아온 글의 톤, 사진의 정돈도, 후기의 결, 그리고 홈페이지의 마지막 한
                  화면이 모여 한 번에 해석됩니다.
                </p>
                <p>
                  그래서 우리는 트래픽을 자랑하지 않습니다. 노출 수를 보고하지 않습니다.
                  대신 물어봅니다. <span className="text-mark">이 병원의 5년 뒤를 어떻게
                  그릴 것인가.</span> 거기에서 오늘의 한 줄이 나옵니다.
                </p>
              </div>

              {/* Inline data table */}
              <figure className="mt-12">
                <figcaption className="caption mb-3">
                  Tab. 01 — 환자 의사결정 경로의 변화 / 2014 → 2026
                </figcaption>
                <table className="report">
                  <thead>
                    <tr>
                      <th className="w-[14%]">YEAR</th>
                      <th className="w-[36%]">검색 첫 화면</th>
                      <th className="w-[36%]">결정에 쓰는 시간</th>
                      <th className="w-[14%] text-right">광고 비중</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="col-no">2014</td>
                      <td>키워드 검색 / 상위 노출</td>
                      <td>약 1.4일</td>
                      <td className="col-no text-right">71%</td>
                    </tr>
                    <tr>
                      <td className="col-no">2020</td>
                      <td>키워드 + 블로그 + 카페 후기</td>
                      <td>약 3.6일</td>
                      <td className="col-no text-right">52%</td>
                    </tr>
                    <tr>
                      <td className="col-no">2026</td>
                      <td>
                        AI 답변 요약 + 후기 + <em className="not-italic text-mark">홈페이지</em>
                      </td>
                      <td>약 7.2일</td>
                      <td className="col-no text-right">23%</td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 2.0 우리의 방식 ───────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="section-no">§ 2.0</div>
              <h2 className="mt-3 font-sans font-semibold text-h1 text-ink leading-[1.05]">
                우리의 방식
              </h2>
              <div className="mt-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                Operating Principles
              </div>

              <p className="mt-8 max-w-[18rem] text-[0.95rem] leading-7 text-ink-muted">
                약속의 문장은 짧습니다. 지키는 일은 매일의 결정에서 일어납니다. 한 병원과
                일하는 방식의 토대.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <table className="report">
                <thead>
                  <tr>
                    <th className="w-[8%]">CL.</th>
                    <th className="w-[36%]">원칙</th>
                    <th>해설</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-no">§ 2.1</td>
                    <td>
                      <div className="font-sans font-semibold text-ink text-[1.05rem]">
                        광고가 아니라 구조를 본다.
                      </div>
                      <div className="mt-1 mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
                        Structure over campaign
                      </div>
                    </td>
                    <td className="font-serif text-ink-soft text-[0.98rem] leading-[1.78]">
                      한 달의 클릭 수보다 한 해의 환자 동선을 봅니다. 키워드의 단가보다
                      진료 영역 전체의 포지셔닝을 먼저 짭니다. 광고 운영은 그 구조
                      위에서만 의미가 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <td className="col-no">§ 2.2</td>
                    <td>
                      <div className="font-sans font-semibold text-ink text-[1.05rem]">
                        신뢰는 시간 위에 쌓인다.
                      </div>
                      <div className="mt-1 mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
                        Trust accrues over time
                      </div>
                    </td>
                    <td className="font-serif text-ink-soft text-[0.98rem] leading-[1.78]">
                      리뷰는 양으로 만들 수 없습니다. 후기 한 줄, 사진 한 장, 의사의 말 한
                      마디가 일관된 톤을 가질 때 환자는 안심합니다. 우리는 그 톤을 함께
                      만듭니다.
                    </td>
                  </tr>
                  <tr>
                    <td className="col-no">§ 2.3</td>
                    <td>
                      <div className="font-sans font-semibold text-ink text-[1.05rem]">
                        지역을 가볍게 보지 않는다.
                      </div>
                      <div className="mt-1 mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
                        Locality is not a footnote
                      </div>
                    </td>
                    <td className="font-serif text-ink-soft text-[0.98rem] leading-[1.78]">
                      지하철 두 정거장 안에서 일어나는 결정이 한 병원의 일년을 만듭니다.
                      우리는 그 거리의 동네에서 어떤 말이 통하는지를 먼저 듣습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 3.0 사례 인덱스 ───────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="section-no">§ 3.0</div>
              <h2 className="mt-3 font-sans font-semibold text-h1 text-ink leading-[1.05]">
                이 호의 목차
              </h2>
              <div className="mt-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                Table of Contents
              </div>
              <p className="mt-8 max-w-[18rem] text-[0.95rem] leading-7 text-ink-muted">
                본 리포트의 후속 장(章)은 별도 문서로 제공됩니다. 본문에 인용된 모든
                사례는 동의를 받은 자료에 한합니다.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-8 md:col-start-5">
              {[
                {
                  no: "02",
                  href: "/perspective",
                  title: "우리가 보는 병원 마케팅",
                  sub: "왜 광고로는 더 이상 답이 안 나오는지 — 시장 해석 네 편.",
                  pages: "p. 04 — 09"
                },
                {
                  no: "03",
                  href: "/cases",
                  title: "사례 노트",
                  sub: "숫자가 아니라 맥락의 기록. 문제 / 전략 / 변화.",
                  pages: "p. 10 — 17"
                },
                {
                  no: "04",
                  href: "/founder",
                  title: "필자에 관하여",
                  sub: "왜 병원 마케팅인가. 어떤 병원과 일하고 싶은가.",
                  pages: "p. 18 — 21"
                },
                {
                  no: "05",
                  href: "/archive",
                  title: "참고 자료 / 아카이브",
                  sub: "외부 블로그 두 곳에 분산되어 있는 글 묶음.",
                  pages: "p. 22 — 24"
                }
              ].map((row, idx) => (
                <li
                  key={row.no}
                  className={`grid grid-cols-12 items-baseline gap-3 py-6 md:gap-6 ${
                    idx === 0
                      ? "border-y border-ink"
                      : "border-b border-line"
                  }`}
                >
                  <div className="col-span-2 md:col-span-1 mono text-[0.85rem] text-ink-muted">
                    {row.no}
                  </div>
                  <div className="col-span-10 md:col-span-8">
                    <Link href={row.href} className="link-rule font-sans font-semibold text-ink text-[1.15rem] md:text-[1.3rem]">
                      {row.title}
                    </Link>
                    <div className="mt-1.5 text-[0.94rem] text-ink-muted">{row.sub}</div>
                  </div>
                  <div className="col-span-12 md:col-span-3 mono text-[0.78rem] tracking-[0.12em] text-ink-muted md:text-right">
                    {row.pages}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4.0 COLOPHON ───────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="section-no">§ 4.0</div>
              <h2 className="mt-3 font-sans font-semibold text-h1 text-ink leading-[1.05]">
                발행 정보
              </h2>
              <div className="mt-3 mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                Colophon
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <div className="grid grid-cols-12 gap-8">
                {/* Portrait */}
                <figure className="col-span-12 sm:col-span-5 md:col-span-4">
                  <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden border border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/founder-portrait.jpg"
                      alt="글로맥스 대표 — 필자"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="caption mt-3 flex items-baseline justify-between max-w-[260px]">
                    <span>Fig. 02</span>
                    <span className="normal-case tracking-normal text-[0.78rem] text-ink-muted">
                      필자
                    </span>
                  </figcaption>
                </figure>

                {/* Bibliographic */}
                <dl className="col-span-12 sm:col-span-7 md:col-span-8 grid grid-cols-2 gap-x-6 gap-y-6">
                  {[
                    { k: "필자", v: "대표 — 글로맥스" },
                    { k: "편집", v: "글로맥스 편집부" },
                    { k: "발행기관", v: "글로맥스 (서울)" },
                    { k: "초판", v: "2026 · 05 · 27" },
                    { k: "분야", v: "병원 마케팅 / 브랜딩" },
                    { k: "방식", v: "소수 프로젝트제" },
                    { k: "문의", v: "hello@glomax.kr" },
                    { k: "응대", v: "평일 10:00 — 18:00" }
                  ].map((row) => (
                    <div key={row.k}>
                      <dt className="mono text-[0.66rem] uppercase tracking-[0.22em] text-ink-muted">
                        {row.k}
                      </dt>
                      <dd className="mt-1.5 text-[0.95rem] text-ink">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-12 max-w-prose font-serif text-[1.0625rem] leading-[1.82] text-ink-soft">
                본 문서는 어떤 광고 청탁의 대가 없이 자체적으로 발행되었습니다.
                인용·재배포는 발행자의 사전 서면 동의를 받아야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
