import { useContext } from "react";
import { DashboardContext, InitialState } from "../context/DashboardContext";

interface UseDashboard {
  state: InitialState;
  setData: (data: []) => void;
  removeData: () => void;
}

export const useDashboard = (): UseDashboard => {
  const { state, setData, removeData } = useContext(DashboardContext);

  return { state, setData, removeData };
};

export default useDashboard