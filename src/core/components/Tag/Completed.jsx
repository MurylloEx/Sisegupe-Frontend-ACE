import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Completed = (props) => {
  return (
    <HStack {...props}>
      <CheckCircleIcon color="success" fontSize="20" />
      <Text color="success" fontWeight="bold">
        Concluído
      </Text>
    </HStack>
  );
};

export default Completed;
