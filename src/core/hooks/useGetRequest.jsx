import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "core/services";
import { AxiosRequestConfig } from "axios";
import { useToken } from "./utils";

/**
 *
 * @param {string} url
 * @param {AxiosRequestConfig} configs
 * @param {UseQueryOptions} options
 *
 * @returns UseQueryResult
 */
const useGetRequest = (url, configs = {}, options = {}) => {
  const token = useToken();

  const personalizedConfigs = {
    headers: { Authorization: token },
  };

  console.log(personalizedConfigs);

  return useQuery({
    ...options,
    queryKey: [url, { configs, ...personalizedConfigs }],
    queryFn: () => Api.get(url, configs),
  });
};

export default useGetRequest;
