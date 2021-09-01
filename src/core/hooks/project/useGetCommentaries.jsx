import useGetRequest from "../useGetRequest";

const useGetCommentaries = (projectId, configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(
    `commentaries/${projectId}`,
    {
      enabled: Boolean(projectId),
      ...configs,
    },
    options
  );

  return [{ response: response?.data?.data, ...rest }];
};

export default useGetCommentaries;
