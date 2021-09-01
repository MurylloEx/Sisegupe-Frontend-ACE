import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Card,
  EmptyContent,
  Modal,
  TextInput,
} from "core/components";
import { Center, Stack, Spinner, Text, VStack, HStack } from "@chakra-ui/react";
import { useForm, useGetCommentaries, usePostRequest } from "core/hooks";

const ELEMENTS_SPACING = "6";

const INITIAL_VALUES = {
  commentary: "",
};

const CommentaryModal = ({
  commentaries,
  projectId = "",
  refetch,
  isLoadingCommentaries,
  isFetching,
  isLogged,
  ...props
}) => {
  const { isOpen } = props;

  console.log(isOpen);

  const {
    mutate: doCommentary,
    isLoading,
    isError,
    isSuccess,
  } = usePostRequest(`commentaries/${projectId}`);

  const [{ fields }, { getFieldProperties, cleanUp }] = useForm(INITIAL_VALUES);
  const { commentary } = fields;

  const onClickComment = () => {
    doCommentary({ text: commentary });
    refetch();
    cleanUp();
  };

  const renderCommentary = ({ author, text, id }, _) => {
    const { name } = author;

    return (
      <Card key={id}>
        <HStack minWidth={400}>
          <Avatar name={name} size="md" fontSize="md" isRandomBgColor />
          <Text>{text}</Text>
        </HStack>
      </Card>
    );
  };

  const renderCommentaries = () => {
    if (isLoadingCommentaries) {
      return (
        <Center>
          <Spinner size="md" />
        </Center>
      );
    }

    if (commentaries.length === 0) {
      return (
        <EmptyContent message="Vish! Esse projeto ainda não possui nenhum comentário!" />
      );
    }

    return (
      <VStack spacing={ELEMENTS_SPACING} alignItems="flex-start">
        {commentaries.map(renderCommentary)}
      </VStack>
    );
  };

  const renderAlert = () => {
    const error = {
      status: "error",
      body: "Eita! Ocorreu um erro ao gerar seu comentário. Por favor, tente novamente mais tarde!",
    };

    const success = {
      status: "success",
      body: "Comentário criado com sucesso! Por favor, atualize a página para ver o seu comentário.",
    };

    const buildMessage = () => {
      return isError ? error : success;
    };

    const { status, body } = buildMessage();

    return (isError || isSuccess) && <Alert status={status} message={body} />;
  };

  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);

  return (
    <Modal header="Comentários" size="4xl" scrollBehavior="inside" {...props}>
      <Stack flexDirection="column" spacing={ELEMENTS_SPACING}>
        <Stack direction="column" spacing={ELEMENTS_SPACING}>
          {renderCommentaries()}
          {isLogged && (
            <>
              <TextInput
                bg="white"
                p={5}
                isTextarea
                placeholder="Adicionar um comentário"
                rows="10"
                {...getFieldProperties("commentary")}
              />

              {renderAlert()}

              <Button
                isLoading={isLoading}
                onClick={onClickComment}
                isDisabled={!commentary}
              >
                Comentar
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CommentaryModal;
