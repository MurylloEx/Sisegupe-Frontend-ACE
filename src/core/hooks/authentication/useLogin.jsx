import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const LOGIN_ENDPOINT = "";

const useLogin = ({ email, password }) => {
  const {
    mutate: doLogin,
    data: response,
    ...rest
  } = usePostRequest(LOGIN_ENDPOINT);

  const requestLogin = useCallback(() => {
    doLogin({ email, password });
  }, [email, password, doLogin]);

  return [{ response, ...rest }, { requestLogin }];
};

export default useLogin;
