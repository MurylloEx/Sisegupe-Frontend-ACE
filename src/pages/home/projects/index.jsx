import React from "react";

import { ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";

const { DATA } = MockedData;

const Projects = () => {
  return <ProjectsWidget projects={DATA} />;
};

Projects.configs = {
  pageTitle: "Projetos",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Projects;
