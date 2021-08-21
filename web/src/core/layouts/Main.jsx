import React from "react";
import Head from "next/head";
import { Grid, GridItem, Flex } from "@chakra-ui/react";

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
  const { configs } = type ?? {};
  const { pageTitle = "", hasUserWidget = true } = configs ?? {};

  const defaultStyles = {
    bg: colors.background,
    width: "-moz-max-content",
    minHeight: "100vh",
    px: 10,
    py: 20,
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {hasUserWidget ? (
        <Grid templateColumns="1fr 2fr" {...defaultStyles}>
          <UserWidget />
          <GridItem width="-moz-max-content">{children}</GridItem>
        </Grid>
      ) : (
        <Flex {...defaultStyles}>{children}</Flex>
      )}
    </>
  );
};

export default MainLayout;
