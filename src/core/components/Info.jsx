import React from "react";
import Alert from "./Alert";

const Info = ({
  errorMessage,
  successMessage,
  warningMessage,
  showInfo,
  infoType,
}) => {
  const buildMessage = () => {
    return {
      error: errorMessage,
      success: successMessage,
      warning: warningMessage,
    }[infoType];
  };

  const message = buildMessage();

  return showInfo && <Alert status={infoType} message={message} />;
};

export default Info;
