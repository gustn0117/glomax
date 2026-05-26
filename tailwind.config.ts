import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "820px",
      lg: "1100px",
      xl: "1400px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      paper: "#fafaf9",
      ink: {
        DEFAULT: "#161618",
        soft: "#34343a",
        muted: "#6c6c74",
        faint: "#a1a1aa"
      },
      line: {
        DEFAULT: "#d6d6d8",
        soft: "#ececee",
        strong: "#9a9aa0"
      },
      mark: "#a51d22",
      navy: "#0c2a4d"
    },
    fontFamily: {
      serif: ["var(--font-serif)", "Noto Serif KR", "Source Serif Pro", "serif"],
      sans: [
        "Pretendard Variable",
        "Pretendard",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Apple SD Gothic Neo",
        "Noto Sans KR",
        "sans-serif"
      ],
      mono: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace"
      ]
    },
    extend: {
      fontSize: {
        "cover": ["clamp(3.4rem, 9vw, 7.2rem)", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "h1": ["clamp(2.1rem, 4.4vw, 3.3rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
        "lede": ["clamp(1.12rem, 1.5vw, 1.32rem)", { lineHeight: "1.7" }],
        "body": ["1.0375rem", { lineHeight: "1.82" }],
        "fine": ["0.86rem", { lineHeight: "1.55" }],
        "meta": ["0.72rem", { lineHeight: "1.45", letterSpacing: "0.16em" }],
        "tag": ["0.68rem", { lineHeight: "1.4", letterSpacing: "0.22em" }]
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.3em"
      },
      maxWidth: {
        prose: "62ch",
        narrow: "44ch"
      }
    }
  },
  plugins: []
};

export default config;
