import React, { useCallback, useEffect, useState } from "react";
import { Email, Lock } from "@material-ui/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { Checkbox } from "@material-ui/core";

import { Alert, Button, Modal, TextInput } from "core/components";
import { useForm, useLogin, useStorage, useUser } from "core/hooks";
import { Constants } from "core/utils";

const INITIAL_VALUES = { email: "", password: "" };
const { LOCAL_STORAGES_LOCATIONS } = Constants;

const LoginModal = (props) => {
  const { onClose } = props;

  const [{ fields }, { getFieldProperties }] = useForm(INITIAL_VALUES);
  const { email, password } = fields;

  const [, { login }] = useUser();
  const [, { setItem }] = useStorage();

  const [{ response, ...rest }, { requestLogin }] = useLogin({
    email,
    password,
  });

  const [willSaveCredentials, setWillSaveCredentials] = useState(false);

  const { isError, isLoading, isSuccess } = rest;

  const onSaveCredentials = useCallback(
    (user) => {
      if (willSaveCredentials) {
        setItem(
          LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS,
          JSON.stringify(user)
        );
        return;
      }
      return;
    },
    [setItem, willSaveCredentials]
  );

  useEffect(() => {
    if (isSuccess && response) {
      const { data } = response ?? {};
      const { token, data: userData } = data ?? {};
      const { role, id, name, email, password } = userData;
      const user = {
        id,
        name,
        email,
        password,
        token,
        role,
        isLogged: true,
      };

      login(user);
      onSaveCredentials(user);
      return;
    }
    return;
  }, [isSuccess, login, onSaveCredentials, password, response]);

  const onClickDoLogin = () => {
    requestLogin();
  };

  const isButtonDisabled = !(email && password);

  const renderAlert = () => {
    const error = {
      status: "error",
      body: "Eita! Ocorreu um erro ao processar a sua solicitação de login. Por favor, verifique suas credenciais de acesso e tente mais tarde!",
    };

    const success = {
      status: "success",
      body: "Login realizado com sucesso!",
    };

    const buildMessage = () => {
      return isError ? error : success;
    };

    const { status, body } = buildMessage();

    return (isError || isSuccess) && <Alert status={status} message={body} />;
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
              {...getFieldProperties("email")}
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
              {...getFieldProperties("password")}
            />

            <HStack>
              <Checkbox
                value={willSaveCredentials}
                onChange={(e) => setWillSaveCredentials(e.target.checked)}
              />
              <Text> Lembrar senha</Text>
            </HStack>
          </Stack>
          {renderAlert()}
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
