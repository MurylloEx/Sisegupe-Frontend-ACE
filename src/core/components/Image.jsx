import React from "react";
import Image from "next/image";

const ImageComponent = ({ alt, ...props }) => {
  return <Image alt={alt} {...props} />;
};

export default ImageComponent;
