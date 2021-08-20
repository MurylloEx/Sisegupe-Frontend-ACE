import React from "react";
import { Avatar, Button, Card, Modal, TextInput } from "core/components";
import { HStack, Stack, Text, VStack } from "@chakra-ui/react";

const COMMENTARIES = [
  {
    author: "Luiz Gustavo",
    commentary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Urna cursus eget nunc scelerisque viverra mauris in.",
  },
  {
    author: "Kelvin Vasconcelos",
    commentary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Urna cursus eget nunc scelerisque viverra mauris in.",
  },
  {
    author: "Lucas Henrique",
    commentary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Urna cursus eget nunc scelerisque viverra mauris in.",
  },
];

const ELEMENTS_SPACING = "6";

const CommentaryModal = (props) => {
  const renderCommentary = ({ author, commentary }, index) => {
    return (
      <Card key={`${index}`}>
        <HStack>
          <Avatar name={author} size="md" fontSize="md" isRandomBgColor />
          <Text>{commentary}</Text>
        </HStack>
      </Card>
    );
  };

  return (
    <Modal header="Comentários" size="4xl" {...props}>
      <Stack flexDirection="column" spacing={ELEMENTS_SPACING}>
        <VStack spacing={ELEMENTS_SPACING}>
          {COMMENTARIES.map(renderCommentary)}
        </VStack>
        <Stack direction="column" spacing={ELEMENTS_SPACING}>
          <TextInput
            bg="white"
            p={5}
            isTextarea
            placeholder="Adicionar um comentário"
            rows="10"
          />
          <Button>Comentar</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CommentaryModal;
