import React from "react";
import { Grid, GridItem, Avatar, Flex } from "@chakra-ui/react";
import { useTheme } from "core/hooks";

const HomePage = () => {
  const { colors } = useTheme();
  return (
    <Grid h="100vh" templateColumns="1fr 2fr" bg={colors.background}>
      <GridItem>
        <Flex flex={1} justifyContent="center" height="100%" p={4}>
          <Avatar name="Luiz Gustavo" size="xl" />
        </Flex>
      </GridItem>
      <Grid h="100%" templateRows="1fr 2fr" bg="papayawhip">
        <GridItem bg="blue"></GridItem>
        <GridItem bg="red"></GridItem>
      </Grid>
    </Grid>
  );
};

HomePage.pageTitle = "Página inicial";

export default HomePage;
