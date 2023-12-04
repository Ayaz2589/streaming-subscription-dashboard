import { useState, useEffect } from "react";
import { Auth } from "../context";

const usePersistantLogin = () => {
  const [auth, setAuth] = useState<Auth>({
    accessToken: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const currentAuth = localStorage.getItem("auth");
    if (currentAuth) {
      setAuth(JSON.parse(currentAuth));
    }
  }, []);

  const setPersistantLogin = (auth: Auth) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    setAuth(auth);
  };

  const getPersistantLogin = () => {
    const currentAuth = localStorage.getItem("auth");
    if (currentAuth) {
      return JSON.parse(currentAuth);
    }
  };

  return { auth, setPersistantLogin, getPersistantLogin };
};

export default usePersistantLogin;
