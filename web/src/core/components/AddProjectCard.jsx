import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const AddProjectCard = () => {
  return (
    <HStack
      width="100%"
      justifyContent="center"
      alignItems="center"
      borderWidth={3}
      borderStyle="dashed"
      p={10}
    >
      <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">
        Adicionar um novo projeto
      </Text>
      <AddCircleIcon style={{ fontSize: 48 }} />
    </HStack>
  );
};

export default AddProjectCard;
