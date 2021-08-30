import React from "react";
import {
  HStack,
  Input as ChakraInput,
  Textarea,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

import { useTheme } from "core/hooks";
import { Create, Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { Button } from "../Button";

/**
 *
 * @param {InputProps} props
 * @returns JSX.Element
 */
const TextInput = ({
  label,
  hasEditableButton,
  isDisabled,
  isTextarea,
  leftIcon,
  type,
  ...props
}) => {
  const { colors } = useTheme();
  const [isDisabledState, setIsDisabledState] = useState(isDisabled);
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const isInputTypePassword = type === "password";

  const renderLeftElement = () => {
    const icon = isShowingPassword ? <Visibility /> : <VisibilityOff />;

    if (isInputTypePassword) {
      return (
        <Button.Icon
          icon={icon}
          onClick={() => setIsShowingPassword((prevState) => !prevState)}
        />
      );
    }
    if (leftIcon) {
      return <Box mx={2}>{leftIcon}</Box>;
    }
  };

  const renderRightElement = () => {
    return (
      hasEditableButton && (
        <Button.Icon
          icon={<Create />}
          onClick={() => setIsDisabledState((prevState) => !prevState)}
        />
      )
    );
  };

  const showPassword = isShowingPassword ? "text" : "password";
  const textInputType = isInputTypePassword ? showPassword : type;

  const DefaultTextInput = isTextarea ? Textarea : ChakraInput;

  return (
    <Stack>
      {label && (
        <Text fontSize="2xl" width="25%" fontWeight="bold">
          {label}
        </Text>
      )}
      <HStack>
        {renderLeftElement()}
        <DefaultTextInput
          {...{
            variant: "unstyled",
            color: "primary",
            focusBorderColor: "primary",
            fontSize: "1xl",
            _placeholder: { color: colors.grayMedium },
          }}
          isDisabled={isDisabledState}
          type={textInputType}
          {...props}
        />
        {renderRightElement()}
      </HStack>
    </Stack>
  );
};

TextInput.Group = InputGroup;
TextInput.LeftElement = InputLeftElement;
TextInput.RightElement = InputRightElement;

export default TextInput;
