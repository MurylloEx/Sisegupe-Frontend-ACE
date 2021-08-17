import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { Button, TextInput } from "core/components";

const MyProfile = () => {
  return (
    <Flex height="100%" flexDir="column" pt="48">
      <Stack spacing="10">
        <TextInput
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Nome completo"
        />
        <TextInput
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Email"
        />

        <TextInput
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Telefone"
        />
      </Stack>
      <Box height="10" />
      <Button width="30%" alignSelf="flex-end">
        Salvar
      </Button>
    </Flex>
  );
};

MyProfile.pageTitle = "Meu perfil";

export default MyProfile;
