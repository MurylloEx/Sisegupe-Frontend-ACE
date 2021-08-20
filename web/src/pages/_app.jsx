import "../../styles/globals.css";
import {
  HttpRequestProvider,
  ThemeProvider,
  UserProvider,
} from "core/providers";
import { Navbar, Footer } from "core/components";
import { MainLayout } from "core/layouts";

export default function MyApp({ Component, pageProps }) {
  return (
    <HttpRequestProvider>
      <UserProvider>
        <ThemeProvider>
          <Navbar />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Footer />
        </ThemeProvider>
      </UserProvider>
    </HttpRequestProvider>
  );
}
