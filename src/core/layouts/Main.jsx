import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Grid, GridItem, Flex } from "@chakra-ui/react";

import { useStorage, useTheme, useUser } from "core/hooks";

import { UserWidget } from "core/components";
import { PermissionGate } from "core/providers";
import { Constants } from "core/utils";

const { LOCAL_STORAGES_LOCATIONS } = Constants;

/**
 *
 * @param {{children: React.ReactNode}} props
 * @returns JSX.Element
 */
const MainLayout = ({ children }) => {
  const { colors } = useTheme();
  const [{ name: userName }, { login }] = useUser();
  const [getItem] = useStorage();

  const [userCredentials, setUserCredentials] = useState(undefined);

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

  useEffect(() => {
    setUserCredentials(
      JSON.parse(getItem(LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS))
    );
  }, [getItem]);

  useEffect(() => {
    if (userCredentials) {
      login(userCredentials);
      return;
    }
    return;
  }, [login, userCredentials]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {hasUserWidget ? (
        <Grid templateColumns="1fr 2fr" {...defaultStyles}>
          <UserWidget userName={userName} />
          <GridItem width="-moz-max-content">
            <PermissionGate>{children}</PermissionGate>
          </GridItem>
        </Grid>
      ) : (
        <Flex {...defaultStyles}>
          <PermissionGate>{children}</PermissionGate>
        </Flex>
      )}
    </>
  );
};

export default MainLayout;
