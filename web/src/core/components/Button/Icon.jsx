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
  const { disabledDefaultBg } = Constants;

  return (
    <ChakraIconButton
      {...{
        _hover: disabledDefaultBg,
        _focus: disabledDefaultBg,
        _active: disabledDefaultBg,
        ...props,
      }}
    />
  );
};

export default IconButton;
