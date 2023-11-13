import AgencyLayout from "@/components/AgencyLayout";
import Hamburger from "@/components/icon/Hamburger";

const AgencyNotification = () => {
  return (
    <AgencyLayout>
      <nav className="flex justify-between bg-white p-8 px-6 shadow-md sticky top-0">
        <span className="flex items-center gap-1">
          <label
            htmlFor="my-drawer-2"
            className="flex lg:hidden text-blue-800 px-3"
          >
            <Hamburger />
          </label>
          <h1 className="text-[#00359A] text-3xl font-bold">Notification</h1>
        </span>
      </nav>
      <section className="flex flex-col space-y-6 py-6 px-6">
        {/* Table Section */}
        <section className="flex flex-col card">
          <div className="">{/* table header with searchbar */}</div>
          <div>
            <table className="border-collapse border text-center w-full">
              <thead>
                <tr>
                  <th className="">Agencys Name</th>
                  <th>Email Address</th>
                  <th>Date</th>
                  <th>Contact</th>
                  <th>Members</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Volkswagen Group</td>
                  <td>GodwinOgbaji@gmail.com</td>
                  <td>18-02-2009</td>
                  <td>+4400000232434232</td>
                  <td>200</td>
                  <td>View Details</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </AgencyLayout>
  );
};

export default AgencyNotification;
