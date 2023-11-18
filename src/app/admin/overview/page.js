"use client";
import AdminLayout from "@/components/AdminLayout";
import Image from "next/image";
import Hamburger from "@/components/icon/Hamburger";
import SearchIcon from "@/components/icon/Search";
import {
  CustomTable as Table,
  CustomInput as Input,
  CustomSelect as Select,
} from "@/components/lib/antdComponent";
import Link from "next/link";

const options = [
  { label: "All", value: "All" },
  { label: "Recent", value: "Recent" },
];
const Index = () => {
  const columns = [
    {
      title: "Agency’s Name",
      dataIndex: "name",
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      width: "20%",
    },
    {
      title: "Date Joined",
      dataIndex: "date",
      width: "15%",
    },
    {
      render: <Link className="text-[16px] font-[400]">View Details</Link>,
      width: "15%",
    },
  ];
  return (
    <>
      <AdminLayout>
        <nav className="flex justify-between bg-white p-8 px-6 shadow-md sticky top-0 z-10">
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
          <section className="flex flex-col card">
            <div className="bg-[#00359A] rounded-t-[10px] p-[2%] flex justify-between w-full">
              <Input
                suffix={<SearchIcon />}
                className="!w-fit"
                placeholder="Search worker..."
              />
              <Select options={options} defaultValue={options[0]} />
            </div>
            <Table columns={columns} dataSource={[]} />
          </section>
        </section>
      </AdminLayout>
    </>
  );
};

export default Index;
