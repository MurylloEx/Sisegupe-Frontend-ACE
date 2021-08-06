import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";
import { Home, Info, ShowChart } from "@material-ui/icons";
import Image from "next/image";
import Logo from "../../../public/logo.png";

import { useTheme } from "../hooks";

const PAGES = [
  { link: "/", linkName: "Inicio", icon: Home },
  { link: "/home/projects", linkName: "Projeto", icon: ShowChart },
  { link: "/home/about", linkName: "Sobre", icon: Info },
];

const LOGO_SIZE = 50;

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
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="flex-start" m={4}>
          <Image
            src={Logo}
            alt="upe-logo"
            height={LOGO_SIZE}
            width={LOGO_SIZE * 2.6}
          />
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
