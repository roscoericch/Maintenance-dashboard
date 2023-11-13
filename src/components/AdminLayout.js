import AdminSideBar from "./AdminSideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7] min-h-screen h-screen overflow-y-scroll">
        {children}
      </div>
      <AdminSideBar />
    </div>
  );
};

export default AdminLayout;
