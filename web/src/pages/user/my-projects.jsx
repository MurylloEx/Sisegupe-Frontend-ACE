import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Button, ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";

const { DATA } = MockedData;

const MyProjects = () => {
  const router = useRouter();

  const onClickNavigateToAddProjects = () => router.push("/user/add-project");

  return (
    <>
      <VStack spacing="10">
        <ProjectsWidget projects={DATA} />
        <Button.Outlined
          icon={(props) => <AddCircleIcon {...props} />}
          onClick={onClickNavigateToAddProjects}
        >
          Adicionar um novo projeto
        </Button.Outlined>
      </VStack>
    </>
  );
};

MyProjects.configs = {
  pageTitle: "Meus projetos",
  hasUserWidget: true,
  role: ROLES.NORMAL_USER,
};

export default MyProjects;
