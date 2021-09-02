import React from "react";
import Image from "./Image";
import LogoImageOne from "../../../public/logo.png";
import LogoImagesSecond from "../../../public/logo2.PNG";

const LOGO_SIZE = 70;

const Logo = ({ isDarkMode = false }) => {
  return (
    <Image
      src={isDarkMode ? LogoImagesSecond : LogoImageOne}
      alt="upe-logo"
      height={LOGO_SIZE}
      width={LOGO_SIZE}
    />
  );
};

export default Logo;
