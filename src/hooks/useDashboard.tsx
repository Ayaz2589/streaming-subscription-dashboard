import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { InitialState } from "../context/types";

interface UseDashboard {
  state: InitialState;
  setData: (data: object) => void;
  removeData: () => void;
}

export const useDashboard = (): UseDashboard => {
  const { state, setData, removeData } = useContext(DashboardContext);

  return { state, setData, removeData };
};

export default useDashboard;
