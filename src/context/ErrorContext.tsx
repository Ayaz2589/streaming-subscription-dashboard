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

type Actions =
  | { type: ActionType.SET_JWT_EXPIRED_ERROR; payload: { message: string } }
  | { type: ActionType.REMOVE_ERROR };

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

export const initialErrorState: InitialState = {
  error: false,
  type: null,
  message: "",
};

const initialErrorContext = {
  error: initialErrorState,
  setJWTError: () => {},
  removeError: () => {},
};

const errorReducer = (state: InitialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionType.SET_JWT_EXPIRED_ERROR:
      return {
        error: true,
        type: "jwtExpired",
        message: action.payload.message,
      };
    case ActionType.REMOVE_ERROR:
      return initialErrorState;
    default:
      return state;
  }
};

export const ErrorContext = createContext<UseErrorContext>(initialErrorContext);

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(
    errorReducer,
    initialErrorState as InitialState
  );

  const setJWTError = useCallback(() => {
    dispatch({
      type: ActionType.SET_JWT_EXPIRED_ERROR,
      payload: { message: "JWT expired" },
    });
  }, [dispatch]);

  const removeError = useCallback(() => {
    dispatch({ type: ActionType.REMOVE_ERROR });
  }, [dispatch]);

  return (
    <ErrorContext.Provider value={{ error: state, setJWTError, removeError }}>
      {children}
    </ErrorContext.Provider>
  );
};
