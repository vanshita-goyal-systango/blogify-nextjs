import React, { ReactNode } from 'react';
import AdminHeader from "./AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default AdminLayout;
