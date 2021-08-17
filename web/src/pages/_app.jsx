import "../../styles/globals.css";
import { ThemeProvider } from "core/providers";
import { Navbar, Footer } from "core/components";
import { MainLayout } from "core/layouts";

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
