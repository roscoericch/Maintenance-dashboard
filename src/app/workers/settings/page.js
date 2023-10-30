import WorkersLayout from "../../../../components/WorkersLayout";
import Image from "next/image";
import profile_img from "../../../../assets/profile_img.jpg";
import {
  CustomTab as Tab,
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
  TextArea,
} from "../../../../components/lib/antdComponent";
import Lock from "../../../../components/icon/Lock";
import Mail from "../../../../components/icon/Mail";
import Profile from "../../../../components/icon/Profile";

const page = () => {
  const items = [
    {
      key: "1",
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
      key: "2",
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
      key: "3",
      label: (
        <span className="flex items-center gap-[1rem]">
          <Profile className="fill-inherit" />
          <p>Edit Profile</p>
        </span>
      ),
      children: (
        <div className="px-[3%] flex flex-col gap-[2rem] p-[2%] w-[90%] h-[80vh] justify-between bg-white">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="p-[0.2rem] w-fit border-b border-[#00359A]">
              <p className="text-[16px] font-[600] text-[#00359A]">
                Edit Profile
              </p>
            </span>
            <Image
              src={profile_img}
              alt=""
              className="w-[159px] h-[154px] rounded-full p-[3%] self-center justify-self-center"
            />
            <Input value={"Adelakin Adelakin"} />
            <Input value="Male" />
            <Input placeHolder="Enter Contact" />
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
    <>
      <WorkersLayout>
        <nav className="w-full bg-white py-[1%] px-[2%] flex items-center justify-between">
          <h2 className="text-[#00359A] text-[32px] font-[600]">Settings</h2>
          <span className="flex items-center gap-[1rem]">
            <Image
              src={profile_img}
              alt=""
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
        <section className=""></section>
        <section className="m-auto py-[3%]">
          <Tab items={items} tabPosition="left" />
        </section>
      </WorkersLayout>
    </>
  );
};

export default page;
