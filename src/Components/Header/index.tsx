import { Typography } from "@mui/material";

const Header = ({ text }: { text: string }) => {
  return (
    <Typography variant="h3" color="#6f6af8">
      {text}
    </Typography>
  );
};

export default Header;
