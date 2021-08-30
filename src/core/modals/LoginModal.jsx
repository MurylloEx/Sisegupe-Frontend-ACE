import React, { useCallback, useEffect, useState } from "react";
import { Email, Lock } from "@material-ui/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { Checkbox } from "@material-ui/core";
import { useRouter } from "next/router";

import { Button, Modal, TextInput } from "core/components";
import { useForm, useLogin, useStorage, useUser } from "core/hooks";
import { ROLES } from "core/utils/constants";

const BEARER_TOKEN = "@sisegupe/bearer-token";

const INITIAL_VALUES = { email: "", password: "" };

const LoginModal = (props) => {
  const { onClose } = props;
  const router = useRouter();
  const [willSaveCredentials, setWillSaveCredentials] = useState(false);
  const [{ fields }, { updateField }] = useForm(INITIAL_VALUES);

  const [setItem] = useStorage();

  const [{ response, ...rest }, { requestLogin }] = useLogin({
    email: "",
    password: "",
  });

  const [, { login }] = useUser();

  const { error, isError, isLoading, isSuccess } = rest;

  const onSaveCredentials = useCallback(
    (token) => {
      if (willSaveCredentials) {
        setItem(BEARER_TOKEN, token);
        return;
      }
      return;
    },
    [setItem, willSaveCredentials]
  );

  useEffect(() => {
    if (isSuccess && response) {
      const { name, email, password, token, role } = response ?? {};

      login({ name, email, password, token, role, isLogged: true });
      onSaveCredentials(token);

      return router.reload(window.location.pathname);
    }
    return;
  }, [isSuccess, login, onSaveCredentials, response, router]);

  const onClickDoLogin = () => {
    login({
      name: "Luiz Gustavo",
      email: "teste@teste.com",
      password: "Teste123!",
      token: "1234567890",
      role: ROLES.NORMAL_USER,
      isLogged: true,
    });
  };

  return (
    <Modal header="Faça login" size="2xl" scrollBehavior="inside" {...props}>
      <Stack flexDir="column" justify="start">
        <Stack spacing="10">
          <Stack spacing="6">
            <TextInput
              variant="outline"
              borderWidth={3}
              p={5}
              placeholder="E-mail"
              leftIcon={<Email />}
              value={fields.email}
              onChange={(e) => updateField("email", e.target.value)}
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
              value={fields.password}
              onChange={(e) => updateField("password", e.target.value)}
            />

            <HStack>
              <Checkbox
                value={willSaveCredentials}
                onChange={(e) => setWillSaveCredentials(e.target.checked)}
              />
              <Text> Lembrar senha</Text>
            </HStack>
          </Stack>

          <Stack direction="row" spacing="6">
            <Button bg="success" isLoading={isLoading} onClick={onClickDoLogin}>
              Entrar
            </Button>
            <Button onClick={onClose}>Voltar</Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
