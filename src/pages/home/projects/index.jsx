import React from "react";

import { ProjectsWidget } from "core/components";
import { ROLES } from "core/utils/constants";
import { useGetAllProjects } from "core/hooks";

const Projects = () => {
  const [{ response: projects = [], isLoading, ...rest }] = useGetAllProjects();

  return <ProjectsWidget projects={projects} isLoading={isLoading} />;
};

Projects.configs = {
  pageTitle: "Projetos",
  hasUserWidget: false,
  role: ROLES.NORMAL_USER,
};

export default Projects;
