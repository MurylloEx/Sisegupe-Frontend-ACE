import React from "react";
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { Constants } from "core/utils";

/**
 *
 * @param {IconButtonProps} props
 * @returns JSX.Element
 */
const IconButton = (props) => {
  const { DISABLED_DEFAULT_BG } = Constants;

  return (
    <ChakraIconButton
      {...{
        _hover: DISABLED_DEFAULT_BG,
        _focus: DISABLED_DEFAULT_BG,
        _active: DISABLED_DEFAULT_BG,
        ...props,
      }}
    />
  );
};

export default IconButton;
