import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";

import { Button, Loading, TextInput } from "core/components";
import { LOCAL_STORAGES_LOCATIONS, ROLES } from "core/utils/constants";
import { useStorage, useUser } from "core/hooks";
import usePutRequest from "core/hooks/usePutRequest";
import Info from "core/components/Info";
import router from "next/router";

const MyProfile = () => {
  const [{ id, name, email, password, isLogged, ...rest }, { login }] =
    useUser();

  const [actualName, setActualName] = useState(name);
  const [actualEmail, setActualEmail] = useState(email);
  const [actualPassword, setActualPassword] = useState(password);
  const [, { setItem }] = useStorage();

  const {
    mutate: updateUserInfos,
    data: response,
    isSuccess,
    isError,
    isLoading,
  } = usePutRequest(`/users/${id}`);

  const onClickUpdateUserInfos = () =>
    updateUserInfos({
      email: actualEmail,
      name: actualName,
      password: actualPassword,
    });

  const onSaveCredentials = useCallback(
    (user) => {
      setItem(
        LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS,
        JSON.stringify(user)
      );
      return;
    },
    [setItem]
  );

  useEffect(() => {
    if (isSuccess && response) {
      const { data } = response ?? {};
      const { data: userData } = data ?? {};
      const { role, id, name, email } = userData;
      const user = {
        ...rest,
        id,
        name,
        email,
        password: actualPassword ?? password,
        role,
        isLogged: true,
      };

      login(user);
      onSaveCredentials(user);
      return router.push("/");
    }
    return;
  }, [
    actualPassword,
    isSuccess,
    login,
    onSaveCredentials,
    password,
    response,
    rest,
  ]);

  if (!isLogged) {
    return <Loading />;
  }
  console.log(response);

  return (
    <Stack height="100%" direction="column" spacing="20" pt="20">
      <Stack spacing="10">
        <TextInput
          defaultValue={name}
          variant="outline"
          borderWidth={3}
          p={5}
          label="Nome completo"
          hasEditableButton
          isDisabled
          onChange={(event) => setActualName(event.target.value)}
          value={actualName ?? name}
        />

        <TextInput
          defaultValue={email}
          type="email"
          variant="outline"
          borderWidth={3}
          p={5}
          label="Email"
          hasEditableButton
          isDisabled
          onChange={(event) => setActualEmail(event.target.value)}
          value={actualEmail ?? email}
        />

        <TextInput
          defaultValue={password}
          type="password"
          variant="outline"
          borderWidth={3}
          p={5}
          hasEditableButton
          label="Senha"
          isDisabled
          onChange={(event) => setActualPassword(event.target.value)}
          value={actualPassword ?? password}
        />
      </Stack>

      <Info
        errorMessage="Ocorreu um erro ao atualizar os dados do seu usuário. Por favor, tente novamente mais tarde."
        successMessage="Os dados do seu usuário foram atualizados com sucesso"
        showInfo={isSuccess || isError}
        infoType={isError ? "error" : "success"}
      />

      <Button
        alignSelf="flex-end"
        bg="success"
        onClick={onClickUpdateUserInfos}
        isLoading={isLoading}
      >
        Confirmar alterações
      </Button>
    </Stack>
  );
};

MyProfile.configs = {
  pageTitle: "Meu perfil",
  hasUserWidget: true,
  role: ROLES.NORMAL_USER,
};

export default MyProfile;
