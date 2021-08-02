import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "./core/providers";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
