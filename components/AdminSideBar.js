import Image from "next/image";

export default function AdminSideBar() {
  return (
    <>
      <div className="flex flex-col bg-[#00359A] h-screen w-1/4 px-6">
        <div className="careAssist flex flex-col text-white space-y-2 p-8 border-b border-white">
            <div className="flex text-center">
                <small className="text-center font-bold text-3xl">care</small><span className="text-3xl font-bold">Assist</span>
            </div>
            <small className="text-center font-bold">We are here to assist you</small>
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
                  Overview
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
                  Agencies
                </a>
              </li>
              <li className="flex items-center space-x-4 px-4">
                <Image
                  src="/images/Outline1.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <a href="#" className="text-white">
                  Sub-Admin
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
      </div>
    </>

  );
}
