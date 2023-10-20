import { Typography } from "@mui/material";

const Header = ({ text }: { text: string }) => {
  return <Typography variant="h1">{text}</Typography>;
};

export default Header;
