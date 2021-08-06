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
import { NewsCarousel } from "home/components";
import { Card } from "core/components";

import MOCKED_GRAPH from "public/graph1.png";

const CARD_HEADER_DEFAULT = 40;

const CardHeaderWithText = ({
  children,
  fontColor,
  bold,
  textAlign,
  fontSize,
  ...props
}) => {
  return (
    <Box p={4} {...props}>
      <Text
        color={fontColor}
        textAlign={textAlign}
        style={bold && { fontWeight: "bold" }}
        fontSize={fontSize}
      >
        {children}
      </Text>
    </Box>
  );
};

const CardBodyText = ({
  children,
  bold = true,
  fontSize = 50,
  textAlign = "center",
  ...props
}) => {
  return (
    <Text
      textAlign={textAlign}
      fontSize={fontSize}
      style={bold && { fontWeight: "bold" }}
      {...props}
    >
      {children}
    </Text>
  );
};

const HomePage = () => {
  const { colors } = useTheme();

  return (
    <Grid templateColumns="1fr 2fr" bg={colors.background}>
      <GridItem>
        <Flex
          flex={1}
          flexDirection="column"
          alignItems="center"
          height="100%"
          mt="48"
          p={4}
        >
          <Avatar
            name="Luiz Gustavo"
            size="2xl"
            mb={4}
            bg={colors.red}
            color={colors.white}
          />
          <Text fontSize="2xl">Luiz Gustavo</Text>
          <Box mb="10" />
          <Button
            bg={colors.blue}
            color={colors.white}
            mb={4}
            width="50%"
            size="lg"
          >
            Meu Perfil
          </Button>
          <Button bg={colors.blue} color={colors.white} size="lg" width="50%">
            Meus Projetos
          </Button>
        </Flex>
      </GridItem>
      <Grid templateRows="0.5fr 2fr">
        <GridItem>
          <Flex flex={1} flexDirection="column" justifyItems="center" mt={10}>
            <NewsCarousel height="200" />
          </Flex>
        </GridItem>
        <GridItem>
          <Grid templateColumns="1fr 2fr">
            <GridItem>
              <Stack>
                <Card
                  header={() => (
                    <CardHeaderWithText fontColor={colors.blue} bold>
                      Todos
                    </CardHeaderWithText>
                  )}
                  m={4}
                  height={CARD_HEADER_DEFAULT}
                >
                  <CardBodyText> 232 </CardBodyText>
                </Card>
                <Card
                  header={() => (
                    <CardHeaderWithText fontColor={colors.blue} bold>
                      Em andamento
                    </CardHeaderWithText>
                  )}
                  m={4}
                  height={CARD_HEADER_DEFAULT}
                >
                  <CardBodyText> 92 </CardBodyText>
                </Card>
                <Card
                  header={() => (
                    <CardHeaderWithText fontColor={colors.blue} bold>
                      Concluídos
                    </CardHeaderWithText>
                  )}
                  m={4}
                  height={CARD_HEADER_DEFAULT}
                >
                  <CardBodyText> 140 </CardBodyText>
                </Card>
              </Stack>
            </GridItem>
            <GridItem>
              <Card
                header={() => (
                  <CardHeaderWithText
                    bg={colors.gray}
                    padding={4}
                    bold
                    fontSize={30}
                    fontColor={colors.grayStrong}
                    textAlign="center"
                  >
                    Cursos
                  </CardHeaderWithText>
                )}
                m={4}
              >
                <Image src={MOCKED_GRAPH} alt="graph" />
              </Card>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Grid>
  );
};

HomePage.pageTitle = "Página inicial";

export default HomePage;
