import { Grid } from "@mui/material";
import { SingleTotalCard } from "..";

interface TotalsCardProps {
  data: any;
}

const TotalsCard = ({ data }: TotalsCardProps) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <Grid
          item
          xs={12}
          md={4}
          lg={2}
          key={index}
          data-testid="totals-card-grid-item"
        >
          <SingleTotalCard title={item.title} value={item.value} />
        </Grid>
      ))}
    </>
  );
};

export default TotalsCard;
