import { User, Movie } from "../../utils/v1/dummyDataUtils/types";

export enum ActionType {
  SET_DATA = "SET_DATA",
  REMOVE_DATA = "REMOVE_DATA",
}

interface Actions {
  type: ActionType;
  payload: {
    data: { users: User[]; movies: Movie[] };
  };
}

export default Actions;
