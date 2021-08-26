import React, { useCallback, useEffect, useState } from "react";
import { Email, Lock } from "@material-ui/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { Checkbox } from "@material-ui/core";
import { useRouter } from "next/router";

import { Button, Modal, TextInput } from "core/components";
import { useForm, useLogin, useStorage, useUser } from "core/hooks";

const BEARER_TOKEN = "@sisegupe/bearer-token";

const INITIAL_VALUES = { email: "", password: "" };

const LoginModal = (props) => {
  const { onClose } = props;
  const router = useRouter();
  const [{ fields }, { updateField }] = useForm(INITIAL_VALUES);
  const [setItem] = useStorage();
  const [, { login }] = useUser();
  const [{ response, ...rest }, { requestLogin }] = useLogin(
    {
      email: "",
      password: "",
    },
    {
      onError: () => setHasError(true),
      onSuccess: () => router.reload(),
    }
  );

  const [willSaveCredentials, setWillSaveCredentials] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { email, password } = fields;

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

  // {
  //   "timestamp": 1629933847461,
  //   "status": 200,
  //   "data": {
  //     "token": "YjU0NWJkNWMwMGVkNGEwYTdmNTlmMTg0YTU4MDQyMTZjNWQzYTcyMWRlZTQ2NzQzNDVmNjYyOWVkNzdhYmExYmU3ZGIyNTI5YjdiMTE2MTAyNjNiNzJmMWRlMWI5YTU2Y2ZkMTg0NWRiNTNlMmZhMTUyM2I5ODJjMGQ0NjZmYzA5NmM1MzQ0YmMxOTgwNjhlZmEzYWFlMDJjZWZhYzhmY2ZhYmRkM2JiNTdlNGI3OTgxZDU2NTBkNGUwNzU0MjFjYTMwYmMzMGI1OTdiMmRlMzNmYzFlYThjOTlhZWNhNzNkYjNiNzEwYzMzZDdiYWFmNDljM2U3",
  //     "data": {
  //       "role": 1,
  //       "id": "54326900-10c4-43cc-bbe1-ff56b400a6a6",
  //       "name": "Muryllo",
  //       "lastname": "Oliveira",
  //       "email": "muryllo.pimenta@upe.br"
  //     }
  //   }
  // }

  useEffect(() => {
    if (isSuccess && response) {
      const { data } = response ?? {};
      const { token, data: userData } = data ?? {};
      const { role, id, name, lastname, email } = userData;

      login({
        id,
        name: `${name} ${lastname}`,
        email,
        password,
        token,
        role,
        isLogged: true,
      });
      onSaveCredentials(token);

      return;
    }
    return;
  }, [isSuccess, login, onSaveCredentials, password, response, router]);

  const onClickDoLogin = () => {
    requestLogin();
  };

  const isButtonDisabled = !(email && password);

  if (hasError) {
    return (
      <Modal header="Error" size="2xl" scrollBehavior="inside" {...props}>
        <Stack flexDir="column" justify="start">
          <Text fontSize="4xl" color="secondary" textAlign="center">
            Algum erro inesperado ocorreu. Tente novamente mais tarde.
          </Text>
        </Stack>
      </Modal>
    );
  }

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
              value={email}
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
              value={password}
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
            <Button
              bg="success"
              isLoading={isLoading}
              onClick={onClickDoLogin}
              disabled={isButtonDisabled}
            >
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
