import React, { useCallback, useState } from "react";

const useForm = (initialValues) => {
  const [fields, setFields] = useState(initialValues);

  const updateField = useCallback(
    (field, value) => {
      if (!Object.keys(fields).find((e) => e === field)) {
        throw new Error("Please use a valid field value");
      }

      setFields({ ...fields, [field]: value });
      return;
    },
    [fields]
  );

  return [{ fields }, { updateField }];
};

export default useForm;
