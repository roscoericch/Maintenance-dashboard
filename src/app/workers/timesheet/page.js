"use client";
import { useState } from "react";
import Image from "next/image";
import Close from "@/components/icon/Close";
import Add from "@/components/icon/Add";
import Hamburger from "@/components/icon/Hamburger";
import {
  CustomInput as Input,
  CustomDatePicker as DatePicker,
  CustomTimePicker as TimePicker,
  CustomSelect as Select,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
} from "@/components/lib/antdComponent";

const Page = () => {
  const [entry, setEntry] = useState([1]);
  return (
    <>
      <nav className="w-full bg-white py-[1%] px-[2%] flex items-center justify-between sticky top-0">
        <span className="flex items-center">
          <label
            htmlFor="my-drawer-2"
            className="flex lg:hidden text-blue-800 px-3"
          >
            <Hamburger />
          </label>

          <h2 className="text-[#00359A] text-[32px] font-[600]">Timesheet</h2>
        </span>
        <span className="flex items-center gap-[1rem]">
          <Image
            src={"/images/profile_img.jpg"}
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="flex flex-col gap-[0.1rem]">
            <p className="text-[#1F1F1F] text-[16px] font-[600]">
              Adelakin Adelakin
            </p>
            <p className="text-[#828282] text-[14px] font-[400]">User</p>
          </span>
        </span>
      </nav>
      <section className="w-[95%] mx-auto flex flex-col gap-[1rem]">
        <span className="border-b border-[#E0E0E0]">
          <h2 className="text-[#1F1F1F] text-[24px] font-[600]">
            Good Morning, Adelakin
          </h2>
          <p className="text-[#4F4F4F] text-[16px] font-[400]">
            Fill the timesheet and submit. The agency will review and make the
            payment.
          </p>
        </span>
        <div className="bg-white p-[2%] flex flex-col gap-[1rem]">
          <span className="flex flex-col gap-[0.2rem]">
            <label className="text-[#1F1F1F] font-[400] text-[16px]">
              Employee Name
            </label>
            <span className="grid grid-cols-3 gap-[1rem]">
              <Input placeHolder="First Name" />
              <Input placeHolder="Middle Name" />
              <Input placeHolder="Last Name" />
            </span>
          </span>
          <span className="flex flex-col gap-[0.2rem]">
            <label className="text-[#1F1F1F] font-[400] text-[16px]">
              Email Address
            </label>
            <Input type="email" placeHolder="Enter Email Address" />
          </span>
          <span className="grid grid-cols-[40%_58%] gap-[2%]">
            <span className="flex flex-col gap-[0.2rem]">
              <label className="text-[#1F1F1F] font-[400] text-[16px]">
                Company Name
              </label>
              <Input placeHolder="Enter Company Name" />
            </span>
            <span className="flex flex-col gap-[0.2rem]">
              <label className="text-[#1F1F1F] font-[400] text-[16px]">
                Property Address
              </label>
              <Input placeHolder="Enter Property Address" />
            </span>
          </span>
          <span className="grid grid-cols-[58%_40%] gap-[2%]">
            <span className="flex flex-col gap-[0.2rem]">
              <label className="text-[#1F1F1F] font-[400] text-[16px]">
                Role
              </label>
              <Input placeHolder="Enter Company Name" />
            </span>
            <span className="flex flex-col gap-[0.2rem]">
              <label className="text-[#1F1F1F] font-[400] text-[16px]">
                Sunday Week Ending Date
              </label>
              <DatePicker />
            </span>
          </span>
          <span className="text-[#1F1F1F] text-[22px] font-[500]">
            Time Entries
          </span>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="grid grid-cols-7 ">
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                Start Date
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                Start Time
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                Break
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                End Time
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                End Date
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                Sleep In
              </label>
              <label className="text-center text-[#303030] text-[16px] font-[400]">
                Total
              </label>
            </span>
            {entry.map((e, i) => (
              <div key={i} className="flex items-center">
                <Close
                  onClick={() => setEntry((prev) => prev.pop())}
                  className="cursor-pointer"
                />
                <span className="grid grid-cols-7 rounded-[10px] border border-[#4F4F4F]">
                  <span className="border-r border-[#4F4F4F]">
                    <DatePicker bordered={false} />
                  </span>
                  <span className="border-r border-[#4F4F4F]">
                    <TimePicker bordered={false} />
                  </span>
                  <span className="border-r border-[#4F4F4F]">
                    <Select className="!w-full" options={[]} bordered={false} />
                  </span>
                  <span className="border-r border-[#4F4F4F]">
                    <TimePicker bordered={false} />
                  </span>
                  <span className="border-r border-[#4F4F4F]">
                    <DatePicker bordered={false} />
                  </span>
                  <span className="border-r border-[#4F4F4F]">
                    <Select className="!w-full" options={[]} bordered={false} />
                  </span>
                  <InputNumber
                    className="!w-full"
                    controls={false}
                    bordered={false}
                  />
                </span>
              </div>
            ))}
          </div>
          <p className="text-right">0.00</p>
          <Button
            onClick={() => setEntry((prev) => [...prev, 1])}
            className="w-fit !flex !items-center"
            icon={<Add />}
          >
            Add Entry
          </Button>
        </div>
      </section>
    </>
  );
};

export default Page;
