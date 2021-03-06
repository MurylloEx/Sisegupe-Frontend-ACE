import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";
import {
  Home,
  Info,
  ShowChart,
  ExitToApp,
  SupervisorAccount,
} from "@material-ui/icons";

import { useStorage, useUser } from "core/hooks";
import { ROLES, GITHUB_REPOSITORY_LINK } from "core/utils/constants";

import Logo from "./Logo";
import { Button } from "./Button";

const PAGES = [
  { link: "/", linkName: "Inicio", icon: Home },
  { link: "/home/projects", linkName: "Projetos", icon: ShowChart },
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
  const router = useRouter();

  const [{ isLogged, role }, { logout }] = useUser();
  const [, { clear }] = useStorage();

  const isUserAdmin = role === ROLES.ADMIN;

  const renderItem = ({ linkName, icon, link }) => (
    <NavLink key={linkName} icon={icon} linkName={linkName} link={link} />
  );

  const onClickDoLogout = () => {
    logout();
    clear();
    router.replace("/");
  };

  return (
    <Box bg="primary" px={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="flex-start" m={4}>
          <Logo />
        </Flex>
        <Flex h={16} alignItems="center" justifyContent="flex-end">
          <HStack spacing={8} alignItems="center">
            {PAGES.map(renderItem)}
            <Link
              href={GITHUB_REPOSITORY_LINK}
              target="_blank"
              px={2}
              py={1}
              color="white"
              rounded={"md"}
            >
              <Icon as={Info} mx={2} />
              Sobre
            </Link>
            {isUserAdmin && (
              <NavLink
                icon={SupervisorAccount}
                linkName={"Página do administrador"}
                link={"/admin"}
              />
            )}
            {isLogged && (
              <Button.Icon
                icon={<ExitToApp style={{ color: "white" }} />}
                onClick={onClickDoLogout}
              />
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
