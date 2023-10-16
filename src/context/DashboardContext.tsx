import { createContext, useReducer, ReactElement, useCallback } from "react";

export enum ActionType {
  SET_DATA = "SET_DATA",
  REMOVE_DATA = "REMOVE_DATA",
}

interface Actions {
  type: ActionType;
  payload: {
    data: [];
  };
}

export interface InitialState {
  data: [];
}

export const initialState: InitialState = {
  data: [],
};

const stateReducer = (state: InitialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return { data: action.payload.data };
    case ActionType.REMOVE_DATA:
      return { data: [] };
    default:
      return state;
  }
};

const useDashboardContext = (initialState: InitialState) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setData = useCallback((data: []) => {
    dispatch({ type: ActionType.SET_DATA, payload: { data } });
  }, []);

  const removeData = useCallback(() => {
    dispatch({ type: ActionType.REMOVE_DATA, payload: { data: [] } });
  }, []);

  return { state, setData, removeData };
};

type UseDashboardContextType = ReturnType<typeof useDashboardContext>;

const initialStateContext: UseDashboardContextType = {
  state: initialState,
  setData: () => {},
  removeData: () => {},
};

export const DashboardContext =
  createContext<UseDashboardContextType>(initialStateContext);

interface Children {
  children?: ReactElement | undefined;
}

export const DashboardContextProvider = ({
  children,
  ...initialState
}: Children & InitialState): ReactElement => {
  return (
    <DashboardContext.Provider value={useDashboardContext(initialState)}>
      {children}
    </DashboardContext.Provider>
  );
};
