import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BarChartIcon from "@mui/icons-material/BarChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "5rem",
  boxShadow: theme.shadows[1],
}));

interface Props {
  title: string;
  value: string;
  onClick?: () => void;
}

const TotalsCard = ({ title, value }: Props) => {
  return (
    <Item elevation={0}>
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
    </Item>
  );
};

export default TotalsCard;
