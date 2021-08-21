import React from "react";
import { useRouter } from "next/router";
import { Email, Lock } from "@material-ui/icons";
import { Stack, Text } from "@chakra-ui/react";
import { Button, TextInput } from "core/components";

const Login = () => {
  const navigation = useRouter();

  const onClickNavigateToSignUpScreen = () => {
    navigation.push("/authentication/sign-up");
  };

  return (
    <Stack
      width="100%"
      flexDir="column"
      justifyItems="center"
      mx="30%"
      spacing="10"
      fontWeight="bold"
    >
      <Text textAlign="center" fontSize="3xl">
        Seja bem vindo(a) ao SISEGUPE!
      </Text>
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="E-mail"
        leftIcon={<Email />}
      />

      <TextInput
        flex={3}
        width="max"
        variant="outline"
        borderWidth={3}
        p={5}
        placeholder="Senha"
        type="password"
        leftIcon={<Lock />}
      />
      <Stack spacing="6">
        <Button bg="success">Entrar</Button>
        <Stack direction="column">
          <Text color="grayMedium"> Ainda não possui uma conta?</Text>
          <Button onClick={onClickNavigateToSignUpScreen}>Criar conta</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

Login.configs = { pageTitle: "Login", hasUserWidget: false };

export default Login;
