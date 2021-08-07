import React from "react";
import Image from "next/image";
import {
  Grid,
  GridItem,
  Avatar,
  Flex,
  Text,
  Button,
  Box,
  Stack,
  Container,
} from "@chakra-ui/react";

import { useTheme } from "core/hooks";

const About = () => {
  const { colors } = useTheme();

  return (
    <Grid templateRows="0.5fr 2fr">
      <Text fontSize="2xl">Tela sobre o sistema</Text>
    </Grid>
  );
};

About.pageTitle = "Sobre";

export default About;
