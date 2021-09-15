import React, { useEffect } from "react";

import { usePostRequest, useTheme } from "core/hooks";
import { Doughnut } from "react-chartjs-2";

import Card from "../Card/Card";
import Carousel from "./Carousel";

const COURSES = [
  "Ciências Biológicas",
  "Computação",
  "Eng. de Software",
  "Geografia",
  "História",
  "Letras",
  "Matemática",
  "Pedagogia",
  "Administração",
  "Odontologia",
  "Direito",
  "Medicina",
  "Psicologia",
];
const TITLES = [
  "Quantidade de projetos por curso",
  "Quantidade de projetos em andamento",
  "Quantidade de projetos concluídos",
];

const getData = (infos) => ({
  labels: COURSES,
  datasets: [
    {
      label: "#",
      data: infos ?? [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(27, 150, 40, 0.2)",
        "rgba(25, 125, 252, 0.2)",
        "rgba(50, 125, 252, 0.2)",
        "rgba(56, 15, 252, 0.2)",
        "rgba(250, 100, 253, 0.2)",
        "rgba(210, 40, 170, 0.2)",
        "rgba(50, 60, 180, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(27, 150, 40, 1)",
        "rgba(25, 125, 252, 1)",
        "rgba(50, 125, 252, 1)",
        "rgba(56, 15, 252, 1)",
        "rgba(250, 100, 253, 1)",
        "rgba(210, 40, 170, 1)",
        "rgba(50, 60, 180, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const Slide = ({ title, ...props }) => {
  const { colors } = useTheme();
  const {
    mutate: requestInfos,
    data: response,
    isSuccess,
  } = usePostRequest("/graphics/courses");

  const chartInfos = response?.data?.data ?? [];

  const returnTitle = {
    ["Quantidade de projetos por curso"]: "AllProjects",
    ["Quantidade de projetos em andamento"]: "InProgress",
    ["Quantidade de projetos concluídos"]: "Finished",
  }[title];

  const dataFiltered = chartInfos.map(
    (chartElement) => chartElement[returnTitle]
  );

  useEffect(() => {
    if (isSuccess) {
      return;
    }
    requestInfos({ courseNames: COURSES });
    return;
  }, [isSuccess, requestInfos]);

  const data = getData(dataFiltered);

  return (
    <Carousel.Item {...props}>
      <Card
        bg={colors.background}
        boxShadow={null}
        header={() => (
          <Card.TextHeader
            padding={4}
            bg={colors.background}
            bold
            fontSize={25}
            fontColor={colors.grayStrong}
            textAlign="center"
          >
            {title}
          </Card.TextHeader>
        )}
        mx={4}
      >
        <Doughnut
          data={data}
          width={"100%"}
          height="300px"
          options={{ maintainAspectRatio: false }}
        />
      </Card>
    </Carousel.Item>
  );
};

const ChartsCarousel = (props) => {
  const slides = TITLES.map((title, i) => <Slide title={title} key={`${i}`} />);

  return (
    <Carousel
      height={285}
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
