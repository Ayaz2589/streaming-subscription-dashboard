import { Typography } from "@mui/material";
import { colors } from "../../../utils/v1";

const Header = ({ text }: { text: string }) => {
  return (
    <Typography variant="h3" color={colors.light.primary}>
      {text}
    </Typography>
  );
};

export default Header;
