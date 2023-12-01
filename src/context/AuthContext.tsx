import { createContext, ReactElement, useReducer, useCallback } from "react";

interface InitialState {
  accessToken?: string;
  refreshToken?: string;
  email?: string;
  password?: string;
}

interface Actions {
  type: ActionType;
  payload: InitialState;
}

interface AuthContextChildren {
  children?: ReactElement | undefined;
}

enum ActionType {
  SET_AUTH = "SET_AUTH",
  REMOVE_AUTH = "REMOVE_AUTH",
}

type UseAuthContext = ReturnType<typeof useAuth>;

const authReducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return { ...state, ...action.payload };
    case ActionType.REMOVE_AUTH:
      return {};
    default:
      return state;
  }
};

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, {});

  const setAuth = useCallback(
    (data: InitialState) => {
      dispatch({ type: ActionType.SET_AUTH, payload: data });
    },
    [dispatch]
  );

  const removeAuth = useCallback(() => {
    dispatch({ type: ActionType.REMOVE_AUTH, payload: {} });
  }, [dispatch]);

  return { auth: state, setAuth, removeAuth };
};

const initialAuthContext: UseAuthContext = {
  auth: {},
  setAuth: () => {},
  removeAuth: () => {},
};

export const AuthContext = createContext<UseAuthContext>(initialAuthContext);

export const AuthProvider = ({ children }: AuthContextChildren) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
