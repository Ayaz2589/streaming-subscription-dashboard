import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useFetch, useDashboard } from "../../hooks";
import { ResponsiveDrawer } from "..";

const Main = () => {
  const { data, loading, error } = useFetch();
  const { setData } = useDashboard();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  if (error) return <div>Something went wrong...</div>; // Make better error handling

  if (loading) return <SimpleBackdrop />;

  return <ResponsiveDrawer />;
};

export default Main;

const SimpleBackdrop = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
