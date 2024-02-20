import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { BasicCard } from "..";

interface SingleTotalCardProps {
  title: string;
  value: string;
}

export const SingleTotalCard = ({ title, value }: SingleTotalCardProps) => {
  return (
    <div data-testid="totals-card-container">
      <BasicCard elevation={0}>
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
      </BasicCard>
    </div>
  );
};

export default SingleTotalCard;
