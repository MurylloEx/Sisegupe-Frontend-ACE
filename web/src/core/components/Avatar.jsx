import { Avatar as ChakraAvatar, VStack, Text } from "@chakra-ui/react";
import { useTheme } from "core/hooks";
import React from "react";

const Avatar = ({ name, fontSize, size = "2xl", isRandomBgColor }) => {
  const { colors } = useTheme();

  if (!name) {
    throw Error("Name property is necessary to render the Avatar");
  }

  const bg = isRandomBgColor ? null : colors.secondary;

  return (
    <VStack width="50%">
      <ChakraAvatar name={name} size={size} bg={bg} color={colors.white} />
      <Text fontSize={fontSize ?? "2xl"}>{name}</Text>
    </VStack>
  );
};

export default Avatar;
