import React from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/react";

import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Logo isDarkMode />
        </Stack>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Universidade de Pernambuco. Todos os
          direitos reservados. reservados.
        </Text>
        <Text fontSize="10">
          Baseado no Modelo para Observatório de Projetos.{" "}
          <Link href="https://sol.sbc.org.br/index.php/cbsoft_estendido/article/download/7654/7531/">
            GP2, Cin-UFPE
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
