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

const stateReducer = (state: [], action: Actions) => {
  switch (action.type) {
    case "SET_DATA":
      return action.payload.data;
    case "REMOVE_DATA":
      return [];
    default:
      return state;
  }
};

export default stateReducer;
