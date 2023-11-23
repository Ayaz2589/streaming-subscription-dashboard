import { useWidth } from ".";

const useResponsiveTableSizes = () => {
  const breakpoint = useWidth();
  if (breakpoint === "xs") {
    return 40;
  }

  if (breakpoint === "sm") {
    return 40;
  }

  if (breakpoint === "md") {
    return 40;
  }

  if (breakpoint === "lg") {
    return 70;
  }

  if (breakpoint === "xl") {
    return 85;
  }

  return 40;
};

export default useResponsiveTableSizes;
