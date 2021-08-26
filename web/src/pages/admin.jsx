import React from "react";

import { ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";
import { Text } from "@chakra-ui/react";

const { DATA } = MockedData;

const AdminPage = () => {
  return (
    <>
      <Text fontSize="2xl" mb="8" fontWeight="bold">
        Lista de projetos para serem validados
      </Text>
      <ProjectsWidget projects={DATA} isAdmin />
    </>
  );
};

AdminPage.configs = {
  pageTitle: "Página do administrador",
  hasUserWidget: true,
  role: ROLES.ADMIN,
};

export default AdminPage;
