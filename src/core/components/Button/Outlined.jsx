import React from "react";
import { Text } from "@chakra-ui/react";

import Button from "./Button";

const Outlined = ({ children, icon, ...props }) => {
  return (
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
      {...props}
    >
      <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">
        {children}
      </Text>
      {icon({ style: { fontSize: 48, marginLeft: 10 } })}
    </Button>
  );
};

export default Outlined;
