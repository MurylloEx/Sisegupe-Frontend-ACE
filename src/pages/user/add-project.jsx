import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import DescriptionIcon from "@material-ui/icons/Description";

import { Alert, Button, Select, TextInput } from "core/components";

import { ROLES } from "core/utils/constants";
import { useAddProject, useForm, usePostRequest } from "core/hooks";

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

const INITIAL_VALUES = {
  title: "",
  summary: "",
  advisorName: "",
  courseName: "",
  fileLink: "",
};

const AddProject = () => {
  const [{ fields }, { getFieldProperties }] = useForm(INITIAL_VALUES);
  const [projectStage, setProjectStage] = useState(0);
  const [courseName, setCourseName] = useState("");

  const [isShowingFileLinkInput, setIsShowingFileLinkInput] = useState(false);

  const { title, summary, advisorName, fileLink } = fields;

  const [{ response, isLoading, isSuccess, isError }, { addProject }] =
    useAddProject({
      title,
      advisorName,
      summary,
      courseName,
      fileLink: [fileLink],
      projectStage,
    });

  const onClickCreateProject = () => {
    addProject();
  };

  const onClickShowingFileLinkInput = () => {
    setIsShowingFileLinkInput(true);
  };

  const renderAlert = () => {
    const error = {
      status: "error",
      body: "Eita! Ocorreu um erro ao criar o seu projeto. Por favor, tente mais tarde!",
    };

    const success = {
      status: "success",
      body: "Projeto criado com sucesso com sucesso!",
    };

    const buildMessage = () => {
      return isError ? error : success;
    };

    const { status, body } = buildMessage();

    return (isSuccess || isError) && <Alert status={status} message={body} />;
  };

  console.log({ fields: { ...fields, projectStage } });
  console.log({ response });

  return (
    <Stack direction="column" spacing="10">
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Nome(s)"
        placeholder="Digite aqui os nomes dos integrantes do projeto. Separados por vírgulas."
        {...getFieldProperties("advisorName")}
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Título"
        placeholder="Digite aqui o título do seu projeto."
        {...getFieldProperties("title")}
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Descrição"
        isTextarea
        placeholder="Adicione uma breve descrição sobre o seu projeto."
        rows="10"
        {...getFieldProperties("summary")}
      />
      <Select
        label="Curso"
        placeholder="Selecione o seu curso."
        items={OPTIONS_COURSES_VALUES}
        onChange={(event) => setCourseName(event.target.value)}
      />
      <Select
        label="Status"
        placeholder="Selecione o status do seu projeto."
        items={OPTIONS_PROJECT_STAGE_VALUES}
        onChange={(event) => setProjectStage(event.target.value)}
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
          {...getFieldProperties("fileLink")}
        />
      )}

      {renderAlert()}

      <Button bg="success" onClick={onClickCreateProject} isLoading={isLoading}>
        Confirmar projeto
      </Button>
    </Stack>
  );
};

AddProject.configs = {
  pageTitle: "Adicionar projeto",
  hasUserWidget: true,
  role: ROLES.NORMAL_USER,
};

export default AddProject;
