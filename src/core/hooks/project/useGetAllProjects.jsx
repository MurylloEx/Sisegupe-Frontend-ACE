import React from "react";
import useGetRequest from "../useGetRequest";

const ENDPOINT = "/projects/all/";

const useGetAllProjects = (configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(ENDPOINT, configs, options);
  return [{ response: response?.data?.data, ...rest }];
};

export default useGetAllProjects;
