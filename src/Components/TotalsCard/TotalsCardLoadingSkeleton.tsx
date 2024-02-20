import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const TotalsCardLoadingSkeleton = () => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Skeleton
        variant="circular"
        width={50}
        height={50}
        sx={{ position: "absolute", top: "17px", left: "1.5rem" }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "1.5rem",
          width: "8rem",
          position: "absolute",
          top: "10px",
          left: "5.5rem",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "2.5rem",
          width: "12rem",
          position: "absolute",
          top: "28px",
          left: "5.5rem",
        }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height="5.5rem"
        sx={{ borderRadius: "0.5rem" }}
      />
    </Stack>
  );
};

export default TotalsCardLoadingSkeleton;
