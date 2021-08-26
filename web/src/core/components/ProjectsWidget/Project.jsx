import React from "react";
import { HStack, useDisclosure } from "@chakra-ui/react";
import ForumIcon from "@material-ui/icons/Forum";
import { useRouter } from "next/router";

import { useTheme } from "core/hooks";
import { CommentaryModal } from "core/modals";

import { Card } from "../Card";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";

const Project = ({ project, isAdmin, ...props }) => {
  const { status, title, content, id } = project;
  const { colors } = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const onClickNavigateToProject = () => router.push(`/home/projects/${id}`);

  const renderFooter = () => {
    if (isAdmin) {
      return (
        <HStack justify="space-between" m={4} spacing="10">
          <HStack>
            <Button.Icon
              icon={
                <CheckIcon fontSize="large" style={{ color: colors.success }} />
              }
              onClick={() => null}
            ></Button.Icon>
            <Button.Icon
              icon={<CloseIcon fontSize="large" />}
              style={{ color: colors.error }}
              onClick={() => null}
            ></Button.Icon>
          </HStack>
          <Button width="20%" onClick={onClickNavigateToProject}>
            Saiba mais
          </Button>
        </HStack>
      );
    }

    return (
      <HStack justify="flex-end" m={4} spacing="10">
        <Button.Icon
          icon={
            <ForumIcon fontSize="large" style={{ color: colors.primary }} />
          }
          onClick={onOpen}
        />
        <Button width="20%" onClick={onClickNavigateToProject}>
          Saiba mais
        </Button>
      </HStack>
    );
  };

  return (
    <>
      <Card
        borderWidth={3}
        header={() => (
          <HStack justify="space-between" px={4}>
            <Card.TextHeader
              fontColor="primary"
              textAlign="left"
              fontSize="22"
              py={2}
              px={0}
              bold
            >
              {title}
            </Card.TextHeader>
            {!isAdmin && <Tag tagType={status} />}
          </HStack>
        )}
        footer={renderFooter}
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
