import React from "react";

import { ProjectsWidget } from "core/components";
import { ROLES } from "core/utils/constants";
import { Text } from "@chakra-ui/react";
import { useGetAllProjects } from "core/hooks";

const AdminPage = () => {
  const [{ response: projects = [], isLoading, ...rest }] = useGetAllProjects();

  return (
    <>
      {Boolean(projects.length > 0) && (
        <Text fontSize="2xl" mb="8" fontWeight="bold">
          Página do gestor
        </Text>
      )}
      <ProjectsWidget
        projects={projects}
        isAdmin
        isOnMyProjects
        isLoading={isLoading && Boolean(projects.length === 0)}
      />
    </>
  );
};

AdminPage.configs = {
  pageTitle: "Página do administrador",
  hasUserWidget: true,
  role: ROLES.ADMIN,
};

export default AdminPage;
