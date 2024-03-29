import AgencyLayout from "@/components/AgencyLayout";
import Hamburger from "@/components/icon/Hamburger";
import Image from "next/image";

const Agencies = () => {
  return (
    <AgencyLayout>
      <nav className="flex gap-1 items-center bg-white p-8 px-6 shadow-md sticky top-0 z-10">
        <label
          htmlFor="my-drawer-2"
          className="flex lg:hidden text-blue-800 px-3"
        >
          <Hamburger />
        </label>
        <h1 className="text-[#00359A]">Agencies</h1>
      </nav>
      <section className="flex flex-col space-y-6 py-6 px-6 h-full">
        <section className="flex justify-between space-x-4 border-b border-grey p-2">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#1F1F1F] text-2xl font-bold">
              Agencys Details
            </h1>
            <p className="text-[#828282] text-lg  ">
              You get to know more details about the agency here.
            </p>
          </div>
        </section>

        <section className="flex justify-between gap-12">
          <div className="card w-1/5">
            <div className="flex flex-col items-center p-4">
              <Image
                src="/images/Mask Group.png"
                width={150}
                height={20}
                alt="Agency Profile"
              />
              <h2 className="text-[#00359A] font-bold mt-4">
                Volkswagen Coorp
              </h2>
              <p className="text-[#4F4F4F] m-3">Volkwagen@gmail.com</p>

              <section className="w-full border-b border-grey p-2 mb-3"></section>

              <p className="text-[#1F1F1F] m-2">
                Contact:{" "}
                <span className="text-[#4F4F4F]">Volkwagen@gmail.com</span>
              </p>
              <p className="text-[#1F1F1F] m-2">
                Date Joined:{" "}
                <span className="text-[#4F4F4F]">Volkwagen@gmail.com</span>
              </p>

              <section className="w-full border-b border-grey p-2 mb-5"></section>

              <button className="w-4/5 p-3 border border-[#B00020] text-[#B00020] rounded-md bg-white m-3">
                Remove
              </button>
            </div>
          </div>
          <div className="card w-4/5">
            <div className="flex flex-col  p-4">
              <h2 className="text-[#00359A] font-bold mt-4">
                Agency Information
              </h2>

              <section className="w-full border-b border-grey p-2 mb-3"></section>

              <p className="text-[#1F1F1F] m-2">
                Company: <span className="text-[#4F4F4F]">Volkwagen Coorp</span>
              </p>

              <section className="w-full border-b border-grey p-2 mb-3"></section>

              <p className="text-[#1F1F1F] m-2">
                Email Address: Adelanke@gmail.com
              </p>

              <section className="w-full border-b border-grey p-2 mb-3"></section>

              <p className="text-[#1F1F1F] m-2">Number of Workers: 500</p>

              <section className="w-full border-b border-grey p-2 mb-3"></section>

              <p className="text-[#1F1F1F] m-2">About Us</p>
              <p className="text-[#1F1F1F] m-2 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices adipiscing neque habitant neque, metus a vitae sit ac.
                At pellentesque purus nibh arcu. Nulla iaculis massa at mattis
                sollicitudin. Arcu commodo urna id nulla eu ac augue. Neque leo
                aliq uam tempor et lacus, aliquam mam. At augue egestas risus
                amet turpis vitae phasellus id. Quis at nulla tristique arcu
                pellentesque in.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="card w-5/5">
            <div className="flex flex-col  p-4">
              <section className="flex flex-col">
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
            </div>
          </div>
        </section>
      </section>
    </AgencyLayout>
  );
};

export default Agencies;
