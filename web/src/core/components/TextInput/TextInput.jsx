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
} from "@chakra-ui/react";

import { useTheme } from "core/hooks";
import { Create } from "@material-ui/icons";
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
  ...props
}) => {
  const { colors } = useTheme();
  const [isDisabledState, setIsDisabledState] = useState(isDisabled);

  const renderLabel = () => {
    return (
      label && (
        <Text fontSize="2xl" width="20%" fontWeight="bold">
          {label}:{" "}
        </Text>
      )
    );
  };

  const renderEditableButton = () => {
    return (
      hasEditableButton && (
        <Button.Icon
          icon={<Create />}
          onClick={() => setIsDisabledState((prevState) => !prevState)}
        />
      )
    );
  };

  const DefaultTextInput = isTextarea ? Textarea : ChakraInput;

  return (
    <HStack>
      {renderLabel()}
      <DefaultTextInput
        {...{
          variant: "unstyled",
          color: "primary",
          focusBorderColor: "primary",
          fontSize: "2xl",
          _placeholder: { color: colors.secondary },
        }}
        isDisabled={isDisabledState}
        {...props}
      />
      {renderEditableButton()}
    </HStack>
  );
};

TextInput.Group = InputGroup;
TextInput.LeftElement = InputLeftElement;
TextInput.RightElement = InputRightElement;

export default TextInput;
