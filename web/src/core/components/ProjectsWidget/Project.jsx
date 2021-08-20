import React from "react";
import { HStack, useDisclosure } from "@chakra-ui/react";
import ForumIcon from "@material-ui/icons/Forum";

import { useTheme } from "core/hooks";
import { CommentaryModal } from "core/modals";

import { Card } from "../Card";
import { Tag } from "../Tag";
import { Button } from "../Button";

const Project = ({ project, ...props }) => {
  const { status, title, content } = project;
  const { colors } = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Card
        borderWidth={3}
        header={() => (
          <HStack justify="space-between" px={4}>
            <Card.TextHeader
              fontColor="primary"
              textAlign="left"
              fontSize="40"
              p={0}
              bold
            >
              {title}
            </Card.TextHeader>
            <Tag tagType={status} />
          </HStack>
        )}
        footer={() => (
          <HStack justify="flex-end" m={4} spacing="10">
            <Button.Icon
              icon={
                <ForumIcon fontSize="large" style={{ color: colors.primary }} />
              }
              onClick={onOpen}
            />
            <Button width="20%">Saiba mais</Button>
          </HStack>
        )}
        mb={4}
        {...props}
      >
        <Card.TextBody
          fontSize={20}
          textAlign="left"
          color="grayMedium"
          bold={false}
        >
          {content}
        </Card.TextBody>
      </Card>
      <CommentaryModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Project;
