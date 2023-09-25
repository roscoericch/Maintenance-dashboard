import Image from "next/image";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHome, faBox, faCopy, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
  return (
    // <main className="flex min-h-screen items-center justify-between">
    //   <div className='bg-[#00359A] h-screen w-full md:w-2/12'>
    //     <div className="w-10/12 m-auto text-white text-center">
    //       <h1 className="text-xl font-bold">careAssist</h1>
    //       <p className="text-sm">We are here to assist you...</p>
    //       <hr/>
    //     </div>
    //     <div class="md:w-10/12 max-w-sm shadow-lg border text-center m-auto text-white border-white">
    //         <div class="px-6 py-4 flex justify-between">
    //         <Image
    //           src="/images/Group 3038.png"
    //           alt="profile picture"
    //           width={20}
    //           height={20}
    //         />

    //           <a>Overview</a>
    //         </div>
    //         <div class="px-6 py-4 flex justify-between">
    //         <Image
    //           src="/images/Outline.png"
    //           alt="profile picture"
    //           width={20}
    //           height={20}
    //         />
    //           <a>Agencies</a>
    //         </div>
    //         <div class="px-6 py-4 flex justify-between">
    //         <Image
    //           src="/images/Outline1.png"
    //           alt="profile picture"
    //           width={20}
    //           height={20}
    //         />
    //           <a>Sub-Admin</a>
    //         </div>
    //     </div>

    //     <div className="w-10/12 m-auto text-white text-center">
    //       <hr/>
    //     </div>

    //     <div class="md:w-10/12 max-w-sm shadow-lg border text-center m-auto text-white border-white items-end">
    //         <div class="px-6 py-4 flex justify-between">
    //         <Image
    //           src="/images/Outline3.png"
    //           alt="profile picture"
    //           width={20}
    //           height={20}
    //         />

    //           <a>Settings</a>
    //         </div>

    //         <div class="px-6 py-4 flex justify-between">
    //         <Image
    //           src="/images/Logout.png"
    //           alt="profile picture"
    //           width={20}
    //           height={20}
    //         />
    //           <a>Logout</a>
    //         </div>
    //     </div>

    //   </div>

    // </main>
    <div className="flex flex-col bg-[#00359A] h-screen justify-between">
      <div>
        <ul className="space-y-4 py-4">
          <li className="flex items-center space-x-4 px-4">
            {/* <FontAwesomeIcon icon={faHome} /> */}
            <a href="#" className="text-white">
              Dashboard
            </a>
          </li>
          <li className="flex items-center space-x-4 px-4">
            {/* <FontAwesomeIcon icon={faBox} /> */}
            <a href="#" className="text-white">
              Inventory
            </a>
          </li>
          <li className="flex items-center space-x-4 px-4">
            {/* <FontAwesomeIcon icon={faCopy} /> */}
            <a href="#" className="text-white">
              Pages
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4 py-4">
        <ul>
          <li className="flex items-center space-x-4 px-4">
            {/* <FontAwesomeIcon icon={faCog} /> */}
            <a href="#" className="text-white">
              Settings
            </a>
          </li>
          <li className="flex items-center space-x-4 px-4">
            {/* <FontAwesomeIcon icon={faSignOutAlt} /> */}
            <a href="#" className="text-white">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
