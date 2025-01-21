import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
