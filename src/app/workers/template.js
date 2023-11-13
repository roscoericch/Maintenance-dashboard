import WorkersSideBar from "@/components/WorkersSideBar";

const template = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#F8F8F8] min-h-screen overflow-y-scroll">
        {children}
      </div>
      <WorkersSideBar />
    </div>
  );
};

export default template;
