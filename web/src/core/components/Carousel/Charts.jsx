import React from "react";

import { useTheme } from "core/hooks";
import { Range } from "core/utils";

import Card from "../Card/Card";
import Image from "../Image";
import Carousel from "./Carousel";

import MOCKED_GRAPH from "public/graph1.png";

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
        <Image src={MOCKED_GRAPH} alt="graph" height={800} />
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
