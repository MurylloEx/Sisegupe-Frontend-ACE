import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MockedData } from "core/utils";
import { Link, Spinner, Stack, Text } from "@chakra-ui/react";
import { ChromeReaderMode } from "@material-ui/icons";

import { Button } from "core/components";

import { ROLES } from "core/utils/constants";
import { useGetAllProjects } from "core/hooks";

const { DATA } = MockedData;
const FONT_SIZE = "lg";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  const [{ response: projects = [], ...rest }] = useGetAllProjects();

  const [projectDetails, setProjectDetails] = useState(undefined);

  const getStatus = () =>
    ({
      0: "Em andamento",
      1: "Concluído",
    }[projectStage]);

  useEffect(() => {
    if (projects) {
      setProjectDetails(projects.find((project) => project.id == id));
      return;
    }
  }, [id, projects]);

  const { advisorName, courseName, projectStage, summary, title, fileLink } =
    projectDetails ?? {};
  const onClickReadFile = () => {};

  if (!projectDetails) {
    <Spinner />;
  }

  return (
    <Stack spacing="10">
      <Stack>
        <Text fontSize="2xl" fontWeight="bold" color="primary">
          {title}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Autores: </b>
          {advisorName}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Curso: </b>
          {courseName}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Status: </b> {getStatus()}
        </Text>
      </Stack>
      <Text fontSize={FONT_SIZE}>{summary}</Text>
      {Boolean(fileLink) && (
        <Link href={fileLink} target="_blank" passHref>
          <Button.Outlined icon={(props) => <ChromeReaderMode {...props} />}>
            Ler documento do projeto
          </Button.Outlined>
        </Link>
      )}
    </Stack>
  );
};
Project.configs = {
  pageTitle: "Visualizar detalhes do projeto",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Project;
