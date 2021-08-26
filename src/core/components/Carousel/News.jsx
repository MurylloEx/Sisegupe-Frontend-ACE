/* eslint-disable react/jsx-key */
import { Link } from "@chakra-ui/react";
import { DISABLED_DEFAULT_BG } from "core/utils/constants";
import React from "react";
import Image from "../Image";
import Carousel from "./Carousel";

const IMAGES = [
  {
    link: "http://www.upe.br/garanhuns/inscricoes-abertas-para-o-techday-upe/",
    imageLink: require("public/noticia1.JPG"),
  },
  {
    link: "http://www.upe.br/garanhuns/webinar-cidades-inteligentes-e-computacao-em-nuvem/",
    imageLink: require("public/noticia2.JPG"),
  },
  {
    link: "http://www.upe.br/garanhuns/2a-jornada-do-grupo-de-estudos-e-pesquisas-em-analise-de-discurso-pecheuxtiana-reler-discursos-hoje/",
    imageLink: require("public/noticia3.JPG"),
  },
  {
    link: "http://www.upe.br/garanhuns/14a-semana-do-patrimonio-cultural-de-pernambuco/",
    imageLink: require("public/noticia4.JPG"),
  },
  {
    link: "http://www.upe.br/garanhuns/seletiva-do-projeto-hackatruck-makerspace/",
    imageLink: require("public/noticia5.JPG"),
  },
  {
    link: "http://www.upe.br/garanhuns/inscricoes-abertas-para-o-iii-coneab-2/",
    imageLink: require("public/noticia6.JPG"),
  },
];

const Slide = ({ image, ...props }) => {
  const { imageLink, link } = image;

  return (
    <Carousel.Item hasSpace {...props}>
      <Link
        href={link}
        target="_blank"
        {...{
          _hover: DISABLED_DEFAULT_BG,
          _focus: DISABLED_DEFAULT_BG,
          _active: DISABLED_DEFAULT_BG,
        }}
      >
        <Image alt="test-image" src={imageLink} height={200} width={400} />
      </Link>
    </Carousel.Item>
  );
};

const NewsCarousel = (props) => {
  const slides = IMAGES.map((image, i) => <Slide image={image} key={i} />);

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
