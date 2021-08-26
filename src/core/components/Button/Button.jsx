import React from "react";
import { Button as ChakraButton, ButtonGroup } from "@chakra-ui/react";
import { Constants } from "core/utils";
import IconButton from "./Icon";
import Outlined from "./Outlined";

const Button = ({ children, ...props }) => {
  const { DISABLED_DEFAULT_BG } = Constants;

  return (
    <ChakraButton
      {...{
        bg: "primary",
        color: "white",
        size: "lg",
        _hover: DISABLED_DEFAULT_BG,
        _focus: DISABLED_DEFAULT_BG,
        _active: DISABLED_DEFAULT_BG,
        width: "100%",
        ...props,
      }}
    >
      {children}
    </ChakraButton>
  );
};

Button.Group = ButtonGroup;
Button.Icon = IconButton;
Button.Outlined = Outlined;

export default Button;
