/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { Box } from "@chakra-ui/react";

import { useTheme } from "core/hooks";
import { Range } from "core/utils";

import MOCKED_GRAPH from "public/graph1.png";
import { Card } from "core/components";

const Slide = (props) => {
  const { colors } = useTheme();

  return (
    <Carousel.Item {...props}>
      <Card
        header={() => (
          <Card.TextHeader
            bg={colors.gray}
            padding={4}
            bold
            fontSize={30}
            fontColor={colors.grayStrong}
            textAlign="center"
          >
            Cursos
          </Card.TextHeader>
        )}
        mx={4}
      >
        <Image src={MOCKED_GRAPH} alt="graph" />
      </Card>
    </Carousel.Item>
  );
};

const ChartsCarousel = (props) => {
  const slides = Range().map((_, i) => <Slide key={i} />);

  return (
    <Carousel
      slides={slides}
      {...props}
      backButtonIcon={({ tintColor }) => (
        <Carousel.Button tintColor={tintColor} direction="back" />
      )}
      forwardButtonIcon={({ tintColor }) => (
        <Carousel.Button tintColor={tintColor} direction="forward" />
      )}
    />
  );
};

export default ChartsCarousel;
