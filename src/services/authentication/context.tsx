import { createContext, ReactNode, useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, User, UserCredential } from "firebase/auth";

import { loginRequest } from "./service";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserCredential | User | undefined;
  error: any;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, repeatedPassword: string) => void;
  onLogout: () => void;
}

export const AuthenticationContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: undefined,
  isLoading: false,
  error: null,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
});

export const AuthenticationContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | UserCredential>();
  const [error, setError] = useState<any>(null);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email: string, password: string, repeatedPassword: string) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(undefined);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
