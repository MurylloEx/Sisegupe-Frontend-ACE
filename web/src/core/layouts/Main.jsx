import React from "react";
import Head from "next/head";
import { Grid, GridItem } from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import { UserWidget } from "core/components";
/**
 *
 * @param {{children: React.ReactNode}} props
 * @returns JSX.Element
 */
const MainLayout = ({ children }) => {
  const { colors } = useTheme();
  const { type } = children;
  const { pageTitle } = type ?? {};

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
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
