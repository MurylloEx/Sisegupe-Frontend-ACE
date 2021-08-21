import React from "react";
import { Email, Lock } from "@material-ui/icons";
import { CheckboxGroup, HStack, Stack, Text } from "@chakra-ui/react";
import { Button, Modal, TextInput } from "core/components";
import { Checkbox } from "@material-ui/core";

const LoginModal = (props) => {
  const { onClose } = props;

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
              <Checkbox />
              <Text> Lembrar senha</Text>
            </HStack>
          </Stack>

          <Stack direction="row" spacing="6">
            <Button bg="success">Entrar</Button>
            <Button onClick={onClose}>Voltar</Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
