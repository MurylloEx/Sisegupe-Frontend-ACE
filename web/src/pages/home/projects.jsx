import React from "react";
import { Grid, Text } from "@chakra-ui/react";
import { useTheme } from "core/hooks";

const Projects = () => {
  const { colors } = useTheme();

  return (
    <Grid
      bg={colors.background}
      width="-moz-max-content"
      height="-moz-max-content"
    >
      <Text>Projects</Text>
    </Grid>
  );
};

export default Projects;
