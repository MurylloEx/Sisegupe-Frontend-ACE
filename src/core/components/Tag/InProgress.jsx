import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useTheme } from "core/hooks";

const InProgress = (props) => {
  const { colors } = useTheme();

  return (
    <HStack {...props}>
      <WatchLaterIcon style={{ color: colors.error }} />
      <Text color="error" fontWeight="bold">
        Em andamento
      </Text>
    </HStack>
  );
};

export default InProgress;
