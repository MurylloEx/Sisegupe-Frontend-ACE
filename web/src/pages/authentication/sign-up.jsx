import React from "react";
import { Email, Lock, Person } from "@material-ui/icons";
import { Stack, Text } from "@chakra-ui/react";
import { Button, TextInput } from "core/components";

const SignUp = () => {
  return (
    <Stack
      width="100%"
      flexDir="column"
      justifyItems="center"
      mx="30%"
      spacing="10"
      fontWeight="bold"
    >
      <Text textAlign="center" fontSize="2xl">
        Cadastro
      </Text>
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="Nome completo"
        leftIcon={<Person />}
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="E-mail"
        leftIcon={<Email />}
      />

      <TextInput
        flex={3}
        type="password"
        width="max"
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="Senha"
        leftIcon={<Lock />}
      />
      <TextInput
        type="password"
        flex={3}
        width="max"
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="Confirmar senha"
        leftIcon={<Lock />}
      />

      <Stack>
        <Button bg="success">Cadastrar</Button>
      </Stack>
    </Stack>
  );
};

SignUp.configs = { pageTitle: "Cadastro", hasUserWidget: false };

export default SignUp;
