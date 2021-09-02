import React, { useState } from "react";
import { HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import ForumIcon from "@material-ui/icons/Forum";
import { useRouter } from "next/router";

import {
  useDeleteRequest,
  useGetCommentaries,
  useTheme,
  useUser,
} from "core/hooks";
import { CommentaryModal } from "core/modals";

import { Card } from "../Card";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import Info from "../Info";
import { Person } from "@material-ui/icons";

const Project = ({ project, isAdmin, isOnMyProjects = false, ...props }) => {
  const { id, projectStage, summary, title, author } = project;
  const { name: authorName = "" } = author;
  const [{ name, isLogged }] = useUser();
  const router = useRouter();
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    mutate: deleteProject,
    isLoading,
    isSuccess,
    isError,
  } = useDeleteRequest(`/projects/${id}/delete`);
  const [
    {
      response: commentaries = [],
      refetch,
      isLoading: isLoadingCommentaries,
      isFetching,
    },
  ] = useGetCommentaries(
    id,
    isOpen,
    {},
    {
      onSuccuss: () => router.reload(),
    }
  );

  const onClickNavigateToProject = () => router.push(`/home/projects/${id}`);

  const onClickDeleteProject = () => deleteProject();
  const onClickGoToEditProject = () => router.push(`/home/projects/edit/${id}`);

  const renderFooter = () => {
    if (isAdmin || authorName === name) {
      return (
        <HStack justify="space-between" m={4} spacing="10">
          <HStack>
            <Button.Icon
              onClick={onClickGoToEditProject}
              icon={
                <EditIcon fontSize="large" style={{ color: colors.success }} />
              }
            ></Button.Icon>
            <Button.Icon
              icon={<CloseIcon fontSize="large" />}
              style={{ color: colors.error }}
              onClick={onClickDeleteProject}
              isLoading={isLoading}
            >
              Deletar projeto
            </Button.Icon>
          </HStack>
          <HStack justify="flex-end" m={4} spacing="10">
            <Button.Icon
              icon={
                <ForumIcon fontSize="large" style={{ color: colors.primary }} />
              }
              onClick={onOpen}
            />
            <Button onClick={onClickNavigateToProject}>Saiba mais</Button>
          </HStack>
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
        maxWidth={isOnMyProjects ? "60vw" : "95vw"}
        width={isOnMyProjects ? "60vw" : "95vw"}
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
              <HStack pt="4">
                <Person />
                <Text fontSize={12} textAlign="left" color="grayMedium">
                  {authorName}{" "}
                </Text>
              </HStack>
            </Card.TextHeader>

            {!isAdmin && <Tag tagType={projectStage} />}
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
          isTruncated
          noOfLines={3}
        >
          {summary}
        </Card.TextBody>
      </Card>

      <CommentaryModal
        projectId={id}
        {...{
          refetch,
          isLoadingCommentaries,
          isFetching,
          commentaries,
          isLogged,
          onClose,
          isOpen,
        }}
      />

      <Info
        showInfo={isSuccess || isError}
        errorMessage="Ocorreu um erro ao remover o seu projeto, por favor tente novamente mais tarde"
        successMessage="Seu projeto foi removido com sucesso! Por favor, recarregue a página para ver essa alteração."
        infoType={isError ? "error" : "success"}
      />
    </>
  );
};

export default Project;
