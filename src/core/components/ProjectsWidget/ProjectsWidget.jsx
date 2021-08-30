import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Project from "./Project";

const ProjectsWidget = ({ projects, isAdmin = false }) => {
  const renderProject = (project, index, list) => {
    const isLastElement = index === list.length - 1;

    return (
      <React.Fragment key={`${index}`}>
        <Project project={project} isAdmin={isAdmin} />
        {!isLastElement && <Box height="10" />}
      </React.Fragment>
    );
  };

  return (
    <Flex height="100%" flexDir="column">
      {projects.map(renderProject)}
    </Flex>
  );
};

export default ProjectsWidget;
