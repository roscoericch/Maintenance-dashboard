import AgencyLayout from "@/components/AgencyLayout";
import Image from "next/image";
import Hamburger from "@/components/icon/Hamburger";

const Index = () => {
  return (
    <>
      <AgencyLayout>
        <nav className="flex justify-between bg-white p-8 px-6 shadow-md sticky top-0">
          <span className="flex gap-1 items-center">
            <label
              htmlFor="my-drawer-2"
              className="flex lg:hidden text-blue-800 px-3"
            >
              <Hamburger />
            </label>
            <h1 className="text-[#00359A] text-3xl font-bold">Overview</h1>
          </span>
          <div>
            <h2>Profile</h2>
          </div>
        </nav>
        <section className="flex flex-col space-y-6 py-6 px-6">
          <section className="flex justify-between space-x-4 border-b border-grey p-2">
            <div className="flex flex-col space-y-2">
              <h1 className="text-[#1F1F1F] text-2xl font-bold">
                Good Morning, Iyanu
              </h1>
              <p className="text-[#828282] text-lg  ">
                Just one small positive thought in the morning can change your
                whole day
              </p>
            </div>
            <div className="flex flex-col space-x-2 md:flex-row">
              {/* The folder icon will be here ... */}
              <h4 className="text-[#002C81] font-bold mt-1 text-lg">
                Add Sub Admin
              </h4>
            </div>
          </section>
          {/* Card Section */}
          <section className="flex flex-col md:flex-row gap-8">
            <div className="flex justify-between bg-[#002C81] rounded-3xl p-10 shadow-md">
              <div className="flex flex-col space-y-2 text-white">
                <h2>
                  Total No. of Registered <br /> Workers
                </h2>
                <h1 className="text-2xl font-bold">1.1k</h1>
                <div className="flex space-x-2">
                  <div className="cardCircleIcon w-6 bg-[#B5FFCE] text-black text-center">
                    p{/* arrow icon will be here  */}
                  </div>
                  <h3 className="text-[#77E7A6] mt-1">+2 %</h3>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="ml-16 mt-4">
                  <Image
                    src="/images/Group 3038.png"
                    alt="profile picture"
                    width={20}
                    height={20}
                  />
                </div>
                <small className="underline text-white">View Report</small>
              </div>
            </div>
            <div className="flex justify-between bg-[#002160]  rounded-3xl p-10 shadow-md">
              <div className="flex flex-col space-y-2 text-white">
                <h2>
                  Total Payments <br /> Made
                </h2>
                <h1 className="text-2xl font-bold">25k</h1>
                <div className="flex space-x-2">
                  <div className="cardCircleIcon w-6 bg-[#B5FFCE] text-black text-center">
                    p{/* arrow icon will be here */}
                  </div>
                  <h3 className="text-[#77E7A6] mt-1">+10 %</h3>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="ml-16 mt-4">
                  <Image
                    src="/images/Group 3038.png"
                    alt="profile picture"
                    width={20}
                    height={20}
                  />
                </div>
                <small className="underline text-white">View Report</small>
              </div>
            </div>

            <div className="flex justify-between bg-[#002160]  rounded-3xl p-10 shadow-md">
              <div className="flex flex-col space-y-2 text-white">
                <h2>
                  Number of Submitted <br /> Timesheet
                </h2>
                <h1 className="text-2xl font-bold">25k</h1>
                <div className="flex space-x-2">
                  <div className="cardCircleIcon w-6 bg-[#B5FFCE] text-black text-center">
                    p{/* arrow icon will be here */}
                  </div>
                  <h3 className="text-[#77E7A6] mt-1">+10 %</h3>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="ml-16 mt-4">
                  <Image
                    src="/images/Group 3038.png"
                    alt="profile picture"
                    width={20}
                    height={20}
                  />
                </div>
                <small className="underline text-white">View Report</small>
              </div>
            </div>
          </section>

          <section className="flex justify-between gap-12">
            <div className="card w-1/5 h-1/2">
              <div className="flex flex-col items-center p-4"></div>
            </div>
            <div className="card w-4/5 h-1/2">
              <div className="flex flex-col  p-4"></div>
            </div>
          </section>

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
    </>
  );
};

export default Index;
