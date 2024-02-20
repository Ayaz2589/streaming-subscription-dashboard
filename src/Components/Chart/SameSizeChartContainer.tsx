import { Children, ReactElement } from "react";
import Grid from "@mui/material/Grid";

interface ChartContainerChildren {
  children: ReactElement | ReactElement[];
  xs?: number;
  md?: number;
  lg?: number;
}

const ChartContainer = ({ children, xs, md, lg }: ChartContainerChildren) => (
  <>
    {Children.map(children, (child) => {
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          {child}
        </Grid>
      );
    })}
  </>
);

export default ChartContainer;
