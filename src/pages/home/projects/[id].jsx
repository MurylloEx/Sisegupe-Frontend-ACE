import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MockedData } from "core/utils";
import { Spinner, Stack, Text } from "@chakra-ui/react";
import { ChromeReaderMode } from "@material-ui/icons";

import { Button } from "core/components";

import { ROLES } from "core/utils/constants";

const { DATA } = MockedData;
const FONT_SIZE = "lg";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projectDetails, setProjectDetails] = useState({});

  if (!projectDetails) {
    <Spinner />;
  }

  useEffect(() => {
    setProjectDetails(DATA.find((project) => project.id == Number(id)));
  }, [id]);

  const { title, members, course, status, content } = projectDetails ?? {};

  return (
    <Stack spacing="10">
      <Stack>
        <Text fontSize="2xl" fontWeight="bold" color="primary">
          {title}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Autores: </b>
          {members}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Curso: </b>
          {course}
        </Text>
        <Text color="primary" fontSize={FONT_SIZE}>
          <b>Status: </b> {status}
        </Text>
      </Stack>
      <Text fontSize={FONT_SIZE}>{content}</Text>
      <Button.Outlined icon={(props) => <ChromeReaderMode {...props} />}>
        Ler documento do projeto
      </Button.Outlined>
    </Stack>
  );
};
Project.configs = {
  pageTitle: "Visualizar detalhes do projeto",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Project;
