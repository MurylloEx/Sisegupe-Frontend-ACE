import React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import { Card } from "../Card";
import { Tag } from "../Tag";

const Project = ({ project, ...props }) => {
  const { status, title, content } = project;

  return (
    <Card
      borderWidth={3}
      header={() => (
        <HStack justify="space-between" px={4}>
          <Card.TextHeader
            fontColor="primary"
            textAlign="left"
            fontSize="40"
            p={0}
            bold
          >
            {title}
          </Card.TextHeader>
          <Tag tagType={status} />
        </HStack>
      )}
      mb={4}
      {...props}
    >
      <Card.TextBody
        fontSize={20}
        textAlign="left"
        color="grayMedium"
        bold={false}
      >
        {content}
      </Card.TextBody>
    </Card>
  );
};

export default Project;
