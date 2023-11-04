import WorkersSideBar from "./WorkersSideBar";

const WorkersLayout = ({ children }) => {
  return (
    <>
      <section className="flex">
        <WorkersSideBar />
        <main className="w-full bg-[#F8F8F8]">{children}</main>
      </section>
    </>
  );
};

export default WorkersLayout;
