import useGetRequest from "../useGetRequest";

const useGetCommentaries = (
  projectId,
  isModalOpen,
  configs = {},
  options = {}
) => {
  const { data: response, ...rest } = useGetRequest(
    `commentaries/${projectId}`,
    configs,
    {
      enabled: Boolean(isModalOpen && projectId),
      ...options,
    }
  );

  return [{ response: response?.data?.data, ...rest }];
};

export default useGetCommentaries;
