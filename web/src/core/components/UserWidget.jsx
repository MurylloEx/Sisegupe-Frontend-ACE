import React from "react";
import { GridItem, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useTheme } from "core/hooks";
import { Button } from "core/components";
import Avatar from "./Avatar";

const MY_PROFILE_HREF = "/user/my-profile";
const MY_PROJECTS_HREF = "/user/my-projects";

const UserWidget = () => {
  const { colors } = useTheme();

  return (
    <GridItem width="-moz-max-content">
      <Flex
        flex={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
        p={4}
        pt="48"
      >
        <Avatar name="Luiz Gustavo" />
        <Box mb="10" />
        <Link href={MY_PROFILE_HREF} passHref>
          <Button mb={4} width="50%">
            Meu Perfil
          </Button>
        </Link>
        <Link href={MY_PROJECTS_HREF} passHref>
          <Button
            bg={colors.primary}
            color={colors.white}
            size="lg"
            width="50%"
          >
            Meus Projetos
          </Button>
        </Link>
      </Flex>
    </GridItem>
  );
};

export default UserWidget;
