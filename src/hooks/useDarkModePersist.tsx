import { useEffect, useState } from "react";

const useDarkModePersist = () => {
  useEffect(() => {
    const currentDarkMode = localStorage.getItem("darkMode");
    if (currentDarkMode) {
      setDarkModePersist(JSON.parse(currentDarkMode));
    }
  }, []);

  const setDarkModePersist = () => {
    localStorage.setItem("darkMode", JSON.stringify(true));
    setDarkModePersist(true);
  };

  const getDarkModePersist = () => {
    const currentDarkMode = localStorage.getItem("darkMode");
    if (currentDarkMode) {
      return JSON.parse(currentDarkMode);
    }
  };

  const removeDarkModePersist = () => {
    localStorage.removeItem("darkMode");
    setDarkModePersist(false);
  };

  return [getDarkMode, setDarkMode, removeDarkMode] as const;
};

export default useDarkModePersist;
