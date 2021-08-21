import NextLink from "next/link";
import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";
import { Home, Info, ShowChart, PersonAdd } from "@material-ui/icons";

import { Constants } from "core/utils";

import { useTheme } from "../hooks";
import Logo from "./Logo";

const PAGES = [
  { link: "/", linkName: "Inicio", icon: Home },
  { link: "/home/projects", linkName: "Projetos", icon: ShowChart },
  { link: Constants.GitHubRepositoryLink, linkName: "Sobre", icon: Info },
  { link: "/authentication/login", linkName: "Login", icon: PersonAdd },
];

const NavLink = ({ icon, linkName, colors, link }) => (
  <NextLink href={link} passHref>
    <Link px={2} py={1} color={colors.white} rounded={"md"}>
      <Icon as={icon} mx={2} />
      {linkName}
    </Link>
  </NextLink>
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
    <Box bg={colors.primary} px={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="flex-start" m={4}>
          <Logo />
        </Flex>
        <Flex h={16} alignItems="center" justifyContent="flex-end">
          <HStack spacing={8} alignItems="center">
            {PAGES.map(renderItem)}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
