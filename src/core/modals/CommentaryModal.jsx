import React, { useCallback } from "react";
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
  ...props
}) => {
  const { mutate: doCommentary, isLoading } = usePostRequest(
    `commentaries/${projectId}`
  );

  const [{ fields }, { getFieldProperties, cleanUp }] = useForm(INITIAL_VALUES);
  const { commentary } = fields;

  const onClickComment = () => {
    doCommentary({ text: commentary });
    cleanUp();
    refetch();
  };

  const renderCommentary = ({ author, text, id }, _) => {
    const { name } = author;

    return (
      <Card key={id}>
        <HStack width={600}>
          <Avatar name={name} size="md" fontSize="md" isRandomBgColor />
          <Text>{text}</Text>
        </HStack>
      </Card>
    );
  };

  const renderCommentaries = () => {
    if (isLoadingCommentaries || isFetching) {
      return (
        <Center>
          <Spinner size="md" />
        </Center>
      );
    }

    if (commentaries.length === 0) {
      return (
        <EmptyContent message="Vish! Você não possui nenhum comentário ainda!" />
      );
    }

    return (
      <VStack spacing={ELEMENTS_SPACING}>
        {commentaries.map(renderCommentary)}
      </VStack>
    );
  };

  return (
    <Modal header="Comentários" size="4xl" scrollBehavior="inside" {...props}>
      <Stack flexDirection="column" spacing={ELEMENTS_SPACING}>
        <Stack direction="column" spacing={ELEMENTS_SPACING}>
          {renderCommentaries()}
          <TextInput
            bg="white"
            p={5}
            isTextarea
            placeholder="Adicionar um comentário"
            rows="10"
            {...getFieldProperties("commentary")}
          />
          <Button onClick={onClickComment} isLoading={isLoading}>
            Comentar
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CommentaryModal;
