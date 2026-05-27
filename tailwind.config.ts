import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "820px",
      lg: "1100px",
      xl: "1400px",
      "2xl": "1600px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      paper: {
        DEFAULT: "#ffffff",
        soft: "#f5f5f7",
        warm: "#fafaf8",
        line: "#e6e7eb",
        lineStrong: "#cfd1d6"
      },
      ink: {
        DEFAULT: "#0e1117",
        soft: "#2c2f37",
        muted: "#5a5f6a",
        faint: "#8a8f99",
        ghost: "#b8bbc2"
      },
      accent: {
        DEFAULT: "#1d4ed8",
        deep: "#173bb3",
        sky: "#3a72e8",
        glow: "rgba(29, 78, 216, 0.08)"
      },
      mark: "#c2410c"
    },
    fontFamily: {
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
      serif: ["var(--font-serif)", "Noto Serif KR", "serif"],
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
        "mega": ["clamp(3.8rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        "hero": ["clamp(2.8rem, 7vw, 6rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "h1": ["clamp(2.1rem, 4.4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.028em" }],
        "h2": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
        "lede": ["clamp(1.05rem, 1.4vw, 1.25rem)", { lineHeight: "1.65" }],
        "body": ["1.0125rem", { lineHeight: "1.7" }],
        "tag": ["0.7rem", { lineHeight: "1.4", letterSpacing: "0.22em" }]
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.3em"
      },
      maxWidth: {
        prose: "62ch",
        narrow: "44ch"
      },
      transitionTimingFunction: {
        precise: "cubic-bezier(0.2, 0.7, 0.2, 1)"
      }
    }
  },
  plugins: []
};

export default config;
