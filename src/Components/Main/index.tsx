import { useEffect } from "react";
import { useFetch, useDashboard } from "../../hooks";
import { ResponsiveDrawer } from "..";

const Main = () => {
  const { data, loading, error } = useFetch();
  const { state, setData } = useDashboard();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  console.log({ state, loading, error, setData });

  return <ResponsiveDrawer />;
};

export default Main;
