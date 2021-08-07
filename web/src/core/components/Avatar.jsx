import { Avatar as ChakraAvatar, Text } from "@chakra-ui/react";
import { useTheme } from "core/hooks";
import React from "react";

const Avatar = ({ name, fontSize }) => {
  const { colors } = useTheme();

  if (!name) {
    throw Error("Name property is necessary to render the Avatar");
  }
  return (
    <>
      <ChakraAvatar
        name={name}
        size="2xl"
        mb={4}
        bg={colors.secondary}
        color={colors.white}
      />
      <Text fontSize={fontSize ?? "2xl"}>{name}</Text>
    </>
  );
};

export default Avatar;
