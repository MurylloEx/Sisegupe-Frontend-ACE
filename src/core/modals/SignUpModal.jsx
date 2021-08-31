import React from "react";
import { Email, Lock, Person } from "@material-ui/icons";
import { Stack } from "@chakra-ui/react";
import { Button, Modal, TextInput, Alert } from "core/components";
import { useForm, useSignUp } from "core/hooks";

const INITIAL_VALUES = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const SignUpModal = (props) => {
  const { onClose } = props;

  const [{ fields }, { getFieldProperties, cleanUp }] = useForm(INITIAL_VALUES);
  const { email, password, name, confirmPassword } = fields;

  const [{ response, ...rest }, { requestSignUp }] = useSignUp({
    email,
    password,
    name,
  });

  const { isError, isLoading, isSuccess } = rest;

  const renderAlert = () => {
    const error = {
      status: "error",
      body: "Eita! Ocorreu um erro ao processar a sua solicitação de cadastro. Por favor, tente novamente mais tarde!",
    };

    const success = {
      status: "success",
      body: "Cadastro realizado com sucesso!",
    };

    const isPasswordsEquals = password === confirmPassword;

    const shouldBePasswordsEquals = {
      status: "warning",
      body: "As senhas devem ser iguais.",
    };

    const buildMessage = () => {
      if (!isPasswordsEquals) {
        return shouldBePasswordsEquals;
      }

      return isError ? error : success;
    };

    const { status, body } = buildMessage();

    return (
      (isError || isSuccess || !isPasswordsEquals) && (
        <Alert status={status} message={body} />
      )
    );
  };

  const onClickSignUp = () => {
    requestSignUp();
    if (isSuccess) return cleanUp();
  };

  return (
    <Modal
      header=" Crie a sua conta"
      size="2xl"
      scrollBehavior="inside"
      {...props}
    >
      <Stack flexDir="column" spacing="10">
        <Stack spacing="6">
          <TextInput
            variant="outline"
            borderWidth={3}
            p={5}
            placeholder="Nome completo"
            leftIcon={<Person />}
            {...getFieldProperties("name")}
          />
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
            type="password"
            width="max"
            variant="outline"
            borderWidth={3}
            p={5}
            placeholder="Senha"
            leftIcon={<Lock />}
            {...getFieldProperties("password")}
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
            {...getFieldProperties("confirmPassword")}
          />
        </Stack>
        {renderAlert()}
        <Stack direction="row" spacing="6">
          <Button bg="success" isLoading={isLoading} onClick={onClickSignUp}>
            Cadastrar
          </Button>
          <Button onClick={onClose}>Voltar</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default SignUpModal;
