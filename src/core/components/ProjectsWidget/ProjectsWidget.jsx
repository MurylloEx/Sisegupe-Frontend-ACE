import { Box, Center, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import EmptyContent from "../EmptyContent";
import Project from "./Project";

const ProjectsWidget = ({
  projects,
  isAdmin = false,
  isLoading,
  isOnMyProjects,
}) => {
  const renderProject = (project, index, list) => {
    const isLastElement = index === list.length - 1;

    return (
      <React.Fragment key={`${index}`}>
        <Project
          project={project}
          isAdmin={isAdmin}
          isOnMyProjects={isOnMyProjects}
        />
        {!isLastElement && <Box height="10" />}
      </React.Fragment>
    );
  };

  if (isLoading) {
    return (
      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (projects.length === 0) {
    return (
      <Flex
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <EmptyContent message="Vish! Sua lista de projetos está vazia" />
      </Flex>
    );
  }

  return (
    <Flex height="100%" flexDir="column">
      {projects.map(renderProject)}
    </Flex>
  );
};

export default ProjectsWidget;
