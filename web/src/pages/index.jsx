import React from "react";
import { Box, Button, Container, Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid h="100vh" templateColumns="1fr 2fr">
      <GridItem bg="tomato"></GridItem>
      <Grid h="100%" templateRows="1fr 2fr" bg="papayawhip">
        <GridItem bg="blue"></GridItem>
        <GridItem bg="red"></GridItem>
      </Grid>
    </Grid>
  );
};

HomePage.pageTitle = "Página inicial";

export default HomePage;
