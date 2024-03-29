import AdminLayout from "@/components/AdminLayout";
import Image from "next/image";
import {
  CustomTab as Tab,
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
  TextArea,
  CustomSwitch as Switch,
} from "@/components/lib/antdComponent";
import Bell from "@/components/icon/Bell";
import Lock from "@/components/icon/Lock";
import Mail from "@/components/icon/Mail";
import Profile from "@/components/icon/Profile";
import Camera from "@/components/icon/Camera";
import Hamburger from "@/components/icon/Hamburger";

const page = () => {
  const items = [
    {
      key: "1",
      label: (
        <span className="flex items-center gap-[1rem]">
          <Bell className="fill-inherit" />
          <p>Notification</p>
        </span>
      ),
      children: (
        <div className="px-[3%] flex flex-col gap-[2rem] p-[2%] w-[90%] h-[80vh] justify-between bg-white">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="p-[0.2rem] w-fit border-b border-[#00359A]">
              <p className="text-[16px] font-[600] text-[#00359A]">
                Notification
              </p>
            </span>
            <span className="flex justify-between items-center">
              <span className="inlineblock">
                <p className="text-[#1F1F1F] text-[16px] font-[600]">
                  Notify me when a new worker joins:
                </p>
                <p className="text-[#4F4F4F] text-[16px] font-[600]">
                  Get notifications when a new worker sign up and joins.
                </p>
              </span>
              <Switch />
            </span>
            <span className="flex justify-between items-center">
              <span className="inlineblock">
                <p className="text-[#1F1F1F] text-[16px] font-[600]">
                  Notify me when a worker submit timesheet:
                </p>
                <p className="text-[#4F4F4F] text-[16px] font-[600]">
                  Get notifications when a worker submit a timesheet.
                </p>
              </span>
              <Switch />
            </span>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#00AEFF] self-end justify-self-end place-self-end"
          >
            Save Changes
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex items-center gap-[1rem]">
          <Lock className="fill-inherit" />
          <p>Change Password</p>
        </span>
      ),
      children: (
        <div className="px-[3%] flex flex-col gap-[2rem] p-[2%] w-[90%] h-[80vh] justify-between bg-white">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="p-[0.2rem] w-fit border-b border-[#00359A]">
              <p className="text-[16px] font-[600] text-[#00359A]">
                Change Password
              </p>
            </span>
            <span className="flex flex-col gap-[0.1rem]">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Default Password
              </label>
              <Input placeHolder="Enter Default Password" />
            </span>
            <span className="flex flex-col gap-[0.1rem]">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                New Password
              </label>
              <PasswordInput placeHolder="Enter Default Password" />
            </span>
            <span className="flex flex-col gap-[0.1rem]">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Confirm New Password
              </label>
              <PasswordInput placeHolder="Enter Default Password" />
            </span>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#00AEFF] self-end justify-self-end place-self-end"
          >
            Save Changes
          </Button>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span className="flex items-center gap-[1rem]">
          <Mail className="fill-inherit" />
          <p>Change Email Address</p>
        </span>
      ),
      children: (
        <div className="px-[3%] flex flex-col gap-[2rem] p-[2%] w-[90%] h-[80vh] justify-between bg-white">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="p-[0.2rem] w-fit border-b border-[#00359A]">
              <p className="text-[16px] font-[600] text-[#00359A]">
                Change Email Address
              </p>
            </span>
            <span className="flex flex-col gap-[0.1rem]">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                Old Email Address
              </label>
              <Input placeHolder="Enter Old Email Address" />
            </span>
            <span className="flex flex-col gap-[0.1rem]">
              <label className="text-[#1F1F1F] text-[16px] font-[400]">
                New Email Address
              </label>
              <Input placeHolder="Enter New Email Address" />
            </span>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#00AEFF] self-end justify-self-end"
          >
            Save Changes
          </Button>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <span className="flex items-center gap-[1rem]">
          <Profile className="fill-inherit" />
          <p>Edit Profile</p>
        </span>
      ),
      children: (
        <div className="px-[3%] flex flex-col gap-[2rem] p-[2%] w-[90%] h-[80vh] justify-between bg-white">
          <div className="flex flex-col gap-[1rem]">
            <span className="p-[0.2rem] w-fit border-b border-[#00359A]">
              <p className="text-[16px] font-[600] text-[#00359A]">
                Edit Profile
              </p>
            </span>
            <span className="relative mx-auto">
              <Image
                src={"/images/Mask Group.png"}
                width={159}
                height={154}
                alt=""
                className="w-[159px] h-[154px] rounded-full p-[3%] self-center justify-self-center"
              />
              <Camera className="absolute right-0 bottom-0" />
            </span>
            <Input className="!py-[1%]" value={"Adelakin Adelakin"} />
            <Input className="!py-[1%]" value="Male" />
            <Input className="!py-[1%]" placeHolder="Enter Contact" />
            <TextArea placeHolder="About Me" />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-[#00AEFF] self-end justify-self-end"
          >
            Save Changes
          </Button>
        </div>
      ),
    },
  ];
  return (
    <AdminLayout>
      <nav className="w-full bg-white py-[1%] px-[2%] flex items-center justify-between sticky top-0">
        <span className="flex items-center gap-1">
          <label
            htmlFor="my-drawer-2"
            className="flex lg:hidden text-blue-800 px-3"
          >
            <Hamburger />
          </label>
          <h2 className="text-[#00359A] text-[32px] font-[600]">Settings</h2>
        </span>
        <span className="flex items-center gap-[1rem]">
          <Image
            src={"/images/Mask Group.png"}
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="flex flex-col gap-[0.1rem]">
            <p className="text-[#1F1F1F] text-[16px] font-[600]">
              Volkswagen Coorp
            </p>
            <p className="text-[#828282] text-[14px] font-[400]">
              Administrator
            </p>
          </span>
        </span>
      </nav>
      <section className=""></section>
      <section className="m-auto py-[3%]">
        <Tab items={items} tabPosition="left" />
      </section>
    </AdminLayout>
  );
};

export default page;
