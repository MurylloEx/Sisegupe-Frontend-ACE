import { Box } from "@chakra-ui/react";
import React from "react";

const CarouselItem = ({ children, hasSpace, ...props }) => {
  return (
    <Box mx={hasSpace ? 4 : 0} {...props}>
      {children}
    </Box>
  );
};

export default CarouselItem;
