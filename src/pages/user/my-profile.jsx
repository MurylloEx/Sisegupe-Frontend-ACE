import React from "react";
import { Stack } from "@chakra-ui/react";

import { Button, Loading, TextInput } from "core/components";
import { useUser } from "core/hooks";
import { ROLES } from "core/utils/constants";

const MyProfile = () => {
  const [{ name, email, password, isLogged }] = useUser();

  if (!isLogged) {
    return <Loading />;
  }

  return (
    <Stack height="100%" direction="column" spacing="20" pt="20">
      <Stack spacing="10">
        <TextInput
          defaultValue={name}
          variant="outline"
          borderWidth={3}
          p={5}
          label="Nome completo"
          hasEditableButton
          isDisabled
        />

        <TextInput
          defaultValue={email}
          type="email"
          variant="outline"
          borderWidth={3}
          p={5}
          label="Email"
          hasEditableButton
          isDisabled
        />

        <TextInput
          defaultValue={password}
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

MyProfile.configs = {
  pageTitle: "Meu perfil",
  hasUserWidget: true,
  role: ROLES.NORMAL_USER,
};

export default MyProfile;
