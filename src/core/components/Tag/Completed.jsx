import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Completed = ({ fontSize = 12, ...props }) => {
  return (
    <HStack {...props}>
      <CheckCircleIcon color="success" fontSize={fontSize} />
      <Text color="success" fontWeight="bold" fontSize={fontSize}>
        Concluído
      </Text>
    </HStack>
  );
};

export default Completed;
