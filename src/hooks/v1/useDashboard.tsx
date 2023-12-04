import { useContext } from "react";
import { DashboardContext } from "../../context/_v1/DashboardContext";
import { InitialState } from "../../context/_v1/types";
import { User, Movie } from "../../utils/v1/dummyDataUtils/types";

interface UseDashboard {
  state: InitialState;
  setData: (data: { users: User[]; movies: Movie[] }) => void;
  removeData: () => void;
}

export const useDashboard = (): UseDashboard => {
  const { state, setData, removeData } = useContext(DashboardContext);

  return { state, setData, removeData };
};

export default useDashboard;
