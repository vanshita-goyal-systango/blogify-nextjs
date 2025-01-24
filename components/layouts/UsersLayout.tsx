import React, { ReactNode } from 'react';
import Header from "@/components/header/UsersHeader";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import { ThemeProvider } from "next-themes";

interface UsersLayoutProps {
  children: ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProps> = ({ children }) => {
  return (
    
      <ThemeProvider attribute="class">
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </ThemeProvider>
    
  );
};

export default UsersLayout;
