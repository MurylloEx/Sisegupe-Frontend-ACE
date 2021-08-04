import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";

import { useTheme } from "../hooks";
import { Home, Info, TableChart } from "@material-ui/icons";

const PAGES = [
  { link: "/", linkName: "Inicio", icon: Home },
  { link: "/home/projects", linkName: "Projeto", icon: TableChart },
  { link: "/home/about", linkName: "Sobre", icon: Info },
];

const NavLink = ({ icon, linkName, colors, link }) => (
  <Link px={2} py={1} color={colors.white} rounded={"md"} href={link}>
    <Icon as={icon} mx={2} />
    {linkName}
  </Link>
);

const Navbar = () => {
  const { colors } = useTheme();

  const renderItem = ({ linkName, icon, link }) => (
    <NavLink
      key={linkName}
      icon={icon}
      linkName={linkName}
      colors={colors}
      link={link}
    />
  );

  return (
    <Box bg={colors.blue} px={4}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          <Box color={colors.white}>Logo</Box>
        </Flex>
        <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {PAGES.map(renderItem)}
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
