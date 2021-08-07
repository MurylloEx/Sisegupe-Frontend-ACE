import React from "react";
import { Grid, Text } from "@chakra-ui/react";
import { useTheme } from "core/hooks";

const About = () => {
  const { colors } = useTheme();

  return (
    <Grid
      bg={colors.background}
      width="-moz-max-content"
      height="-moz-max-content"
    >
      <Text>About</Text>
    </Grid>
  );
};

export default About;
