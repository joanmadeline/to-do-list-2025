import { useEffect, useState } from "react";
import { TASK_KEY } from "../utils/constants/localStorageConstants";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(TASK_KEY);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(TASK_KEY, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, value]);
  return [value, setValue] as const;
};
