import Box from "@mui/material/Box";

const Project = ({
  handleSectionChange,
}: {
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "7rem 1rem 1rem 1rem",
        backgroundColor: "primary.light",
      }}
    >
      Project
    </Box>
  );
};

export default Project;
