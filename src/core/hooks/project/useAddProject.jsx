import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const ENDPOINT = "/projects";

const useAddProject = (
  { title, summary, advisorName, courseName, projectStage, fileLinks },
  options = {}
) => {
  const {
    mutate: doAdd,
    data: response,
    ...rest
  } = usePostRequest(ENDPOINT, options);

  const addProject = useCallback(() => {
    doAdd({
      title,
      summary,
      advisorName,
      courseName,
      projectStage,
      fileLinks,
    });
  }, [doAdd, title, summary, advisorName, courseName, projectStage, fileLinks]);

  return [{ response: response?.data?.data, ...rest }, { addProject }];
};

export default useAddProject;
