import React from "react";
import { AddProjectButton, ProjectsWidget } from "core/components";
import { VStack } from "@chakra-ui/react";
import { MockedData } from "core/utils";

const { DATA } = MockedData;

const MyProjects = () => {
  return (
    <VStack spacing="10">
      <ProjectsWidget projects={DATA} />
      <AddProjectButton />
    </VStack>
  );
};

MyProjects.configs = { pageTitle: "Meus projetos", hasUserWidget: true };

export default MyProjects;
