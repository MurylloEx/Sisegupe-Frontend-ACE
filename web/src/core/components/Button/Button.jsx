import React from "react";
import { Button as ChakraButton, ButtonGroup } from "@chakra-ui/react";
import { Constants } from "core/utils";
import IconButton from "./Icon";

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

export default Button;
