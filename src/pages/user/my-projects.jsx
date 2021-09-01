import React, { useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Button, Loading, ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";
import { useGetAllProjects, useUser } from "core/hooks";

const { DATA } = MockedData;

const MyProjects = () => {
  const router = useRouter();
  const [{ isLogged, id }] = useUser();
  const [{ response: projects = [], ...rest }] = useGetAllProjects();

  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      setUserProjects(projects.filter((project) => project.author.id === id));
      return;
    }
  }, [id, projects]);

  console.log({ projects, userProjects, id });

  const onClickNavigateToAddProjects = () => router.push("/user/add-project");

  if (!isLogged) {
    return <Loading />;
  }
  return (
    <>
      <VStack spacing="10">
        <ProjectsWidget projects={userProjects} isOnMyProjects />
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
