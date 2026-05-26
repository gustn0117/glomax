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
      black: "#0a0a0a",
      ink: {
        DEFAULT: "#0a0a0a",
        soft: "#3d3d3d",
        muted: "#737373",
        faint: "#a3a3a3"
      },
      line: {
        DEFAULT: "#e7e7e7",
        soft: "#f0f0f0",
        strong: "#cfcfcf"
      },
      surface: {
        DEFAULT: "#ffffff",
        muted: "#f7f7f5"
      },
      accent: {
        DEFAULT: "#1a3a5c",
        ink: "#0c1e34"
      },
      mark: "#b1361a"
    },
    fontFamily: {
      serif: ["var(--font-serif)", "Noto Serif KR", "serif"],
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
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
    },
    extend: {
      fontSize: {
        "display-0": ["clamp(3rem, 9vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-1": ["clamp(2.4rem, 6.4vw, 4.8rem)", { lineHeight: "1.04", letterSpacing: "-0.028em" }],
        "display-2": ["clamp(1.9rem, 4.2vw, 3.1rem)", { lineHeight: "1.12", letterSpacing: "-0.018em" }],
        "lede": ["clamp(1.05rem, 1.5vw, 1.28rem)", { lineHeight: "1.65" }],
        "body": ["1.0375rem", { lineHeight: "1.82" }],
        "meta": ["0.74rem", { lineHeight: "1.4", letterSpacing: "0.18em" }]
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.3em"
      },
      maxWidth: {
        prose: "60ch",
        reader: "34rem"
      }
    }
  },
  plugins: []
};

export default config;
