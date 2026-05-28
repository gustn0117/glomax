import { ReactNode } from "react";

type Props = {
  eyebrow: string;        // e.g. "SECTION 02 · PERSPECTIVE"
  side?: string;          // small italic side label, e.g. "Four readings"
  title: ReactNode;       // headline (can include accent <span>)
  lede?: ReactNode;
  note?: ReactNode;       // small under-lede line (e.g. "공개 정보")
  bgPhoto: string;        // hero photo url
};

export default function PageHero({ eyebrow, side, title, lede, note, bgPhoto }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-paper pb-20 text-ink md:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgPhoto}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover photo-in photo-soft"
        />
        <div className="absolute inset-0 veil-airy" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pt-36 md:px-10 md:pt-44">
        <div className="flex items-baseline justify-between border-b border-paper-line pb-4">
          <div className="tag text-accent">{eyebrow}</div>
          {side && (
            <div className="display hidden text-[0.85rem] italic text-ink-muted md:block">
              <em>{side}</em>
            </div>
          )}
        </div>

        <h1 className="mt-10 font-sans font-extrabold text-hero text-ink leading-[1.05] max-w-[24ch] md:mt-14 md:text-[3.6rem]">
          {title}
        </h1>

        {lede && (
          <p className="mt-8 max-w-[52ch] font-serif text-[1.08rem] leading-[1.85] text-ink-soft md:mt-10 md:text-[1.18rem]">
            {lede}
          </p>
        )}
        {note && (
          <p className="mono mt-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
