import Image from "next/image";
import Hamburger from "@/components/icon/Hamburger";

const page = () => {
  return (
    <>
      <nav className="w-full bg-white py-[1%] px-[2%] flex items-center justify-between sticky top-0 z-10">
        <span className="flex items-center">
          <label
            htmlFor="my-drawer-2"
            className="flex lg:hidden text-blue-800 px-3"
          >
            <Hamburger />
          </label>

          <h2 className="text-[#00359A] text-[32px] font-[600]">My ID</h2>
        </span>
        <span className="flex items-center gap-[1rem]">
          <Image
            src={"/images/profile_img.jpg"}
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="hidden md:flex flex-col gap-[0.1rem]">
            <p className="text-[#1F1F1F] text-[16px] font-[600]">
              Adelakin Adelakin
            </p>
            <p className="text-[#828282] text-[14px] font-[400]">User</p>
          </span>
        </span>
      </nav>
      <section className="bg-[#F8F8F8] w-[95%] mx-auto flex flex-col gap-[1rem]">
        <span className="border-b border-[#E0E0E0]">
          <h2 className="text-[#1F1F1F] text-[24px] font-[600]">ID Details</h2>
          <p className="text-[#4F4F4F] text-[16px] font-[400]">
            This represent your electronic ID
          </p>
        </span>
        <div className="m-auto w-[90%] md:w-fit bg-white rounded-[5px] shadow-sm flex flex-col gap-[1rem] pb-[5%] p-[2%]">
          <span className="flex flex-col items-center gap-[0.5rem] border-b border-[#E0E0E0]">
            <Image
              src={"/images/profile_img.jpg"}
              width={150}
              height={150}
              className="rounded-full w-[150px] h-[150px]"
            />
            <h6 className="text-[#00359A] text-[24px] font-[500]">
              Adelanke Adelanke
            </h6>
            <p className="text-[#4F4F4F] text-[16px] font-[400]">
              Adelanke@gmail.com
            </p>
          </span>
          <span className="flex flex-col py-[2%] border-b border-[#E0E0E0]">
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#1F1F1F] text-[16px] font-[600]">Sex</h6>
              <p className="text-[#4F4F4F] text-[16px] font-[400]">Male</p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#1F1F1F] text-[16px] font-[600]">Contact</h6>
              <p className="text-[#4F4F4F] text-[16px] font-[400]">
                +44 0000 00000
              </p>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <h6 className="text-[#1F1F1F] text-[16px] font-[600]">Agency</h6>
              <p className="text-[#4F4F4F] text-[16px] font-[400]">
                Volkswagen Coorp
              </p>
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default page;
