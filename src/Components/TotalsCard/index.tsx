import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Card } from "..";

interface Props {
  title: string;
  value: string;
  onClick?: () => void;
}

const TotalsCard = ({ title, value }: Props) => {
  return (
    <Card elevation={0}>
      <Box
        sx={{
          display: "flex",
          padding: "0rem 1rem",
          minHeight: "5rem",
        }}
      >
        <Box
          sx={{
            width: "3rem",
            height: "3rem",
            backgroundColor: "primary.light",
            borderRadius: "25px",
            alignSelf: "center",
          }}
        >
          <BarChartIcon
            fontSize="large"
            sx={{ marginTop: "5px", color: "primary.main" }}
          />
        </Box>
        <Box
          sx={{
            alignSelf: "center",
            textAlign: "left",
            marginLeft: "1rem",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "neutral.light", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalsCard;
