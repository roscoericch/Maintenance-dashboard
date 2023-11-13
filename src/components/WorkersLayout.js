import WorkersSideBar from "./WorkersSideBar";

const WorkersLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7]">{children}</div>
      <WorkersSideBar />
    </div>
  );
};

export default WorkersLayout;
