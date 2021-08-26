import React, { useCallback, useEffect, useState } from "react";
import { Email, Lock } from "@material-ui/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { Checkbox } from "@material-ui/core";
import { useRouter } from "next/router";

import { Button, Modal, TextInput } from "core/components";
import { useLogin, useStorage, useUser } from "core/hooks";

const BEARER_TOKEN = "@sisegupe/bearer-token";

const LoginModal = (props) => {
  const { onClose } = props;
  const router = useRouter();
  const [willSaveCredentials, setWillSaveCredentials] = useState(false);

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
      const { name, email, password, token } = response ?? {};

      login({ name, email, password, token });
      onSaveCredentials(token);

      return router.reload(window.location.pathname);
    }
    return;
  }, [isSuccess, login, onSaveCredentials, response, router]);

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

            <HStack>
              <Checkbox
                value={willSaveCredentials}
                onChange={(e) => setWillSaveCredentials(e.target.checked)}
              />
              <Text> Lembrar senha</Text>
            </HStack>
          </Stack>

          <Stack direction="row" spacing="6">
            <Button bg="success" isLoading={isLoading}>
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
