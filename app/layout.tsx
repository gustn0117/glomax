import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glomax.kr"),
  title: {
    default: "글로맥스 — 병원 성장의 해석가",
    template: "%s · 글로맥스"
  },
  description:
    "글로맥스는 광고를 집행하는 회사가 아니라, 병원의 성장을 해석하는 파트너입니다. AI 시대의 환자 행동, 신뢰의 구조, 지역의 침투를 함께 읽어냅니다.",
  openGraph: {
    title: "글로맥스 — 병원 성장의 해석가",
    description:
      "광고대행사가 아닌, 병원 성장의 해석가. AI 시대 환자 행동과 신뢰의 구조를 함께 읽습니다.",
    type: "website",
    locale: "ko_KR"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSerifKr.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
