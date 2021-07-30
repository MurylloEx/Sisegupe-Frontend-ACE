import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
