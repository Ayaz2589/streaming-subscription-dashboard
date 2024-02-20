import { Children, ReactElement } from "react";
import Grid from "@mui/material/Grid";

interface MultiSizeChartContainerProps {
  children: ReactElement | ReactElement[];
  xs: (number | undefined)[];
  md: (number | undefined)[];
  lg: (number | undefined)[];
}

const MultiSizeChartContainer = ({
  children,
  xs,
  md,
  lg,
}: MultiSizeChartContainerProps) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        return (
          <Grid
            item
            xs={xs?.length > 1 ? xs?.[index] : xs?.[0]}
            md={md?.length > 1 ? md?.[index] : md?.[0]}
            lg={lg?.length > 1 ? lg?.[index] : lg?.[0]}
          >
            {child}
          </Grid>
        );
      })}
    </>
  );
};

export default MultiSizeChartContainer;
