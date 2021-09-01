import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const ENDPOINT = "/projects";

const useAddProject = (
  { title, summary, advisorName, courseName, projectStage, fileLink },
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
      fileLink,
    });
  }, [doAdd, title, summary, advisorName, courseName, projectStage, fileLink]);

  return [{ response: response?.data?.data, ...rest }, { addProject }];
};

export default useAddProject;
