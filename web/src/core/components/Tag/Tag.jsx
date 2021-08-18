import { Box } from "@chakra-ui/react";
import React from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";
/**
 *
 * @param {{tagType: 'Concluído' | 'Em andamento'}} props
 * @returns
 */
const Tag = ({ tagType, ...props }) => {
  const renderTag = () =>
    ({
      ["Concluído"]: Completed,
      ["Em andamento"]: InProgress,
    }[tagType] ?? Box);

  const TagElement = renderTag();

  return <TagElement {...props} />;
};

export default Tag;
