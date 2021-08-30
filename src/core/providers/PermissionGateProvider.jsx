import { Box, Text } from "@chakra-ui/react";
import { useUser } from "core/hooks";
import { ROLES } from "core/utils/constants";

const PermissionGateProvider = ({ children }) => {
  const { type } = children;
  const { configs } = type ?? {};
  const { role = "" } = configs;

  const [{ role: userRole }] = useUser();

  if (role === userRole || userRole === ROLES.ADMIN) {
    return children;
  }

  return (
    <Box>
      <Text fontSize="4xl" color="secondary" textAlign="center">
        404!
      </Text>
      <Text fontSize="4xl" color="secondary" textAlign="center">
        Você não tem acesso a essa funcionalidade!
      </Text>
    </Box>
  );
};

export default PermissionGateProvider;
