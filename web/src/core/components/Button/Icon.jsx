import React from "react";
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from "@chakra-ui/react";

/**
 *
 * @param {IconButtonProps} props
 * @returns JSX.Element
 */
const IconButton = (props) => {
  return <ChakraIconButton {...props} />;
};

export default IconButton;
