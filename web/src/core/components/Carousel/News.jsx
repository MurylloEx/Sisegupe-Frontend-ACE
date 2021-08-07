/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { Box } from "@chakra-ui/react";

const TEST_IMAGE =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const NewsCarousel = (props) => {
  const slides = [
    <Box mx={4}>
      <Image alt="test-image" src={TEST_IMAGE} height={200} width={400} />
    </Box>,
    <Box mx={4}>
      <Image alt="test-image" src={TEST_IMAGE} height={200} width={400} />
    </Box>,
    <Box mx={4}>
      <Image alt="test-image" src={TEST_IMAGE} height={200} width={400} />
    </Box>,
    <Box mx={4}>
      <Image alt="test-image" src={TEST_IMAGE} height={200} width={400} />
    </Box>,
  ];

  return (
    <Carousel
      slides={slides}
      visibleSlides={3}
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

export default NewsCarousel;
