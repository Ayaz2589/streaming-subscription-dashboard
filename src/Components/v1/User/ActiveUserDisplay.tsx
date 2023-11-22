import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { HoverPaper } from "..";
import { colors } from "../../../utils/v1";

const ActiveUserDisplay = ({
  count,
  title,
  handleSectionChange,
}: {
  count: number;
  title: string;
  handleSectionChange: (index: number) => void;
}) => {
  return (
    <HoverPaper
      sx={{
        width: 400,
        padding: "50px",
        borderRadius: "1rem",
        backgroundColor: colors.base.lightGray,
        height: 135,
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
      onClick={() => handleSectionChange(1)}
    >
      <PersonIcon sx={{ fontSize: "2rem" }} />
      <Typography variant="h5">{`${title}: ${count}`}</Typography>
    </HoverPaper>
  );
};

export default ActiveUserDisplay;
