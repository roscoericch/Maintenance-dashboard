import AgencyLayout from "@/components/AgencyLayout";
import Image from "next/image";
import Hamburger from "@/components/icon/Hamburger";

const AgencyOverview = () => {
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
          <h1 className="text-[#00359A]">Back</h1>
        </span>
      </nav>

      <section className="flex flex-col space-y-6 py-6 px-6">
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

        <section className="flex gap-4">
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

          <div className="flex flex-col justify-between gap-4">
            <div className="card w-4/5 h-2/3">
              <div className="flex flex-col  p-4">
                <h2 className="text-[#00359A] font-bold mt-4">
                  Agency Information
                </h2>

                <section className="w-full border-b border-grey p-2 mb-3"></section>

                <p className="text-[#1F1F1F] m-2">
                  Company:{" "}
                  <span className="text-[#4F4F4F]">Volkwagen Coorp</span>
                </p>

                <section className="w-full border-b border-grey p-2 mb-3"></section>

                <p className="text-[#1F1F1F] m-2">
                  Email Address: Adelanke@gmail.com
                </p>

                <section className="w-full border-b border-grey p-2 mb-3"></section>

                <p className="text-[#1F1F1F] m-2">Number of Workers: 500</p>

                <section className="w-full border-b border-grey p-2 mb-3"></section>
              </div>
            </div>
            <div className="card w-3/5 h-1/3"></div>
          </div>
        </section>
      </section>
    </AgencyLayout>
  );
};

export default AgencyOverview;
