import React from "react";
import { AddProjectCard, ProjectsWidget } from "core/components";
import { VStack } from "@chakra-ui/react";
import { MockedData } from "core/utils";

const { DATA } = MockedData;

const MyProjects = () => {
  return (
    <VStack spacing="10">
      <ProjectsWidget projects={DATA} />
      <AddProjectCard />
    </VStack>
  );
};

MyProjects.pageTitle = "Meus projetos";

export default MyProjects;
