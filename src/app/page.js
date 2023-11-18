"use client";
import {
  CustomInput as Input,
  CustomSelect as Select,
  CustomPasswordInput as Password,
  CustomButton as Button,
} from "@/components/lib/antdComponent";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center justify-between">
      {/* Background Image for Desktop */}
      <div className="hidden md:block bg-[url('../../public/images/signupimg.png')] bg-center h-screen w-6/12"></div>
      <div className="bg-white h-screen w-full md:w-7/12">
        <div className="flex flex-col items-center justify-center h-screen w-[98%]">
          <div className="w[98%] md:w9/12">
            <p className="text-right">
              Already have an account?{" "}
              <span className="text-[#00359A]">Login Here</span>
            </p>
          </div>
          <div className="w9/12 flex flex-col gap-1">
            <h1 className="text-[32px] text-[#1F1F1F] font-[600]">
              Welcome To Nova!
            </h1>
            <p className="text-[#828282] font-[400] text-[22px]">
              Create Your Account
            </p>
          </div>
          <div className="w9/12 flex flex-col gap-2">
            <span className="flex flex-col gap-1">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Agency Name
              </label>
              <Input placeholder="Enter Agency Name" className="w-full h-9" />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Email Address
              </label>
              <Input
                placeholder="Enter Email Address"
                type="Email"
                className="w-full h-9"
              />
            </span>
            <span className="flex justify-between gap-5">
              <span className="flex flex-col gap-1 w-full">
                <label className="text-[#1F1F1F] text-[16px] font-[400]">
                  Country
                </label>
                <Select className="!w-full" options={[]} />
              </span>
              <span className="flex flex-col gap-1 w-full">
                <label className="text-[#1F1F1F] text-[16px] font-[400]">
                  City
                </label>
                <Select className="!w-full" options={[]} />
              </span>
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Password
              </label>
              <Password placeholder="Enter Password" className="w-full h-9" />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Confirm Password
              </label>
              <Password placeholder="Confirm Password" className="w-full h-9" />
            </span>
            <p className="mb-4">
              By creating an account, you agree to our | Terms of service |
              Piracy Policy.
            </p>
          </div>
          <div className="w-full">
            <Button
              htmlType="submit"
              type="primary"
              className="!w-full !h-14 rounded-lg border border-solid bg-[#00AEFF] text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
