import {
  createContext,
  ReactElement,
  useReducer,
  useCallback,
  useContext,
} from "react";

export interface InitialState {
  isDarkMode: boolean;
}

interface Actions {
  type: ActionType;
}

interface DarkModeContextChildren {
  children?: ReactElement | undefined;
}

enum ActionType {
  SET_DARKMODE = "SET_DARKMODE",
  REMOVE_DARKMODE = "REMOVE_DARKMODE",
}

interface UseDarkModeContext {
  isDarkMode: boolean;
  setDarkMode: () => void;
  removeDarkMode: () => void;
}

const darkModeReducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_DARKMODE:
      return { isDarkMode: true };
    case ActionType.REMOVE_DARKMODE:
      return { isDarkMode: false };
    default:
      return state;
  }
};

const initialDarkModeContext: UseDarkModeContext = {
  isDarkMode: false,
  setDarkMode: () => {},
  removeDarkMode: () => {},
};

export const DarkModeContext = createContext<UseDarkModeContext>(
  initialDarkModeContext
);

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }: DarkModeContextChildren) => {
  const [state, dispatch] = useReducer(darkModeReducer, {
    isDarkMode: false,
  });

  const setDarkMode = useCallback(() => {
    dispatch({ type: ActionType.SET_DARKMODE });
  }, [dispatch]);

  const removeDarkMode = useCallback(() => {
    dispatch({
      type: ActionType.REMOVE_DARKMODE,
    });
  }, [dispatch]);

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode: state.isDarkMode, setDarkMode, removeDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
