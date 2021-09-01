import { Box } from "@chakra-ui/react";
import React from "react";

import Completed from "./Completed";
import InProgress from "./InProgress";
/**
 *
 * @param {{tagType: 1 ('Concluído')| 0 ('Em andamento')}} props
 * @returns
 */
const Tag = ({ tagType, ...props }) => {
  const renderTag = () =>
    ({
      0: InProgress,
      1: Completed,
    }[tagType] ?? Box);

  const TagElement = renderTag();

  return <TagElement {...props} />;
};

export default Tag;
