import React from "react";

import { ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";

const { DATA } = MockedData;

const AdminPage = () => {
  return <ProjectsWidget projects={DATA} isAdmin />;
};

AdminPage.configs = {
  pageTitle: "Página do administrador",
  hasUserWidget: true,
  role: ROLES.ADMIN,
};

export default AdminPage;
