import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

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
          <Logo />
        </Stack>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Universidade de Pernambuco. Todos os
          direitos reservados. reservados.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
