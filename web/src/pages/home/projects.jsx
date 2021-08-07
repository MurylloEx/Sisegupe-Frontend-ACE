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
} from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import { Carousel, Card, UserWidget } from "core/components";

import MOCKED_GRAPH from "public/graph1.png";

const CARD_HEADER_DEFAULT = 40;

const Projects = () => {
  const { colors } = useTheme();

  return (
    <Grid templateRows="0.5fr 2fr">
      <Text fontSize="2xl">Tela onde ficará os projetos</Text>
    </Grid>
  );
};

export default Projects;
