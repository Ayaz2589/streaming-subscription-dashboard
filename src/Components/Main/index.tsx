import { useEffect, useCallback } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { User, Movie } from "../../db/utils/dummyDataUtils/types";

import { useFetch, useDashboard } from "../../hooks";
import { ResponsiveDrawer } from "..";

const Main = () => {
  const { data, loading, error } = useFetch();
  const { setData } = useDashboard();

  const cachedSetData = useCallback(
    (data: { users: User[]; movies: Movie[] }) => setData(data),
    [setData]
  );

  useEffect(() => {
    if (data) {
      cachedSetData(data);
    }
  }, [data, cachedSetData]);

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
