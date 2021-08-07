import { Box, Text } from "@chakra-ui/react";

const CardTextHeader = ({
  children,
  fontColor,
  bold,
  textAlign,
  fontSize,
  ...props
}) => {
  return (
    <Box p={4} {...props}>
      <Text
        color={fontColor}
        textAlign={textAlign}
        style={bold && { fontWeight: "bold" }}
        fontSize={fontSize}
      >
        {children}
      </Text>
    </Box>
  );
};

export default CardTextHeader;
