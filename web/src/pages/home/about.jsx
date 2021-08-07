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

const About = () => {
  const { colors } = useTheme();

  return (
    <>
      <Grid
        templateColumns="1fr 2fr"
        bg={colors.background}
        width="-moz-max-content"
      >
        <UserWidget />
        <GridItem width="-moz-max-content">
          <Grid templateRows="0.5fr 2fr">
            <GridItem>
              <Flex
                flex={1}
                flexDirection="column"
                justifyItems="center"
                mt={10}
              >
                <Carousel.News height="200" />
              </Flex>
            </GridItem>
            <GridItem>
              <Grid templateColumns="1fr 2fr">
                <GridItem>
                  <Stack>
                    <Card
                      header={() => (
                        <Card.TextHeader fontColor={colors.blue} bold>
                          Todos
                        </Card.TextHeader>
                      )}
                      m={4}
                      height={CARD_HEADER_DEFAULT}
                    >
                      <Card.TextBody> 232 </Card.TextBody>
                    </Card>
                    <Card
                      header={() => (
                        <Card.TextHeader fontColor={colors.blue} bold>
                          Em andamento
                        </Card.TextHeader>
                      )}
                      m={4}
                      height={CARD_HEADER_DEFAULT}
                    >
                      <Card.TextBody> 92 </Card.TextBody>
                    </Card>
                    <Card
                      header={() => (
                        <Card.TextHeader fontColor={colors.blue} bold>
                          Concluídos
                        </Card.TextHeader>
                      )}
                      m={4}
                      height={CARD_HEADER_DEFAULT}
                    >
                      <Card.TextBody> 140 </Card.TextBody>
                    </Card>
                  </Stack>
                </GridItem>
                <GridItem>
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
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
