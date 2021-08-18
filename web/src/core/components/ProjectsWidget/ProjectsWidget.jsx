import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Project from "./Project";

const ProjectsWidget = ({ projects }) => {
  const renderProject = (project, index, list) => {
    const isLastElement = index === list.length - 1;

    return (
      <React.Fragment>
        <Project project={project} key={`${index}`} />
        {!isLastElement && <Box height="10" />}
      </React.Fragment>
    );
  };

  return (
    <Flex height="100%" flexDir="column" pt="10">
      {projects.map(renderProject)}
    </Flex>
  );
};

export default ProjectsWidget;
