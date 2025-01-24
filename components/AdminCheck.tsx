"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminCheck: React.FC = () => {
    const router = useRouter();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("isAdmin") !== "true"
    ) {
      router.push("/login");
    }
  }, [router]);

  return null;
};

export default AdminCheck;
