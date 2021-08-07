import React from "react";
import { GridItem, Flex, Button, Box } from "@chakra-ui/react";
import { useTheme } from "core/hooks";
import Avatar from "./Avatar";

const UserWidget = () => {
  const { colors } = useTheme();

  return (
    <GridItem width="-moz-max-content">
      <Flex
        flex={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Avatar name="Luiz Gustavo" />
        <Box mb="10" />
        <Button
          bg={colors.primary}
          color={colors.white}
          mb={4}
          width="50%"
          size="lg"
        >
          Meu Perfil
        </Button>
        <Button bg={colors.primary} color={colors.white} size="lg" width="50%">
          Meus Projetos
        </Button>
      </Flex>
    </GridItem>
  );
};

export default UserWidget;
