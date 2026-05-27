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
        soft: "#f4f3ee",
        warm: "#f8f5ed",
        cream: "#efe9dc",
        line: "#d8d4ca",
        lineStrong: "#b4afa1"
      },
      ink: {
        DEFAULT: "#0e1117",
        soft: "#2c2f37",
        muted: "#5a5f6a",
        faint: "#8a8f99",
        ghost: "#b8bbc2"
      },
      accent: {
        DEFAULT: "#1d6b4f",
        deep: "#114a37",
        sky: "#2f8a68",
        glow: "rgba(29, 107, 79, 0.08)"
      },
      mark: "#1d6b4f"
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
      display: ["var(--font-display)", "Fraunces", "Noto Serif KR", "serif"],
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
        "mega": ["clamp(2.6rem, 6.6vw, 5.6rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "manifesto": ["clamp(1.9rem, 4.8vw, 4rem)", { lineHeight: "1.18", letterSpacing: "-0.018em" }],
        "hero": ["clamp(2rem, 4.6vw, 3.8rem)", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
        "h1": ["clamp(1.7rem, 3vw, 2.6rem)", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        "h2": ["clamp(1.3rem, 2vw, 1.8rem)", { lineHeight: "1.25", letterSpacing: "-0.012em" }],
        "lede": ["clamp(1rem, 1.3vw, 1.18rem)", { lineHeight: "1.65" }],
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
