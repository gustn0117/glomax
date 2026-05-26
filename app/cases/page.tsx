import Link from "next/link";

export const metadata = {
  title: "사례 노트",
  description:
    "숫자 자랑이 아니라 맥락의 기록. 글로맥스가 함께한 병원들의 문제 — 전략 — 변화를 길게 적습니다."
};

const cases = [
  {
    index: "Case 01",
    field: "수도권 · 정형외과",
    title: "‘잘 본다’는 평판은 있는데, 신환이 늘지 않던 5년차 정형외과.",
    problem:
      "지역에서 ‘선생님 솜씨가 좋다’는 평이 분명히 있었지만, 그 평이 검색 결과 위에 옮겨가지 못했다. 광고는 클릭률만 높고 상담으로 이어지지 않았다. 원장님은 매달 광고비가 늘어나는 것에 피로감을 느끼고 있었다.",
    move:
      "광고비를 30% 줄이고, 그 예산을 ‘이미 있는 신뢰’를 외부로 옮기는 일에 썼다. 회복 사례 인터뷰 12편, 의사의 진료 철학 페이지, 보호자 후기 정돈—이 셋이 한 톤으로 묶이도록 홈페이지 본문을 다시 썼다. 광고 카피는 ‘잘 봐드린다’가 아니라 ‘오래 봐드린다’로 바꿨다.",
    shift:
      "신환 비중이 6개월에 걸쳐 1.4배, 1년 뒤 1.9배. 더 의미 있는 변화는 ‘추천으로 왔다’는 환자의 비율이 두 배가 되었다는 것. 광고가 아니라 신뢰가 자라기 시작했다는 신호."
  },
  {
    index: "Case 02",
    field: "지방 거점 · 산부인과",
    title: "‘지역 1등’이라고 부르기엔 너무 조용했던 거점 산부인과.",
    problem:
      "지역에서 30년 가까이 운영된 산부인과. 어머니 세대에게는 이미 신뢰가 있지만, 20~30대 젊은 부부에게는 ‘오래된 곳’이라는 인상이 먼저 떠올랐다. 후기는 적지 않은데 정돈되어 있지 않았다.",
    move:
      "‘새로 보이게’ 하지 않았다. 대신 ‘오래된 만큼의 시간을 길게 보여주는’ 방향으로 리브랜딩. 30년의 분만 기록, 의사들의 세대 교차, 동네 어머니 세대의 이야기를 모아 한 권의 매거진 형식 홈페이지로 다시 짰다.",
    shift:
      "젊은 부부의 초진 비중이 9개월 안에 2.3배. ‘오래된’이 아니라 ‘오래 봐온’으로 단어가 바뀌었다. 광고를 새로 하지 않았는데도, 검색 유입이 늘었다."
  },
  {
    index: "Case 03",
    field: "서울 · 피부과",
    title: "‘가격을 내릴까’를 고민하던 강남 한복판의 피부과.",
    problem:
      "동일 상권에 50개가 넘는 경쟁 피부과. 가격 비교 사이트의 상위 노출이 신환의 첫 화면을 차지하고 있었다. 원장은 ‘우리도 가격으로 갈 수밖에 없는가’를 두고 흔들리고 있었다.",
    move:
      "가격이 아니라 ‘진료 시간의 길이’를 차별점으로 선언. 첫 상담을 평균 22분으로 제도화하고, 그 22분 동안 무엇이 일어나는지를 글과 사진으로 정직하게 공개. 광고 카피의 무게중심을 ‘싸다’에서 ‘오래 봐드린다’로 옮겼다.",
    shift:
      "재방문률이 3개월 만에 19%p 상승. 객단가가 오히려 올랐다. ‘가격’이 아니라 ‘시간’으로 이 병원을 떠올리는 환자가 늘었다."
  }
];

export default function CasesPage() {
  return (
    <>
      {/* PAGE MAST */}
      <section className="rule-bottom">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 pb-10 pt-12 md:px-10 md:pb-16 md:pt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">SECTION 03</div>
            <div className="text-meta uppercase tracking-wider2 text-ink-muted mt-2">
              CASE NOTES
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-serif text-display-1 text-ink">
              사례 노트. <br className="hidden md:block" />
              <span className="text-ink-soft">숫자가 아니라 </span>
              <em className="not-italic text-red-mark">맥락</em>
              <span className="text-ink-soft">.</span>
            </h1>
            <p className="reader mt-7 max-w-prose text-lede text-ink-soft">
              매출 그래프 하나로 보여지는 사례에는 흥미가 없습니다. 우리는 어떤 질문이 있었고,
              왜 그렇게 답했으며, 그 뒤로 무엇이 달라졌는지를 길게 적습니다.
            </p>
            <div className="mt-3 text-[0.85rem] text-ink-muted">
              병원의 동의 하에 일부 식별 정보를 제외하고 공개합니다.
            </div>
          </div>
        </div>
      </section>

      {/* CASE LIST */}
      <div>
        {cases.map((c, idx) => (
          <section key={c.index} className="rule-bottom">
            <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-14 md:px-10 md:py-24">
              <header className="col-span-12 md:col-span-3">
                <div className="sticky top-24">
                  <div className="fig-serif text-[2.6rem] leading-none text-ink-muted">
                    0{idx + 1}
                  </div>
                  <div className="text-meta uppercase tracking-wider2 text-ink mt-3">
                    {c.index}
                  </div>
                  <div className="mt-2 text-[0.92rem] text-ink-soft">{c.field}</div>
                  <div className="mt-6 hidden md:block">
                    <div className="dotline" />
                  </div>
                </div>
              </header>

              <div className="col-span-12 md:col-span-9 md:col-start-4">
                <h2 className="font-serif text-display-2 text-ink">{c.title}</h2>

                <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-4">
                  <div className="col-span-12 md:col-span-2">
                    <div className="text-meta uppercase tracking-wider2 text-red-mark">문제</div>
                  </div>
                  <p className="col-span-12 text-body leading-[1.85] text-ink md:col-span-10">
                    {c.problem}
                  </p>

                  <div className="col-span-12 mt-2">
                    <div className="dotline" />
                  </div>

                  <div className="col-span-12 md:col-span-2">
                    <div className="text-meta uppercase tracking-wider2 text-red-mark">전략</div>
                  </div>
                  <p className="col-span-12 text-body leading-[1.85] text-ink md:col-span-10">
                    {c.move}
                  </p>

                  <div className="col-span-12 mt-2">
                    <div className="dotline" />
                  </div>

                  <div className="col-span-12 md:col-span-2">
                    <div className="text-meta uppercase tracking-wider2 text-red-mark">변화</div>
                  </div>
                  <p className="col-span-12 text-body leading-[1.85] text-ink md:col-span-10">
                    {c.shift}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* END NOTE */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-16 md:px-10 md:py-24">
          <div className="col-span-12 md:col-span-3">
            <div className="text-meta uppercase tracking-wider2 text-ink-muted">END NOTE</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.6rem] leading-snug text-ink md:text-[2rem]">
              사례는 자랑이 아니라 기록입니다. 자랑을 위한 기록은 다음 결정에 도움이 되지 않습니다.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <Link href="/perspective" className="link-rule font-serif text-[1.05rem] text-ink">
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
