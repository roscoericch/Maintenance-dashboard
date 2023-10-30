import WorkersSideBar from "./WorkersSideBar";

const WorkersLayout = ({ children }) => {
  return (
    <>
      <section className="flex">
        <WorkersSideBar />
        <main className="w-full">{children}</main>
      </section>
    </>
  );
};

export default WorkersLayout;
