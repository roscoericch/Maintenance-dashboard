"use client";
import AdminLayout from "@/components/AdminLayout";
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
import FolderIcon from "@/components/icon/FolderIcon";

const options = [
  { label: "Annual report", value: "Annual report" },
  { label: "Monthly report", value: "Monthly report" },
  { label: "Weekly report", value: "Weekly report" },
];

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
      fixed: "right",
    },
  ];
  return (
    <>
      <AdminLayout>
        <nav className="flex justify-between bg-white p-2 px-6 shadow-md sticky top-0 z-10">
          <span className="flex gap-1 items-center">
            <label
              htmlFor="my-drawer-2"
              className="flex lg:hidden text-blue-800 px-3"
            >
              <Hamburger />
            </label>
            <h1 className="text-[#00359A] text-3xl font-bold">Sub Admin</h1>
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
              <p className="text-[#828282] text-[14px] font-[400]">
                Administrator
              </p>
            </span>
          </span>
        </nav>
        <section className="flex flex-col space-y-6 py-2 px-6">
          <section className="flex flex-col md:flex-row justify-between space-x-4 border-b border-grey p-2">
            <div className="flex flex-col">
              <h1 className="text-[#1F1F1F] text-2xl font-bold">
                Good Morning, Iyanu
              </h1>
              <p className="text-[#828282] text-lg">
                Just one small positive thought in the morning can change your
                whole day
              </p>
            </div>
            <div className="flex flexcol items-center justify-center md:mx-0">
              <FolderIcon />
              <h4 className="text-[#002C81] font-bold mt-1 text-lg">
                Add Sub Admin
              </h4>
            </div>
          </section>
          {/* Card Section */}
          <section className="grid grid-cols-1 md:grid-cols-[25%_70%] justify-between gap-[5%] w-full">
            <div className="card !p-[0.5rem] w-full">
              <div className="flex flex-col gap-3 items-center p-[0.5rem]">
                <h5 className="text-[#1F1F1F] text-[24px] font-[600] self-start">
                  Pie Chart
                </h5>
                <PieChart percent={65} />
                <p className="text-[#303030] text-[16px] font-[500]">
                  Sub Admin
                </p>
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
                <Select
                  className="wfull"
                  defaultValue={options[0]}
                  options={options}
                />
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
            <Table
              scroll={{ x: "1000px", y: "1000px" }}
              columns={columns}
              dataSource={[]}
            />
          </section>
        </section>
      </AdminLayout>
    </>
  );
};

export default Index;
