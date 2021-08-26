import NextLink from "next/link";
import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";
import { Home, Info, ShowChart, ExitToApp } from "@material-ui/icons";

import { Constants } from "core/utils";

import Logo from "./Logo";
import { Button } from "./Button";

const PAGES = [
  { link: "/", linkName: "Inicio", icon: Home },
  { link: "/home/projects", linkName: "Projetos", icon: ShowChart },
  { link: Constants.GITHUB_REPOSITORY_LINK, linkName: "Sobre", icon: Info },
];

const NavLink = ({ icon, linkName, link }) => (
  <NextLink href={link} passHref>
    <Link px={2} py={1} color="white" rounded={"md"}>
      <Icon as={icon} mx={2} />
      {linkName}
    </Link>
  </NextLink>
);

const Navbar = () => {
  const renderItem = ({ linkName, icon, link }) => (
    <NavLink key={linkName} icon={icon} linkName={linkName} link={link} />
  );

  return (
    <Box bg="primary" px={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="flex-start" m={4}>
          <Logo />
        </Flex>
        <Flex h={16} alignItems="center" justifyContent="flex-end">
          <HStack spacing={8} alignItems="center">
            {PAGES.map(renderItem)}
            {/* <Button.Icon icon={<ExitToApp style={{ color: "white" }} />} /> */}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
