import { ReactNode, useState } from "react";
import Paper from "@mui/material/Paper";

const HoverPaper = ({
  children,
  sx = {},
  onClick = () => {},
}: {
  children: ReactNode;
  sx: object;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const paperStyle = {
    ...sx,
    backgroundColor: isHovered ? "#e8e8e8" : "#f5f5f5",
    transition: "background-color 0.3s",
    cursor: "pointer",
  };

  return (
    <Paper
      elevation={0}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={paperStyle}
      onClick={onClick}
    >
      {children}
    </Paper>
  );
};

export default HoverPaper;
