import React from "react";
import { Text } from "@chakra-ui/react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Link from "next/link";

import { Button } from "./Button";

const AddProjectButton = () => {
  return (
    <Link href="/user/add-project" passHref>
      <Button
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderWidth={3}
        borderStyle="dashed"
        borderColor="primary"
        p={20}
        bg="background"
        color="primary"
      >
        <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">
          Adicionar um novo projeto
        </Text>
        <AddCircleIcon style={{ fontSize: 48, marginLeft: 10 }} />
      </Button>
    </Link>
  );
};

export default AddProjectButton;
