import { Reducer, useReducer, createContext } from "react";
import { ResponsiveDrawer } from "./Components";
import { useFetch } from "./hooks";

// const AppContext = createContext();

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

interface InitialState {
  data: [];
}

const stateReducer: Reducer<InitialState, Actions> = (
  state: [],
  action: Actions
) => {
  switch (action.type) {
    case "SET_DATA":
      return action.payload.data;
    case "REMOVE_DATA":
      return [];
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(stateReducer, []);
  // const { data, loading, error } = useFetch();

  return (
    <div style={{ margin: 0 }}>
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
