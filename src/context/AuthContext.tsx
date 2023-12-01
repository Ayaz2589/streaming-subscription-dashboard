import { createContext, useState, ReactElement } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({
  children,
}: {
  children: ReactElement | undefined;
}) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
