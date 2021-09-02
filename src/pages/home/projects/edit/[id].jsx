import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Center, Spinner, Stack, Text } from "@chakra-ui/react";
import DescriptionIcon from "@material-ui/icons/Description";

import { Button, Select, TextInput } from "core/components";

import { ROLES } from "core/utils/constants";
import { useGetAllProjects, useForm } from "core/hooks";
import usePutRequest from "core/hooks/usePutRequest";
import Info from "core/components/Info";

const OPTIONS_PROJECT_STAGE_VALUES = [
  { label: "Em andamento", value: 0 },
  { label: "Concluído", value: 1 },
];

const OPTIONS_COURSES_VALUES = [
  { label: "Ciências Biológicas", value: "Ciências Biológicas" },
  { label: "Computação", value: "Computação" },
  { label: "Eng. de Software", value: "Eng. de Software" },
  { label: "Geografia", value: "Geografia" },
  { label: "História", value: "História" },
  { label: "Letras", value: "Letras" },
  { label: "Matemática", value: "Matemática" },
  { label: "Medicina", value: "Medicina" },
  { label: "Pedagogia", value: "Pedagogia" },
  { label: "Administração", value: "Administração" },
  { label: "Odontologia", value: "Odontologia" },
  { label: "Direito", value: "Direito" },
  { label: "Medicina", value: "Medicina" },
  { label: "Psicologia", value: "Psicologia" },
];

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const [{ response: projects = [] }] = useGetAllProjects();
  const [projectDetails, setProjectDetails] = useState(undefined);
  const [isShowingFileLinkInput, setIsShowingFileLinkInput] = useState(false);

  useEffect(() => {
    if (projects) {
      setProjectDetails(projects.find((project) => project.id == id));
      return;
    }

    return;
  }, [id, projects]);

  const {
    advisorName,
    courseName,
    projectStage,
    summary,
    title,
    fileDocuments,
  } = projectDetails ?? {};

  const [firstDocument = {}] = fileDocuments ?? [];
  const { fileName: fileLink } = firstDocument;

  const [actualProjectStage, setActualProjectStage] = useState(projectStage);
  const [actualCourseName, setActualCourseName] = useState(courseName);
  const [actualAdvisorName, setActualAdvisorName] = useState(advisorName);
  const [actualTitle, setActualTitle] = useState(title);
  const [actualSummary, setActualSummary] = useState(summary);
  const [actualFileLink, setActualFileLink] = useState(fileLink);

  const onClickShowingFileLinkInput = () => {
    setIsShowingFileLinkInput(true);
  };

  const {
    mutate: editProject,
    isLoading,
    isSuccess,
    isError,
  } = usePutRequest(`projects/${id}`);

  const onClickCreateProject = () => {
    editProject({
      title: actualTitle,
      advisorName: actualAdvisorName,
      summary: actualSummary,
      courseName: actualCourseName,
      fileLinks: [{ fileLink: actualFileLink }],
      projectStage: actualProjectStage,
    });
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      router.push("/home/projects");
      return;
    }
  }, [isLoading, isSuccess, router]);

  if (!projectDetails) {
    return (
      <Center width="100vw">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Stack direction="column" spacing="10" width="100%">
      <Text fontSize="3xl" fontWeight="bold">
        Editar projeto
      </Text>
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Título"
        placeholder="Digite aqui o título do seu projeto."
        value={actualTitle ?? title}
        onChange={(event) => setActualTitle(event.target.value)}
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Nome(s)"
        placeholder="Digite aqui os nomes dos integrantes do projeto. Separados por vírgulas."
        value={actualAdvisorName ?? advisorName}
        onChange={(event) => setActualAdvisorName(event.target.value)}
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Descrição"
        isTextarea
        placeholder="Adicione uma breve descrição sobre o seu projeto."
        rows="10"
        value={actualSummary ?? summary}
        onChange={(event) => setActualSummary(event.target.value)}
      />
      <Select
        label="Curso"
        placeholder="Selecione o seu curso."
        items={OPTIONS_COURSES_VALUES}
        value={actualCourseName ?? courseName}
        onChange={(event) => setActualCourseName(event.target.value)}
      />
      <Select
        label="Status"
        placeholder="Selecione o status do seu projeto."
        items={OPTIONS_PROJECT_STAGE_VALUES}
        value={actualProjectStage ?? projectStage}
        onChange={(event) => setActualProjectStage(event.target.value)}
      />
      {!isShowingFileLinkInput ? (
        <Button.Outlined
          icon={(props) => <DescriptionIcon {...props} />}
          onClick={onClickShowingFileLinkInput}
        >
          Adicionar arquivo
        </Button.Outlined>
      ) : (
        <TextInput
          variant="outline"
          borderWidth={3}
          p={5}
          label="Link para o documento"
          placeholder="Ponha aqui o link para o documento para que possa ser acessado por qualquer pessoa."
          leftIcon={<DescriptionIcon />}
          value={actualFileLink ?? fileLink}
          onChange={(event) => setActualFileLink(event.target.value)}
        />
      )}

      <Info
        showInfo={isSuccess || isError}
        errorMessage="Ocorreu um erro ao editar o seu projeto, por favor tente novamente mais tarde."
        successMessage="Seu projeto foi editado com sucesso."
        infoType={isError ? "error" : "success"}
      />

      <Button bg="success" onClick={onClickCreateProject} isLoading={isLoading}>
        Confirmar alterações
      </Button>
    </Stack>
  );
};
Project.configs = {
  pageTitle: "Editar detalhes do projeto",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Project;
