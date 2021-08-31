import React from "react";

import { ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";
import { ROLES } from "core/utils/constants";
import { useGetAllProjects, useToken } from "core/hooks";

const { DATA } = MockedData;

const Projects = () => {
  const [{ response, ...rest }] = useGetAllProjects();

  console.log(response);

  return <ProjectsWidget projects={DATA} />;
};

Projects.configs = {
  pageTitle: "Projetos",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Projects;
