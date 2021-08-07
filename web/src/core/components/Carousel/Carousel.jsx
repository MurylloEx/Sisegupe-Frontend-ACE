import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Flex } from "@chakra-ui/react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

import { useTheme } from "../../hooks";
import NewsCarousel from "./NewsCarousel";
import ChartsCarousel from "./ChartsCarousel";
import CarouselButton from "./CarouselButton";

const CarouselComponent = ({
  width = 333,
  height = 200,
  slides = [],
  dragEnabled = false,
  backButtonIcon = (props) => <ArrowBackIos {...props} />,
  forwardButtonIcon = (props) => <ArrowForwardIos {...props} />,
  hasDotGroup = false,
  ...props
}) => {
  const { colors } = useTheme();

  const renderSlide = (children, index) => (
    <Slide index={index}>{children}</Slide>
  );

  if (!slides.length) {
    throw new Error(
      "Is necessary pass a array of slides to use this component"
    );
  }

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={slides.length}
      dragEnabled={dragEnabled}
      {...props}
    >
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Box px={4}>
          <ButtonBack>{backButtonIcon({ tintColor: colors.red })}</ButtonBack>
        </Box>

        <Box flex={1}>
          <Slider>{slides.map(renderSlide)}</Slider>
        </Box>

        <Box px={4}>
          <ButtonNext>
            {forwardButtonIcon({ tintColor: colors.red })}
          </ButtonNext>
        </Box>
      </Flex>
      {hasDotGroup && <DotGroup />}
    </CarouselProvider>
  );
};

CarouselComponent.News = NewsCarousel;
CarouselComponent.Charts = ChartsCarousel;
CarouselComponent.Button = CarouselButton;

export default CarouselComponent;
