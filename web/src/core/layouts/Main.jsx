import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import { UserWidget } from "core/components";

const MainLayout = ({ children }) => {
  const { colors } = useTheme();

  return (
    <>
      <Grid
        templateColumns="1fr 2fr"
        bg={colors.background}
        width="-moz-max-content"
        height="100vh"
        p={10}
      >
        <UserWidget />
        <GridItem width="-moz-max-content">{children}</GridItem>
      </Grid>
    </>
  );
};

export default MainLayout;