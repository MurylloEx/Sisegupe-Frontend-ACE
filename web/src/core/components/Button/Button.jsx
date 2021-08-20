import React from "react";
import { Button as ChakraButton, ButtonGroup } from "@chakra-ui/react";
import { Constants } from "core/utils";
import IconButton from "./Icon";
import Outlined from "./Outlined";

const Button = ({ children, ...props }) => {
  const { disabledDefaultBg } = Constants;

  return (
    <ChakraButton
      {...{
        bg: "primary",
        color: "white",
        size: "lg",
        _hover: disabledDefaultBg,
        _focus: disabledDefaultBg,
        _active: disabledDefaultBg,
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
