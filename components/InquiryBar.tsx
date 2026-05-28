"use client";

import { useState, FormEvent } from "react";

export default function InquiryBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 취급방침에 동의해주세요.");
      return;
    }
    if (!name || !phone) {
      alert("성함과 연락처는 필수입니다.");
      return;
    }
    const subject = encodeURIComponent("[GLOMAX] 신규 상담 문의");
    const body = encodeURIComponent(
      `성함: ${name}\n연락처: ${phone}\n병원/상호: ${clinic || "(미입력)"}\n\n— 본 문의는 글로맥스 홈페이지 하단 폼에서 전송되었습니다.`
    );
    window.location.href = `mailto:hello@glomax.kr?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-paper-line-strong bg-ink text-paper">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[1600px] flex-col items-stretch gap-2 px-4 py-3 md:flex-row md:items-center md:gap-3 md:px-8 md:py-3"
      >
        {/* Brand + intent */}
        <div className="flex items-center gap-3 md:shrink-0">
          <div className="font-sans font-bold text-[0.92rem] tracking-tight text-paper">
            GLOMAX
          </div>
          <div className="mono text-[0.66rem] uppercase tracking-[0.22em] text-paper/65">
            INQUIRY · 문의
          </div>
        </div>

        {/* Inputs */}
        <div className="grid flex-1 grid-cols-3 gap-2 md:gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="성함"
            required
            aria-label="성함"
            className="h-10 bg-paper/10 px-3 text-[0.92rem] text-paper placeholder:text-paper/50 outline-none ring-1 ring-paper/20 transition focus:ring-accent"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="연락처"
            required
            aria-label="연락처"
            className="h-10 bg-paper/10 px-3 text-[0.92rem] text-paper placeholder:text-paper/50 outline-none ring-1 ring-paper/20 transition focus:ring-accent"
          />
          <input
            type="text"
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            placeholder="병원 / 상호명"
            aria-label="병원 또는 상호명"
            className="h-10 bg-paper/10 px-3 text-[0.92rem] text-paper placeholder:text-paper/50 outline-none ring-1 ring-paper/20 transition focus:ring-accent"
          />
        </div>

        {/* Consent + submit */}
        <div className="flex items-center justify-between gap-3 md:shrink-0 md:justify-end">
          <label className="flex cursor-pointer items-center gap-2 text-[0.78rem] text-paper/85 select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-3.5 w-3.5 accent-accent"
              aria-label="개인정보 취급방침 동의"
            />
            <span>
              <span className="hidden md:inline">개인정보 취급방침 </span>동의
            </span>
          </label>

          <button
            type="submit"
            disabled={sent}
            className="group inline-flex h-10 items-center gap-2 bg-accent px-4 text-[0.88rem] font-semibold text-paper transition hover:bg-accent-deep disabled:opacity-60"
          >
            <span>{sent ? "전송됨" : "문의 보내기"}</span>
            <span className="mono text-paper/85 transition group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </form>
    </aside>
  );
}
