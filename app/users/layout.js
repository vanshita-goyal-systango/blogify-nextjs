import Header from "@/components/header/Header";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import { ThemeProvider } from "next-themes";

export default function UsersLayout({children}){
    return(
        <>
      <ThemeProvider attribute="class">
        <AuthContextProvider>
          <Header/>
          {children}
          </AuthContextProvider>
        </ThemeProvider>
        </>
    )
}