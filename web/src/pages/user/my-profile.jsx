import React from "react";
import { Stack } from "@chakra-ui/react";

import { Button, TextInput } from "core/components";

const DEFAULT_VALUES = {
  name: "Luiz Gustavo",
  email: "luiz.matias@upe.br",
  telefone: "81 99999-9999",
  senha: "Luiz123!",
};

const MyProfile = () => {
  return (
    <Stack height="100%" direction="column" spacing="20" pt="20">
      <Stack spacing="10">
        <TextInput
          defaultValue={DEFAULT_VALUES.name}
          variant="outline"
          borderWidth={3}
          p={5}
          label="Nome completo"
          hasEditableButton
          isDisabled
        />
        <TextInput
          defaultValue={DEFAULT_VALUES.email}
          type="email"
          variant="outline"
          borderWidth={3}
          p={5}
          label="Email"
          hasEditableButton
          isDisabled
        />

        <TextInput
          defaultValue={DEFAULT_VALUES.telefone}
          type="tel"
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Telefone"
          isDisabled
        />
        <TextInput
          defaultValue={DEFAULT_VALUES.senha}
          type="password"
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Senha"
          isDisabled
        />
      </Stack>

      <Button alignSelf="flex-end" bg="success">
        Confirmar alterações
      </Button>
    </Stack>
  );
};

MyProfile.configs = { pageTitle: "Meu perfil", hasUserWidget: true };

export default MyProfile;
