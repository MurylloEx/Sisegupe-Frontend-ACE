import React from "react";
import { Grid, GridItem, Flex, Stack } from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import { Carousel, Card, UserWidget } from "core/components";

import MOCKED_GRAPH from "public/graph1.png";

const CARD_HEADER_DEFAULT = 40;

const HomePage = () => {
  const { colors } = useTheme();

  return (
    <Grid templateRows="0.5fr 2fr">
      <GridItem>
        <Flex flex={1} flexDirection="column" justifyItems="center">
          <Carousel.News height="200" />
        </Flex>
      </GridItem>
      <GridItem>
        <Grid templateColumns="1fr 2fr">
          <GridItem>
            <Stack>
              <Card
                header={() => (
                  <Card.TextHeader fontColor={colors.grayMedium} bold>
                    Todos
                  </Card.TextHeader>
                )}
                mb={4}
                height={CARD_HEADER_DEFAULT}
              >
                <Card.TextBody> 232 </Card.TextBody>
              </Card>
              <Card
                header={() => (
                  <Card.TextHeader fontColor={colors.grayMedium} bold>
                    Em andamento
                  </Card.TextHeader>
                )}
                mb={4}
                height={CARD_HEADER_DEFAULT}
              >
                <Card.TextBody> 92 </Card.TextBody>
              </Card>
              <Card
                header={() => (
                  <Card.TextHeader fontColor={colors.grayMedium} bold>
                    Concluídos
                  </Card.TextHeader>
                )}
                mb={4}
                height={CARD_HEADER_DEFAULT}
              >
                <Card.TextBody> 140 </Card.TextBody>
              </Card>
            </Stack>
          </GridItem>
          <GridItem>
            <Carousel.Charts />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

HomePage.pageTitle = "Página inicial";

export default HomePage;
