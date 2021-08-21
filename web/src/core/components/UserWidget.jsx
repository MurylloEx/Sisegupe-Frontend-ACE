import React, { useState } from "react";
import { GridItem, Flex, Box, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useTheme } from "core/hooks";
import { Button } from "core/components";
import Avatar from "./Avatar";
import { LoginModal, SignUpModal } from "core/modals";

const MY_PROFILE_HREF = "/user/my-profile";
const MY_PROJECTS_HREF = "/user/my-projects";

const UserWidget = ({ userInfos }) => {
  const { colors } = useTheme();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  const onCloseLoginModal = () => setIsOpenLoginModal(false);
  const onCloseSignUpModal = () => setIsOpenSignUpModal(false);

  const onOpenLoginModal = () => setIsOpenLoginModal(true);
  const onOpenSignUpModal = () => setIsOpenSignUpModal(true);

  if (!userInfos) {
    return (
      <>
        <GridItem width="-moz-max-content">
          <Stack
            flexDir="column"
            justifyContent="space-between"
            height="60%"
            mx="10%"
            spacing="18"
          >
            <Stack spacing="18">
              <Text fontSize="3xl" fontWeight="bold">
                Seja bem vindo(a) ao SISEGUPE!
              </Text>
              <Stack>
                <Text fontSize="2xl" color="grayMedium" fontWeight="bold">
                  O que é o SISEGUPE?
                </Text>
                <Text>
                  O Sisegupe é um observatório que congrega os projetos
                  desenvolvidos pelos alunos egressos da UPE Campus Garanhuns,
                  oferecendo publicidade e servindo de vitrine para os egressos
                  e seus respectivos projetos.
                </Text>
              </Stack>
            </Stack>

            <Stack spacing="6">
              <Stack spacing="4">
                <Text color="grayMedium">Já possui uma conta?</Text>
                <Button bg="success" onClick={onOpenLoginModal}>
                  Realizar login
                </Button>
              </Stack>
              <Stack spacing="4">
                <Text color="grayMedium">Ainda não possui uma conta?</Text>
                <Button onClick={onOpenSignUpModal}>Criar conta</Button>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
        <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
        <SignUpModal isOpen={isOpenSignUpModal} onClose={onCloseSignUpModal} />
      </>
    );
  }

  return (
    <GridItem width="-moz-max-content">
      <Flex
        flex={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
        p={4}
        pt="48"
      >
        <Avatar name="Luiz Gustavo" />
        <Box mb="10" />
        <Link href={MY_PROFILE_HREF} passHref>
          <Button mb={4} width="50%">
            Meu perfil
          </Button>
        </Link>
        <Link href={MY_PROJECTS_HREF} passHref>
          <Button
            bg={colors.primary}
            color={colors.white}
            size="lg"
            width="50%"
          >
            Meus projetos
          </Button>
        </Link>
      </Flex>
    </GridItem>
  );
};

export default UserWidget;
