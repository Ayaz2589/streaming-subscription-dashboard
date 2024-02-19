import {
  createContext,
  ReactElement,
  useReducer,
  useCallback,
  useContext,
} from "react";

enum ActionType {
  SET_JWT_EXPIRED_ERROR = "SET_JWT_EXPIRED_ERROR",
  REMOVE_ERROR = "REMOVE_ERROR",
}

type Actions = {
  type: string;
  payload: InitialState;
};

type ErrorType = "jwtExpired" | null;

type InitialState = {
  error: boolean;
  type: ErrorType;
  message?: string;
};

interface UseErrorContext {
  error: InitialState;
  setJWTError: () => void;
  removeError: () => void;
}

const initialErrorState: InitialState = {
  error: false,
  type: null,
  message: "",
};

const initialErrorContext = {
  error: initialErrorState,
  setJWTError: () => {},
  removeError: () => {},
};

const errorReducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_JWT_EXPIRED_ERROR:
      return {
        error: true,
        type: "jwtExpired",
        message: action.payload.message,
      };
    case ActionType.REMOVE_ERROR:
      return { error: false, type: null, message: "" };
    default:
      return state;
  }
};

export const ErrorContext = createContext<UseErrorContext>(initialErrorContext);

export const useError = () => useContext(ErrorContext);
