import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "./Image";

const EmptyContent = ({ message }) => {
  return (
    <VStack>
      <Image
        alt="test-image"
        src={require("public/empty-image.png")}
        height={400}
        width={400}
      />
      <Text fontWeight="bold" fontSize="2xl">
        {message}
      </Text>
    </VStack>
  );
};

export default EmptyContent;
