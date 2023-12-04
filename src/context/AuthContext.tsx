import {
  createContext,
  ReactElement,
  useReducer,
  useCallback,
  useContext,
} from "react";

export interface InitialState {
  accessToken?: string;
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

interface UseAuthContext {
  auth: InitialState;
  setAuth: (data: InitialState) => void;
  removeAuth: () => void;
}

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

const initialAuthContext: UseAuthContext = {
  auth: {},
  setAuth: () => {},
  removeAuth: () => {},
};

export const AuthContext = createContext<UseAuthContext>(initialAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthContextChildren) => {
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

  return (
    <AuthContext.Provider value={{ auth: state, setAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
