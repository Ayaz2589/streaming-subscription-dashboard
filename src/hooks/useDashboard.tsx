import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { InitialState } from "../context/types";
import { User, Movie } from "../db/utils/dummyDataUtils/types";

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
