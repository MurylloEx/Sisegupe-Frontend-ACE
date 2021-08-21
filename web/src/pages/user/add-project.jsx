import React from "react";
import { Stack } from "@chakra-ui/react";
import DescriptionIcon from "@material-ui/icons/Description";

import { Button, Select, TextInput } from "core/components";

const COURSES_DATA = ["Engenharia de software", "Psicologia", "Biologia"];

const STATUS_DATA = ["Em andamento", "Concluído"];

const AddProject = () => {
  return (
    <Stack direction="column" spacing="10">
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Nome(s)"
        placeholder="Digite aqui os nomes dos integrantes do projeto."
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Título"
        placeholder="Digite aqui o título do seu projeto."
      />
      <TextInput
        variant="outline"
        borderWidth={3}
        p={5}
        label="Descrição"
        isTextarea
        placeholder="Adicione uma breve descrição sobre o seu projeto."
        rows="10"
      />
      <Select
        label="Cursos"
        placeholder="Selecione o curso que você realizou na UPE."
        items={COURSES_DATA}
      />
      <Select
        label="Status"
        placeholder="Selecione o status do seu projeto."
        items={STATUS_DATA}
      />
      <Button.Outlined icon={(props) => <DescriptionIcon {...props} />}>
        Adicionar arquivo
      </Button.Outlined>

      <Button bg="success">Confirmar projeto</Button>
    </Stack>
  );
};

AddProject.configs = { pageTitle: "Adicionar projeto", hasUserWidget: true };

export default AddProject;
