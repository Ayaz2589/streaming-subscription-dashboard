export { useAuth, AuthContext, AuthProvider } from "./AuthContext";
export type { InitialState as Auth } from "./AuthContext";
export {
  useDarkMode,
  DarkModeContext,
  DarkModeProvider,
} from "./DarkModeContext";
export type { InitialState as DarkMode } from "./DarkModeContext";
export { ErrorContext, useError, ErrorProvider } from "./ErrorContext";
export type { initialErrorState as Error } from "./ErrorContext";
