import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useTheme } from "core/hooks";

const InProgress = ({ fontSize = 12, ...props }) => {
  const { colors } = useTheme();

  return (
    <HStack {...props}>
      <WatchLaterIcon style={{ color: colors.error, fontSize }} />
      <Text color="error" fontWeight="bold" fontSize={fontSize}>
        Em andamento
      </Text>
    </HStack>
  );
};

export default InProgress;
