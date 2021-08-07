import "../../styles/globals.css";
import { ThemeProvider } from "core/providers";
import { Navbar } from "core/components";
import { MainLayout } from "core/layouts";
import { Footer } from "core/components";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </ThemeProvider>
  );
}
