import React from "react";
import { Email, Lock, Person } from "@material-ui/icons";
import { Stack } from "@chakra-ui/react";
import { Button, Modal, TextInput } from "core/components";

const SignUpModal = (props) => {
  const { onClose } = props;

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
        </Stack>

        <Stack direction="row" spacing="6">
          <Button bg="success">Cadastrar</Button>
          <Button onClick={onClose}>Voltar</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default SignUpModal;
