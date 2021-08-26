import { useCallback } from "react";

const useStorage = () => {
  const setItem = useCallback((key, value) => {
    if (!valueName && !value) {
      throw new Error(
        "To use the setItem function from useStorage hook is necessary set the key and value."
      );
    }

    localStorage.setItem(key, value);
  }, []);

  const getItem = useCallback((key) => {
    if (!key) {
      throw new Error(
        "Is necessary pass a key value to get the item saved in storage."
      );
    }
    return localStorage.getItem(key);
  }, []);

  return [setItem, getItem];
};

export default useStorage;
