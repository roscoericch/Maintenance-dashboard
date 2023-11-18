"use client";
import AgencyLayout from "@/components/AgencyLayout";
import Image from "next/image";
import Hamburger from "@/components/icon/Hamburger";
import SearchIcon from "@/components/icon/Search";
import {
  CustomProgress as PieChart,
  CustomSelect as Select,
  CustomTable as Table,
  CustomInput as Input,
} from "@/components/lib/antdComponent";
import Chart from "@/components/AreaChart";
import Link from "next/link";

const Index = () => {
  const columns = [
    {
      title: "Sub Admin’s Name",
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
      <AgencyLayout>
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

          <section className="grid grid-cols-[25%_70%] justify-between gap-[5%] w-full">
            <div className="card !p-[0.5rem] w-full">
              <div className="flex flex-col gap-3 items-center p-[0.5rem]">
                <h5 className="text-[#1F1F1F] text-[24px] font-[600] self-start">
                  Pie Chart
                </h5>
                <PieChart percent={65} />
                <p className="text-[#303030] text-[16px] font-[500]">Workers</p>
                <span className="flex justify-between items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="w-[7px] h-[7px] bg-[#00AEFF] rounded-full"></span>
                    <p className="text-[#4F4F4F] text-[10px] font-[400]">
                      Total Workers
                    </p>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-[7px] h-[7px] bg-[#00359A] rounded-full"></span>
                    <p className="text-[#4F4F4F] text-[10px] font-[400]">
                      Top Earners
                    </p>
                  </span>
                </span>
              </div>
            </div>
            <div className="card grid grid-cols-1">
              <span className="flex justify-between items-center">
                <span className="flex flex-col">
                  <h5 className="text-[#1F1F1F] text-[24px] font-[600]">
                    Statistics
                  </h5>
                  <p className="text-[#828282] text-[16px] font-[400]">
                    The progress report for registered workers..
                  </p>
                </span>
                <Select value="Annual Report" className="wfull" options={[]} />
              </span>
              <Chart />
            </div>
          </section>
          <section className="flex flex-col card">
            <div className="bg-[#00359A] rounded-t-[10px] p-[2%] w-full">
              <Input
                suffix={<SearchIcon />}
                className="!w-fit"
                placeholder="Search worker..."
              />
            </div>
            <Table columns={columns} dataSource={[]} />
          </section>
        </section>
      </AgencyLayout>
    </>
  );
};

export default Index;
