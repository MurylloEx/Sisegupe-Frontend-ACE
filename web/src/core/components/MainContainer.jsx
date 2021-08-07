import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import { UserWidget } from "core/components";

const MainContainer = ({ children }) => {
  const { colors } = useTheme();
  return (
    <>
      <Grid
        templateColumns="1fr 2fr"
        bg={colors.background}
        width="-moz-max-content"
        p={10}
      >
        <UserWidget />
        <GridItem width="-moz-max-content">{children}</GridItem>
      </Grid>
    </>
  );
};

export default MainContainer;
