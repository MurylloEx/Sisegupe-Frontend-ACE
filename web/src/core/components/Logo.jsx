import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";

const LOGO_SIZE = 50;

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt="upe-logo"
      height={LOGO_SIZE}
      width={LOGO_SIZE * 2.4}
    />
  );
};

export default Logo;
