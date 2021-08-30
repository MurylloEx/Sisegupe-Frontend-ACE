import React from "react";
import Image from "./Image";
import LogoImage from "../../../public/logo.png";

const LOGO_SIZE = 70;

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt="upe-logo"
      height={LOGO_SIZE}
      width={LOGO_SIZE}
    />
  );
};

export default Logo;
