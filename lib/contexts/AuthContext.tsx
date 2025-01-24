"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  handleSignInWithGoogle: () => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsub();
  }, []);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      localStorage.setItem("user", "loggedIn");
    } catch (error) {
      setError(error instanceof Error ? error.message : null);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      router.push("/users");
    } catch (error) {
      setError(error instanceof Error ? error.message : null);
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        handleSignInWithGoogle,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
