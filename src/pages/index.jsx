import React from "react";
import { Grid, GridItem, Flex, HStack, Spinner, Text, Box } from "@chakra-ui/react";

import { Carousel, Card } from "core/components";
import { ROLES } from "core/utils/constants";
import { useGetRequest } from "core/hooks";

const CARD_HEADER_DEFAULT = 40;

const HomePage = () => {
  const { data: response } = useGetRequest("/graphics/projects");
  const { data } = response ?? {};
  const { data: projectsInfos } = data ?? {};
  const { AllProjects, InProgress, Finished } = projectsInfos ?? {};

  const Loading = () => {
    return <Spinner size="md" />;
  };

  return (
    <Grid templateRows="0.5fr 2fr">
      <GridItem>
        <Flex flex={1} flexDirection="column" justifyItems="center">
          <Text fontSize="3xl" fontWeight="bold" mb="4">
            Notícias em destaque
          </Text>
          <Carousel.News height="200" />
        </Flex>
      </GridItem>
      <GridItem py="2">
        <HStack>
          <Card
            header={() => (
              <Card.TextHeader fontColor="grayMedium" bold>
                Todos
              </Card.TextHeader>
            )}
            mb={4}
            height={CARD_HEADER_DEFAULT}>
            <Card.TextBody> {AllProjects ?? <Loading />} </Card.TextBody>
          </Card>
          <Card
            header={() => (
              <Card.TextHeader fontColor="grayMedium" bold>
                Em andamento
              </Card.TextHeader>
            )}
            mb={4}
            height={CARD_HEADER_DEFAULT}>
            <Card.TextBody> {InProgress ?? <Loading />} </Card.TextBody>
          </Card>
          <Card
            header={() => (
              <Card.TextHeader fontColor="grayMedium" bold>
                Concluídos
              </Card.TextHeader>
            )}
            mb={4}
            height={CARD_HEADER_DEFAULT}>
            <Card.TextBody> {Finished ?? <Loading />} </Card.TextBody>
          </Card>
        </HStack>
        <Box>
          <Carousel.Charts />
        </Box>
      </GridItem>
    </Grid>
  );
};

HomePage.configs = {
  pageTitle: "Página inicial",
  hasUserWidget: true,
  role: ROLES.NORMAL_USER,
};

export default HomePage;
