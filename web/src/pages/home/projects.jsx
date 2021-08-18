import React from "react";

import { ProjectsWidget } from "core/components";
import { MockedData } from "core/utils";

const { DATA } = MockedData;

const Projects = () => {
  return <ProjectsWidget projects={DATA} />;
};

Projects.configs = { pageTitle: "Projetos", hasUserWidget: false };

export default Projects;
