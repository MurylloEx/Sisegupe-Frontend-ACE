import { Box, Stack, VStack } from "@chakra-ui/react";
import { TextInput } from "core/components";
import React from "react";

const AddProject = () => {
  return (
    <Stack direction="column" spacing="10" width="100%">
      <TextInput variant="outline" borderWidth={3} p={5} label="Nome(s)" />
      <TextInput variant="outline" borderWidth={3} p={5} label="Título" />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Descrição"
        isTextarea
        rows="4"
      />
    </Stack>
  );
};

AddProject.configs = { pageTitle: "Adicionar projeto", hasUserWidget: false };

export default AddProject;
