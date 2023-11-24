import { useState, useEffect } from "react";
import { monotone, highSchoolMascot } from "../theme";

const useSetTheme = () => {
  const [theme, setTheme] = useState(monotone);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "monotone") {
      setTheme(monotone);
    } else if (currentTheme === "highSchoolMascot") {
      setTheme(highSchoolMascot);
    }
  }, []);

  const setMonotone = () => {
    localStorage.setItem("theme", "monotone");
    setTheme(monotone);
  };

  const setHighSchoolMascot = () => {
    localStorage.setItem("theme", "highSchoolMascot");
    setTheme(highSchoolMascot);
  };

  return { theme, setMonotone, setHighSchoolMascot };
};

export default useSetTheme;
