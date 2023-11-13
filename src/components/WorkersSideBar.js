"use client";
import Image from "next/image";

export default function WorkersSideBar() {
  return (
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col w-[16rem] h-screen overflow-hidden shadow-xl pt-[1rem] md:pt-0 bg-[#00359A]">
        <div className="careAssist flex flex-col text-white space-y-2 p-8 border-b border-white">
          <div className="flex text-center">
            <small className="text-center font-bold text-3xl">
              Volkswagen.
            </small>
          </div>
          <small className="text-center font-bold">coorp.</small>
        </div>
        <div className="flex flex-col h-screen justify-between mt-5">
          <div>
            <ul className="space-y-4 py-4">
              <li className="flex items-center space-x-4 px-4">
                <Image
                  src="/images/Group 3038.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  Timesheet
                </a>
              </li>
              <li className="flex items-center space-x-4 px-4">
                <Image
                  src="/images/Group 3038.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  History
                </a>
              </li>
            </ul>
          </div>
          {/* Foot Tab */}
          <div className="py-4">
            <ul>
              <li className="flex items-center space-x-4 px-4">
                <Image
                  src="/images/Outline3.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  Switch User
                </a>
              </li>
              <li className="flex items-center space-x-4 px-4">
                <Image
                  src="/images/Outline3.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  Settings
                </a>
              </li>
              <li className="signOut flex items-center space-x-4 px-4">
                <Image
                  src="/images/Logout.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
