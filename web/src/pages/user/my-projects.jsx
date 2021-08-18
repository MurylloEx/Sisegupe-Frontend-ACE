import React from "react";
import { ProjectsWidget } from "core/components";
import { HStack, Text, VStack } from "@chakra-ui/react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const DATA = [
  {
    title: "Projeto 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Concluído",
  },
  {
    title: "Projeto 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Em andamento",
  },
];

const MyProjects = () => {
  return (
    <VStack spacing="10">
      <ProjectsWidget projects={DATA} />
      <HStack
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderWidth={3}
        borderStyle="dashed"
        p={10}
      >
        <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">
          Adicionar um novo projeto
        </Text>
        <AddCircleIcon style={{ fontSize: 48 }} />
      </HStack>
    </VStack>
  );
};

MyProjects.pageTitle = "Meus projetos";

export default MyProjects;
