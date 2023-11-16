"use client";
import Image from "next/image";
import ArrowDown from "@/components/icon/ArrowDown";
import {
  CustomCalendar as Calendar,
  CustomTable as Table,
} from "@/components/lib/antdComponent";
import Hamburger from "@/components/icon/Hamburger";

const page = () => {
  const columns = [
    {
      title: "Start Date",
      dataIndex: "name",
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Start Time",
      dataIndex: "gender",
      width: "15%",
    },
    {
      title: "Break",
      dataIndex: "email",
      width: "10%",
    },
    {
      title: "End Time",
      dataIndex: "gender",
      width: "15%",
    },
    {
      title: "End Date",
      dataIndex: "gender",
      width: "20%",
    },
    {
      title: "Sleep In?",
      dataIndex: "gender",
      width: "10%",
    },
    {
      title: "Total",
      dataIndex: "gender",
      width: "10%",
      fixed: "right",
    },
  ];
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

          <h2 className="text-[#00359A] text-[32px] font-[600]">History</h2>
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
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[#303030] text-[16px] font-[400]">
            Select date to view your timesheet history:
          </p>
          <Calendar fullscreen={false} />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          {/* <span className="flex flex-col gap-[0.2rem]"> */}
          <h4 className="text-[#1F1F1F] text-[24px] font-[600]">
            Timesheet Details
          </h4>
          <p className="text-[#828282] text-[16px] font-[400]">
            Your timesheet details for the 6th of June 2023 is shown below.
          </p>
          {/* </span> */}
          <div className="grid grid-cols-1 md:grid-cols-[30%_68%] gap-[2%]">
            <div className="bg-white rounded-[5px] shadow-sm flex flex-col gap-[1rem] pb[5%] p-[3%]">
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
                  <h6 className="text-[#1F1F1F] text-[16px] font-[600]">
                    Contact
                  </h6>
                  <p className="text-[#4F4F4F] text-[16px] font-[400]">
                    +44 0000 00000
                  </p>
                </span>
                <span className="flex items-center gap-[0.5rem]">
                  <h6 className="text-[#1F1F1F] text-[16px] font-[600]">
                    Agency
                  </h6>
                  <p className="text-[#4F4F4F] text-[16px] font-[400]">
                    Volkswagen Coorp
                  </p>
                </span>
              </span>
            </div>
            <div className="bg-white flex flex-col rounded-[5px] shadow-sm p-[2%]">
              <h4 className="text-[#303030] text-[24px] font-[500] py-[1%] border-b border-[#E0E0E0]">
                Timesheet Details
              </h4>
              <span className="flex items-center gap-[1rem] py-[1%] border-b border-[#E0E0E0]">
                <h6 className="text-[#1F1F1F] text-[16px] font-[600]">
                  Agency
                </h6>
                <p className="text-[#4F4F4F] text-[16px] font-[400]">
                  Volkswagen Coorp
                </p>
              </span>
              <span className="flex items-center gap-[1rem] py-[1%] border-b border-[#E0E0E0]">
                <h6 className="text-[#1F1F1F] text-[16px] font-[600]">
                  Property Address
                </h6>
                <p className="text-[#4F4F4F] text-[16px] font-[400]">
                  50, Volkswagen, London, United Kingdoms.
                </p>
              </span>
              <span className="flex items-center gap-[1rem] py-[1%] border-b border-[#E0E0E0]">
                <h6 className="text-[#1F1F1F] text-[16px] font-[600]">Role</h6>
                <p className="text-[#4F4F4F] text-[16px] font-[400]">Cleaner</p>
              </span>
              <span className="flex items-center gap-[1rem] py-[1%] border-b border-[#E0E0E0]">
                <h6 className="text-[#1F1F1F] text-[16px] font-[600]">
                  Sunday Week Ending Date
                </h6>
                <p className="text-[#4F4F4F] text-[16px] font-[400]">
                  03-09-2023
                </p>
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <span className="flex items-center gap-[0.5rem]">
                  <p className="text-[#1F1F1F] text-[16px] font-[600]">
                    Time Entries
                  </p>
                  <ArrowDown />
                </span>
                <Table
                  columns={columns}
                  // rowKey={(record) => record.login.uuid}
                  dataSource={[]}
                  size="small"
                  scroll={{ x: 800 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
