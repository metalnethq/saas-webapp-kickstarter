import type { Config } from "tailwindcss";
import theme from "./theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@metalnethq/baremetal-ui/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bm_primary: theme.bm_primary,
        bm_secondary: theme.bm_secondary,
        bm_warning: theme.bm_warning,
        bm_success: theme.bm_success,
        bm_danger: theme.bm_danger,
        bm_info: theme.bm_info,
        bm_gray: theme.bm_gray,
        bm_light: theme.bm_light,
        bm_dark: theme.bm_dark,
        bm_primary_text: theme.bm_primary_text,
      },
    },
  },
  plugins: [],
};
export default config;
