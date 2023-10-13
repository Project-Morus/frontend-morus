import { ReactNode, createContext, useCallback, useState } from "react";
import { localStorageKey } from "../configs/localStorageKeys";
import httpClient from "../services/httpClient";

interface AuthContextValue {
  signedIn?: boolean;
  signIn(token: string): void
  signOut(): void
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKey.ACCESS_TOKEN)

    return !!storedAccessToken
  })

  const signIn = useCallback((token: string) => {
    localStorage.setItem(localStorageKey.ACCESS_TOKEN, token)
    httpClient.defaults.headers.Authorization = `Bearer ${token}`

    setSignedIn(true)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKey.ACCESS_TOKEN)

    setSignedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signedIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}