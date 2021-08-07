/* eslint-disable react/jsx-key */
import React from "react";
import Image from "../Image";
import Carousel from "./Carousel";
import { Range } from "core/utils";

const TEST_IMAGE =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const Slide = (props) => {
  return (
    <Carousel.Item hasSpace {...props}>
      <Image alt="test-image" src={TEST_IMAGE} height={200} width={400} />
    </Carousel.Item>
  );
};

const NewsCarousel = (props) => {
  const slides = Range(6).map((_, i) => <Slide key={i} />);

  return (
    <Carousel
      slides={slides}
      visibleSlides={3}
      interval={3000}
      isPlaying
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
