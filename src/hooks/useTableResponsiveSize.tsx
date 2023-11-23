import { useWidth } from ".";

const useTableResponsiveSize = () => {
  const breakpoint = useWidth();
  if (breakpoint === "xs") {
    return 540;
  }

  if (breakpoint === "sm") {
    return 475;
  }

  if (breakpoint === "md") {
    return 520;
  }

  if (breakpoint === "lg") {
    return 700;
  }

  if (breakpoint === "xl") {
    return 1020;
  }

  return 375;
};

export default useTableResponsiveSize;
