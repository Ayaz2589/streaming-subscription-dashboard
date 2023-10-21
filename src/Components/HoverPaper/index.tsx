import { ReactNode, useState } from "react";
import Paper from "@mui/material/Paper";
import { colors } from "../../utils";

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
    backgroundColor: isHovered
      ? colors.light.paper.hover
      : colors.light.paper.base,
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
