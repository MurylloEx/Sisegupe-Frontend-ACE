import { Select as ChakraSelect, Text, HStack } from "@chakra-ui/react";

const Select = ({ items, defaultValue, label, ...props }) => {
  const renderOptionElement = (value, index) => (
    <option value={value} key={index}>
      {value}
    </option>
  );

  const renderLabel = () => {
    return (
      label && (
        <Text fontSize="2xl" width="20%" fontWeight="bold">
          {label}:{" "}
        </Text>
      )
    );
  };

  return (
    <HStack>
      {renderLabel()}
      <ChakraSelect
        borderWidth={3}
        variant="outline"
        width="80%"
        fontSize="1xl"
        size="lg"
        {...props}
      >
        {items.map(renderOptionElement)}
      </ChakraSelect>
    </HStack>
  );
};

export default Select;
