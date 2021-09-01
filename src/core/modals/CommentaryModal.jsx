import React, { useCallback, useState } from "react";
import {
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
  const { mutate: doCommentary, isLoading } = usePostRequest(
    `commentaries/${projectId}`
  );

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

  refetch();

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

              <Button isLoading={isLoading} onClick={onClickComment}>
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
