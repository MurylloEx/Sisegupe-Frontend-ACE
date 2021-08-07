const { Box } = require("@chakra-ui/react");
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useTheme } from "core/hooks";

/**
 * @param {{tintColor: string, direction: 'back' | 'forward' }} props
 */
const CarouselButton = ({ tintColor, direction }) => {
  const { colors } = useTheme();

  const renderButton = () => {
    return {
      back: (
        <ArrowBackIos
          style={{ color: tintColor, fontSize: 30, paddingLeft: 8 }}
        />
      ),

      forward: (
        <ArrowForwardIos
          style={{ color: tintColor, fontSize: 30, paddingLeft: 8 }}
        />
      ),
    }[direction];
  };

  return (
    <Box bg={colors.white} p={2} borderRadius={50}>
      {renderButton()}
    </Box>
  );
};

export default CarouselButton;
