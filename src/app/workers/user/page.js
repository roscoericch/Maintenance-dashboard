import Image from "next/image";
import ForwardArrow from "@/components/icon/ForwardArrow";
import Hamburger from "@/components/icon/Hamburger";
const arr = [1, 1, 1, 1, 1, 1];
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
          <h2 className="text-[#00359A] text-[32px] font-[600]">Switch User</h2>
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
      <section className="bg-[#F8F8F8] p-[2%] mx-auto flex flex-col gap-[1rem]">
        <span className="border-b border-[#E0E0E0]">
          <h2 className="text-[#1F1F1F] text-[24px] font-[600]">Switch User</h2>
          <p className="text-[#4F4F4F] text-[16px] font-[400]">
            You can switch your account here.
          </p>
        </span>
        <div className="w-full md:w-[60%] flex flex-col gap-[0.6rem]">
          {arr.map((_, i) => (
            <span
              key={i}
              className="bg-white rounded-[10px] shadow-sm p-[2%] grid grid-cols-[20%_70%_10%] items-center"
            >
              <Image
                src={"/images/Mask Group.png"}
                width={72}
                height={72}
                alt=""
                className="w-[72px] h-[72px] rounded-full"
              />
              <span className="flex flex-col gap-[0.3rem]">
                <h6 className="text-[#1F1F1F] text-[22px] font-[500]">
                  Volkswagen Coorp
                </h6>
                <p className="text-[#828282] text-[16px] font-[400]">
                  Volkswagen@gmail.com
                </p>
              </span>
              <ForwardArrow />
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
