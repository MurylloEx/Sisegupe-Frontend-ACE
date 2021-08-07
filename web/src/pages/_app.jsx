import "../../styles/globals.css";
import { ThemeProvider } from "core/providers";
import { Navbar } from "core/components";
import { Footer } from "core/components";
import { Text } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer>
        <Text>Hello</Text>
      </Footer>
    </ThemeProvider>
  );
}
