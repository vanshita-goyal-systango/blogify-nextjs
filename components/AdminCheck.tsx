"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const AdminCheck: React.FC = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("isAdmin") !== "true"
    ) {
      redirect("/login");
    }
  }, [redirect]);

  return null;
};

export default AdminCheck;
