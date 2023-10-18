export enum ActionType {
  SET_DATA = "SET_DATA",
  REMOVE_DATA = "REMOVE_DATA",
}

interface Actions {
  type: ActionType;
  payload: {
    data: object;
  };
}

export default Actions;
