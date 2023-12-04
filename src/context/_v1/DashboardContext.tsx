import { createContext, useReducer, ReactElement, useCallback } from "react";
import {
  Actions,
  ActionType,
  InitialState,
  UseDashboardContextType,
  DashboardContextChildren,
} from "./types";
import { User, Movie } from "../../utils/v1/dummyDataUtils/types";

export const initialState: InitialState = {
  data: { users: [], movies: [] },
};

const stateReducer = (state: InitialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return { data: action.payload.data };
    case ActionType.REMOVE_DATA:
      return { data: { users: [], movies: [] } };
    default:
      return state;
  }
};

export const useDashboardContext = (initialState: InitialState) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setData = useCallback((data: { users: User[]; movies: Movie[] }) => {
    dispatch({ type: ActionType.SET_DATA, payload: { data } });
  }, []);

  const removeData = useCallback(() => {
    dispatch({
      type: ActionType.REMOVE_DATA,
      payload: { data: { users: [], movies: [] } },
    });
  }, []);

  return { state, setData, removeData };
};

const initialStateContext: UseDashboardContextType = {
  state: initialState,
  setData: () => {},
  removeData: () => {},
};

export const DashboardContext =
  createContext<UseDashboardContextType>(initialStateContext);

export const DashboardContextProvider = ({
  children,
  ...initialState
}: DashboardContextChildren & InitialState): ReactElement => {
  return (
    <DashboardContext.Provider value={useDashboardContext(initialState)}>
      {children}
    </DashboardContext.Provider>
  );
};
